import {Validator} from 'jsonschema';
import {dbclose, dbconnect} from 'initializers/mongoose';
import chai from 'chai';
import express from 'express';
import initializeMiddleWare from 'initializers/middleware';
import request from 'supertest';

const app = express();
initializeMiddleWare(app);

describe('POST /api/challenges/execute/Two-Sum', function () {
  jest.setTimeout(5000);
  beforeAll(function (done) {
    dbconnect()
      .once('open', () => done())
      .on('error', (error) => done(error));
  });
  afterAll(function (done) {
    dbclose().then(() => done());
  });

  const validator = new Validator();
  const schema = {
    id: '/TestCases',
    verdict: {type: 'string'},
    stderr: {type: 'string'},
    judged_test_cases: {
      type: 'array',
      items: {
        properties: {
          status: {type: 'string'},
          stderr: {type: 'string'},
          user_stdout: {type: 'string'},
          user_output: {type: 'string'},
          test_case: {type: 'string'},
          expected_output: {type: 'string'},
        },
      },
    },
  };

  it('can judge a correct answer', function (done) {
    const solutionString = `class Solver {
                public int[] twoSum(int [] nums, int target) {
                    int[] ans = new int[2];
                    for (int i = 0; i < nums.length; i++) {
                        for (int j = i+1; j < nums.length; j++) {
                            if (nums[i] + nums[j] == target) {
                                ans[0] = nums[i];
                                ans[1] = nums[j];
                                return ans;
                            }
                        }
                    }
                    return null;
                }
            }`;
    request(app)
      .post('/api/submisson/execute/Two-Sum')
      .send({programmingLanguage: 'java', codeSnippet: solutionString})
      .then((res) => {
        const output = JSON.parse(res.text);
        const result = validator.validate(output, schema);
        chai.expect(result.valid).to.be.true;
        chai.expect(output.verdict).to.eq('ACCEPTED');
        chai.expect(output.stderr).to.eq('');
        output.judged_test_cases.forEach((testCase: any) => {
          chai.expect(testCase.user_output).to.eq(testCase.expected_output);
          chai.expect(testCase.status).to.eq('ACCEPTED');
        });
        chai.expect(res.status).to.eq(200);
        done();
      });
  });

  it('can judge an incorrect answer', function (done) {
    const solutionString = `class Solver {
                public int[] twoSum(int [] nums, int target) {
                    return null;
                }
            }`;
    request(app)
      .post('/api/submisson/execute/Two-Sum')
      .send({programmingLanguage: 'java', codeSnippet: solutionString})
      .then((res) => {
        const output = JSON.parse(res.text);
        const result = validator.validate(output, schema);
        chai.expect(result.valid).to.be.true;
        chai.expect(output.verdict).to.eq('Wrong Answer');
        chai.expect(output.stderr).to.eq('');
        output.judged_test_cases.forEach((testCase: any) => {
          chai.expect(testCase.user_output).to.not.eq(testCase.expected_output);
          chai.expect(testCase.status).to.eq('Wrong Answer');
        });
        chai.expect(res.status).to.eq(200);
        done();
      });
  });

  it('can judge a compile error', function (done) {
    const solutionString = `class Solver {
                public int[] twoSum(int [] nums, int target) {
                    return null
                }
            }`;
    request(app)
      .post('/api/submisson/execute/Two-Sum')
      .send({programmingLanguage: 'java', codeSnippet: solutionString})
      .then((res) => {
        const output = JSON.parse(res.text);
        const result = validator.validate(output, schema);
        chai.expect(result.valid).to.be.true;
        chai.expect(output.verdict).to.eq('Compile Error');
        chai.expect(output.stderr).to.not.be.empty;
        chai.expect(output.judged_test_cases).to.be.empty;
        chai.expect(res.status).to.eq(200);
        done();
      });
  });
});
