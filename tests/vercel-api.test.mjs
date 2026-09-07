import test from 'node:test';
import assert from 'node:assert/strict';
import formConfig from '../api/form-config.mjs';
import leads from '../api/leads.mjs';

function response() {
  return {
    status: 0,
    headers: {},
    payload: '',
    writeHead(status, headers = {}) { this.status = status; Object.assign(this.headers, headers); },
    setHeader(name, value) { this.headers[name] = value; },
    end(value = '') { this.payload = String(value); },
  };
}

test('Vercel form-config endpoint degrades safely when SMTP secrets are absent', async () => {
  const res = response();
  await formConfig({method: 'GET', headers: {origin: 'http://localhost'}}, res);
  assert.equal(res.status, 200);
  assert.deepEqual(JSON.parse(res.payload), {ready: false, token: ''});
  assert.equal(res.headers['Cache-Control'], 'no-store');
});

test('Vercel lead endpoint rejects unsupported methods and content types', async () => {
  let res = response();
  await leads({method: 'GET', headers: {}, socket: {}}, res);
  assert.equal(res.status, 405);
  res = response();
  await leads({method: 'POST', headers: {'content-type': 'text/plain'}, socket: {}}, res);
  assert.equal(res.status, 415);
});
