import passport from 'passport'
import PassportGoogle from 'passport-google-oauth20'
import { logError, logger } from '../logger'
const GoogleStrategy = PassportGoogle.Strategy
const FacebookStrategy = require('passport-facebook').Strategy
const GitHubStrategy = require('passport-github2').Strategy
import User from '../Models/User'
import { METRIC_MEASURES, recordMetric } from '../GCPMetrics'

passport.use(
    new GoogleStrategy(
        {
            clientID: process.env.GOOGLE_CLIENT,
            clientSecret: process.env.GOOGLE_SECRET,
            callbackURL: '/api/auth/google/callback',
            proxy: true
        },
        function (_accessToken, _refreshToken, profile, done) {
            recordMetric(METRIC_MEASURES.GOOGLE_OAUTH_COUNT_MEASURE, 1)
            User.findOrCreate(profile, function (err: string | Error, user: Express.User) {
                if (err) logError(err)
                done(err, user)
            })
        }
    )
)

passport.use(
    new FacebookStrategy(
        {
            clientID: process.env.FACEBOOK_CLIENT,
            clientSecret: process.env.FACEBOOK_SECRET,
            callbackURL: '/api/auth/facebook/callback'
        },
        function (_accessToken: any, _refreshToken: any, profile: any, done: (arg0: any, arg1: undefined) => void) {
            User.findOrCreate(profile, function (err: any, user: any) {
                if (err) {
                    logError(err)
                    done(err, user)
                } else {
                    done(null, user)
                }
            })
        }
    )
)

passport.use(
    new GitHubStrategy(
        {
            clientID: process.env.GITHUB_CLIENT,
            clientSecret: process.env.GITHUB_SECRET,
            scope: ['read:user']
        },
        function (_accessToken: any, _refreshToken: any, profile: any, done: (arg0: any, arg1: undefined) => any) {
            User.findOrCreate(profile, function (err: any, user: any) {
                if (err) {
                    logError(err)
                    return done(err, user)
                }
                return done(err, user)
            })
        }
    )
)

passport.serializeUser(async function (user, done) {
    done(null, user)
})

passport.deserializeUser(function (user: any, done) {
    User.findById(user.id, function (err: any, user: boolean | Express.User) {
        done(err, user)
    })
})

export default passport
