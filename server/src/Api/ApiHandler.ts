import compilerAPI from './ProblemSubmission/Compiler'
import OAuthAPI from './Passport/OAuthRoutes'
import stripeAPI from './Stripe/Stripe'
import challengesAPI from './ProblemSubmission/Challenges'
import express from 'express'

export default function (app: express.Application) {
    app.use('/api/submisson', compilerAPI)
    app.use('/api/auth', OAuthAPI)
    app.use('/api/payment', stripeAPI)
    app.use('/api/challenges/', challengesAPI)
}
