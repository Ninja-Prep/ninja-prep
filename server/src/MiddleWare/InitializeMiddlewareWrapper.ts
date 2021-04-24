import cookieParser from 'cookie-parser'
import cookieSession from 'cookie-session'
import passport from 'passport'
import cors from 'cors'
import express from 'express'
import initializeRoutes from '../Api/ApiHandler'
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
    app.use(passport.initialize())
    app.use(passport.session())
    initializeRoutes(app)
}
