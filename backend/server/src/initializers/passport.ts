import {Profile as FacebookProfile, Strategy as FacebookStrategy} from 'passport-facebook';
import {Strategy as GitHubStrategy} from 'passport-github2';
import {Profile as GoogleProfile, Strategy as GoogleStrategy} from 'passport-google-oauth20';
import {logError} from 'utils/logging/logger';
import User, {FindOrCreateUserInput, IUserDocument} from '@models/User';
import passport, {Profile} from 'passport';

type Done = (err?: Error | null, profile?: Express.User) => void;

const DEFAULT_NINJAPREP_NAME = 'NinjaPrep User';

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT,
      clientSecret: process.env.GOOGLE_SECRET,
      callbackURL: '/api/auth/google/callback',
    },
    function (accessToken: string, refreshToken: string, profile: GoogleProfile, done) {
      const input: FindOrCreateUserInput = {
        id: profile.id,
        firstName: profile.name?.givenName || DEFAULT_NINJAPREP_NAME,
        profilePicture: profile.photos && profile.photos[0].value,
        emailAddress: profile.emails && profile.emails[0].value,
      };
      User.findOrCreate(input, function (err: string | Error, user: IUserDocument) {
        if (err) logError(err);
        done(err, user);
      });
    },
  ),
);

passport.use(
  new FacebookStrategy(
    {
      clientID: process.env.FACEBOOK_CLIENT,
      clientSecret: process.env.FACEBOOK_SECRET,
      callbackURL: '/api/auth/facebook/callback',
      profileFields: ['email', 'name', 'picture'],
    },
    function (accessToken: string, refreshToken: string, profile: FacebookProfile, done: Done) {
      const input: FindOrCreateUserInput = {
        id: profile.id,
        firstName: profile.name?.givenName || DEFAULT_NINJAPREP_NAME,
        profilePicture: profile.photos && profile.photos[0].value,
        emailAddress: profile.emails && profile.emails[0].value,
      };
      User.findOrCreate(input, function (err: Error, user: IUserDocument) {
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
    function (accessToken: string, refreshToken: string, profile: Profile, done: Done) {
      const input: FindOrCreateUserInput = {
        id: profile.id,
        firstName: profile.displayName || profile.username || DEFAULT_NINJAPREP_NAME,
        profilePicture: profile.photos && profile.photos[0].value,
        emailAddress: profile.emails && profile.emails[0].value,
      };
      User.findOrCreate(input, function (err: Error, user: IUserDocument) {
        if (err) {
          logError(err);
          return done(err, user);
        }
        return done(err, user);
      });
    },
  ),
);

passport.serializeUser(function (user: Express.User, done: Done) {
  done(null, user);
});

passport.deserializeUser(function (user: IUserDocument, done: (err: Error, user?: Express.User | false | null) => void) {
  User.findById(user.id, function (err: Error, user: boolean | Express.User) {
    done(err, user);
  });
});

export default passport;
