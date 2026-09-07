import {createToken} from '../src/leads.mjs';
import {csrfReady, json, ready, runtimeSecret} from './_shared.mjs';

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    json(res, 405, {error: 'method'}, {Allow: 'GET'});
    return;
  }

  if (!csrfReady) {
    json(res, 200, {ready: false, token: ''});
    return;
  }

  const token = createToken(runtimeSecret);
  const secure = String(req.headers.origin || '').startsWith('https://') || req.headers['x-forwarded-proto'] === 'https';
  json(res, 200, {ready, token}, {
    'Set-Cookie': `wa_csrf=${token}; HttpOnly; SameSite=Strict; Path=/api; Max-Age=1200${secure ? '; Secure' : ''}`,
  });
}
