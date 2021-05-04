import express from 'express'
import initializeMiddleWare from '../../../src/MiddleWare/InitializeMiddlewareWrapper'
import request from 'supertest'
import chai from 'chai'
import keygrip from 'keygrip'

const app = express()
initializeMiddleWare(app)

describe('GET /api/auth/logout', function () {
    it('logs out', (done) => {
        request(app)
            .get('/api/auth/logout')
            .then((res) => {
                chai.expect(res.status).to.be.eq(302)
                done()
            })
    })
})

describe('GET /api/auth/authenticationStatus', function () {
    const agent = request(app)
    it('returns false if not authenticated', (done) => {
        request(app).get('/api/auth/authenticationStatus').set('session', 'isAuthenticated=false').expect('false', done)
    })

    let cookie = Buffer.from(JSON.stringify({ isAuthenticated: true })).toString('base64') // base64 converted value of cookie

    let kg = keygrip(['keyboard cat'])
    let hash = kg.sign('session=' + cookie)
    it('returns true if authenticated', (done) => {
        agent
            .get('/api/auth/authenticationStatus')
            .set('Cookie', ['session=' + cookie + '; ' + 'session.sig=' + hash + ';'])
            .expect('true', done)
    })
})
