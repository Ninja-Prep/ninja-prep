import cookieParser from 'cookie-parser'
import cookieSession from 'cookie-session'
import passport from 'passport'
import cors from 'cors'
import express from 'express'
import reqId from 'express-request-id'
import httpContext from 'express-http-context'
import initializeRoutes from '../Api/ApiHandler'
import expressLogger from './../logger'

export default function (app: express.Application) {
    app.use(express.json())
    app.use(cookieParser('mySecret'))
    app.use(
        cors({
            methods: ['get', 'post']
        })
    )
    app.use(
        cookieSession({
            name: 'session',
            keys: ['keyboard cat'],
            secure: false,
            httpOnly: false,
            // Cookie Options
            maxAge: 5 * 60 * 1000
        })
    )
    app.use(reqId())
    app.use(httpContext.middleware)
    app.use((req, res, next) => {
        httpContext.set('reqId', req.id)
        next()
    })
    expressLogger(app)
    app.use(passport.initialize())
    app.use(passport.session())
    initializeRoutes(app)
}
