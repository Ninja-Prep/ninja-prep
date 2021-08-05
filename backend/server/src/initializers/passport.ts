import {Strategy as FacebookStrategy} from 'passport-facebook';
import {Strategy as GitHubStrategy} from 'passport-github2';
import {Strategy as GoogleStrategy} from 'passport-google-oauth20';
import {logError} from 'utils/logging/logger';
import User, {IUserDocument} from '@models/User';
import passport, {Profile} from 'passport';

type Done = (err?: Error | null, profile?: any) => void;

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT,
      clientSecret: process.env.GOOGLE_SECRET,
      callbackURL: '/api/auth/google/callback',
      proxy: true,
    },
    function (accessToken, refreshToken, profile, done) {
      User.findOrCreate(
        profile,
        function (err: string | Error, user: Express.User) {
          if (err) logError(err);
          done(err, user);
        },
      );
    },
  ),
);

passport.use(
  new FacebookStrategy(
    {
      clientID: process.env.FACEBOOK_CLIENT,
      clientSecret: process.env.FACEBOOK_SECRET,
      callbackURL: '/api/auth/facebook/callback',
    },
    function (accessToken, refreshToken, profile, done: Done) {
      User.findOrCreate(profile, function (err: Error, user: IUserDocument) {
        if (err) {
          logError(err);
          done(err, user);
        } else {
          done(null, user);
        }
      });
    },
  ),
);

passport.use(
  new GitHubStrategy(
    {
      clientID: process.env.GITHUB_CLIENT,
      clientSecret: process.env.GITHUB_SECRET,
      scope: ['read:user'],
      callbackURL: '/api/auth/github/callback',
    },
    function (
      accessToken: string,
      refreshToken: string,
      profile: Profile,
      done: Done,
    ) {
      User.findOrCreate(profile, function (err: Error, user: IUserDocument) {
        if (err) {
          logError(err);
          return done(err, user);
        }
        return done(err, user);
      });
    },
  ),
);

passport.serializeUser(async function (user, done: Done) {
  done(null, user);
});

passport.deserializeUser(function (
  user: IUserDocument,
  done: (err: Error, user?: Express.User | false | null) => void,
) {
  User.findById(user.id, function (err: Error, user: boolean | Express.User) {
    done(err, user);
  });
});

export default passport;
