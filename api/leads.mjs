import {json, leadHandler} from './_shared.mjs';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    json(res, 405, {error: 'method'}, {Allow: 'POST'});
    return;
  }
  if (!String(req.headers['content-type'] || '').toLowerCase().startsWith('application/json')) {
    json(res, 415, {error: 'content_type'});
    return;
  }

  let body;
  try {
    body = req.body;
    if (Buffer.isBuffer(body)) body = JSON.parse(body.toString('utf8'));
    else if (typeof body === 'string') body = JSON.parse(body);
    if (!body || typeof body !== 'object' || Array.isArray(body)) throw new Error('Invalid body');
    if (Buffer.byteLength(JSON.stringify(body), 'utf8') > 24000) {
      json(res, 413, {error: 'too_large'});
      return;
    }
  } catch {
    json(res, 400, {error: 'invalid_json'});
    return;
  }

  await leadHandler(req, res, body);
}
