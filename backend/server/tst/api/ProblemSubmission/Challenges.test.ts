import {afterEach, beforeEach} from 'mocha';
import {dbclose, dbconnect} from 'initializers/mongoose';
import chai from 'chai';
import express from 'express';
import initializeMiddleWare from 'initializers/middleware';
import request from 'supertest';

const app = express();
initializeMiddleWare(app);

describe('POST /api/challenges/:problemPath', function () {
  beforeEach(function (done) {
    dbconnect()
      .once('open', () => done())
      .on('error', (error) => done(error));
  });
  afterEach(function (done) {
    dbclose().then(() => done());
  });
  it('can get Two-Sum', function (done) {
    request(app)
      .post('/api/challenges/Two-Sum')
      .then((res) => {
        chai.expect(res.status).to.eq(200);
        chai.expect(res.body.title).equals('Two Sum');
        chai.expect(res.body.starterCode).to.be.a('string');
        chai.expect(res.body.description).to.be.a('string');
        chai.expect(res.body.testCases).to.be.an('array');
        done();
      });
  });
  it('can get longest-unique-substring', (done) => {
    request(app)
      .post('/api/challenges/Longest-Unique-Substring')
      .then((res) => {
        chai.expect(res.status).to.eq(200);
        chai.expect(res.body.title).equals('Longest Unique Substring');
        chai.expect(res.body.starterCode).to.be.a('string');
        chai.expect(res.body.description).to.be.a('string');
        chai.expect(res.body.testCases).to.be.an('array');
        done();
      });
  });
  it('has empty body for missing problem', (done) => {
    request(app)
      .post('/api/challenges/nonExistingProblem')
      .then((res) => {
        chai.expect(res.status).to.eq(200);
        chai.expect(res.body).to.be.an('object').that.is.empty;
        done();
      });
  });
});

describe('GET /api/challenges/getChallenges', function () {
  before(function (done) {
    dbconnect()
      .once('open', () => done())
      .on('error', (error) => done(error));
  });
  after(function (done) {
    dbclose().then(() => done());
  });
  it('can get all challenges', function (done) {
    request(app)
      .get('/api/challenges/getChallenges')
      .then((res) => {
        chai.expect(res.status).to.eq(200);
        chai.expect(res.body).to.be.an('array');
        res.body.forEach((problem: {title: string; problemPath: string}) => {
          chai.expect(problem).to.have.a.property('title');
          chai.expect(problem).to.have.a.property('problemPath');
        });
        done();
      });
  });
});
