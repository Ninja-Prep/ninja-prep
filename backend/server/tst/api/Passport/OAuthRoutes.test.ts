import chai from 'chai';
import express from 'express';
import initializeMiddleWare from 'initializers/middleware';
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
