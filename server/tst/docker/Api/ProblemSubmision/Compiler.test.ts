//Require the dev-dependencies
import chai from 'chai'
import express from 'express'
import initializeMiddleWare from '../../../../src/MiddleWare/InitializeMiddlewareWrapper'
import { dbconnect, dbclose } from '../../../../src/MiddleWare/InitializeMongoose'
import request from 'supertest'

const app = express()
initializeMiddleWare(app)

describe('POST /api/challenges/execute/Two-Sum', function () {
    this.timeout(10000)
    before(function (done) {
        dbconnect()
            .once('open', () => done())
            .on('error', (error) => done(error))
    })
    after(function (done) {
        dbclose().then(() => done())
    })
    it('can submit a problem', function (done) {
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
            }`
        request(app)
            .post('/api/submisson/execute/Two-Sum')
            .send({ programmingLanguage: 'java', codeSnippet: solutionString })
            .then((res) => {
                console.log(res.text)
                chai.expect(res.status).to.eq(200)
                done()
            })
    })
})