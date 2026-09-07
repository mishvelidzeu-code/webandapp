import {randomBytes} from 'node:crypto';
import nodemailer from 'nodemailer';
import config from '../site.config.mjs';
import {createLeadHandler} from '../src/leads.mjs';
import {ui} from '../src/ui.mjs';

const normalizeOrigin = value => {
  if (!value) return '';
  const origin = /^https?:\/\//i.test(value) ? value : `https://${value}`;
  try { return new URL(origin).origin; } catch { return ''; }
};

export const allowedOrigins = [...new Set([
  config.origin,
  'https://www.webandapp.ge',
  process.env.PUBLIC_ORIGIN,
  process.env.VERCEL_URL,
  process.env.VERCEL_BRANCH_URL,
  process.env.VERCEL_PROJECT_PRODUCTION_URL,
].map(normalizeOrigin).filter(Boolean))];

export const csrfSecret = String(process.env.CSRF_SECRET || '').trim();
export const csrfReady = csrfSecret.length >= 32;
const smtpReady = Boolean(
  csrfReady &&
  process.env.SMTP_HOST &&
  process.env.SMTP_USER &&
  process.env.SMTP_PASS &&
  process.env.SMTP_FROM
);

let transport;
const sendMail = smtpReady ? async data => {
  transport ||= nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT || 465),
    secure: process.env.SMTP_SECURE !== 'false',
    auth: {user: process.env.SMTP_USER, pass: process.env.SMTP_PASS},
    connectionTimeout: 7000,
    greetingTimeout: 7000,
    socketTimeout: 12000,
    disableFileAccess: true,
    disableUrlAccess: true,
  });
  const t = ui[data.lang];
  const result = await transport.sendMail({
    from: process.env.SMTP_FROM,
    to: process.env.LEAD_RECIPIENT || config.email,
    replyTo: data.email,
    subject: `webandapp enquiry: ${data.service}`,
    text: [
      `${t.name}: ${data.name}`,
      `${t.phone}: ${data.phone}`,
      `${t.mail}: ${data.email}`,
      `${t.service}: ${data.service}`,
      `${t.budget}: ${t.budgets[Number(data.budget)] && data.budget !== '' ? t.budgets[Number(data.budget)] : t.undecided}`,
      `${t.deadline}: ${t.deadlines[Number(data.deadline)] && data.deadline !== '' ? t.deadlines[Number(data.deadline)] : t.undecided}`,
      'Consent: yes',
      `Language: ${data.lang}`,
      '',
      data.message,
    ].join('\n'),
  });
  if (!result.accepted?.length) throw new Error('Mail was not accepted');
} : undefined;

export const ready = Boolean(sendMail);
export const runtimeSecret = csrfReady ? csrfSecret : randomBytes(32).toString('hex');
export const leadHandler = createLeadHandler({
  origin: allowedOrigins,
  secret: runtimeSecret,
  ready,
  sendMail,
});

export function json(res, status, body, headers = {}) {
  res.writeHead(status, {
    'Content-Type': 'application/json; charset=utf-8',
    'Cache-Control': 'no-store',
    ...headers,
  });
  res.end(JSON.stringify(body));
}
