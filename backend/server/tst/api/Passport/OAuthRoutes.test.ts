import chai from 'chai';
import express from 'express';
import initializeMiddleWare from 'initializers/middleware';
import keygrip from 'keygrip';
import request from 'supertest';

const app = express();
initializeMiddleWare(app);

describe('GET /api/auth/logout', function () {
  it('logs out', (done) => {
    request(app)
      .get('/api/auth/logout')
      .then((res) => {
        chai.expect(res.status).to.be.eq(302);
        done();
      });
  });
});

describe('GET /api/auth/authStatus', function () {
  const agent = request(app);
  it('returns false if not authenticated', (done) => {
    request(app)
      .get('/api/auth/authStatus')
      .set('session', 'isAuthenticated=false')
      .expect('false', done);
  });

  const cookie = Buffer.from(JSON.stringify({user: {}})).toString('base64'); // base64 converted value of cookie

  const kg = keygrip(['keyboard cat']);
  const hash = kg.sign('session=' + cookie);
  it('returns true if authenticated', (done) => {
    agent
      .get('/api/auth/authStatus')
      .set('Cookie', ['session=' + cookie + '; ' + 'session.sig=' + hash + ';'])
      .expect('true', done);
  });
});
