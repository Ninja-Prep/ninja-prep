import passport from 'passport'
import PassportGoogle from 'passport-google-oauth20'
const GoogleStrategy = PassportGoogle.Strategy
const FacebookStrategy = require('passport-facebook').Strategy
const GitHubStrategy = require('passport-github2').Strategy
import keys from '../../config/keys'
import User from '../Models/User'

passport.use(
    new GoogleStrategy(
        {
            clientID: keys.GOOGLE_CLIENT,
            clientSecret: keys.GOOGLE_SECRET,
            callbackURL: '/api/auth/google/callback',
            proxy: true
        },
        function (_accessToken, _refreshToken, profile, done) {
            User.findOrCreate(profile, function (err: string | Error, user: Express.User) {
                done(err, user)
            })
        }
    )
)

passport.use(
    new FacebookStrategy(
        {
            clientID: keys.FACEBOOK_CLIENT,
            clientSecret: keys.FACEBOOK_SECRET,
            callbackURL: '/api/auth/facebook/callback'
        },
        function (_accessToken: any, _refreshToken: any, profile: any, done: (arg0: any, arg1: undefined) => void) {
            User.findOrCreate(profile, function (err: any, user: any) {
                if (err) {
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
            clientID: keys.GITHUB_CLIENT,
            clientSecret: keys.GITHUB_SECRET,
            scope: ['read:user']
        },
        function (_accessToken: any, _refreshToken: any, profile: any, done: (arg0: any, arg1: undefined) => any) {
            User.findOrCreate(profile, function (err: any, user: any) {
                if (err) {
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
