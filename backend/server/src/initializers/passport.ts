import {Profile as FacebookProfile, Strategy as FacebookStrategy} from 'passport-facebook';
import {Strategy as GitHubStrategy} from 'passport-github2';
import {Profile as GoogleProfile, Strategy as GoogleStrategy} from 'passport-google-oauth20';
import {logError} from 'utils/logging/logger';
import User, {FindOrCreateUserInput, IUserDocument} from '@models/User';
import axios from 'axios';
import qs from 'query-string';
import passport, {Profile} from 'passport';

type Done = (err?: Error | null, profile?: Express.User) => void;

const DEFAULT_NINJAPREP_NAME = 'NinjaPrep User';

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT,
      clientSecret: process.env.GOOGLE_SECRET,
      callbackURL: '/api/auth/google/callback',
      proxy: true /* Required to pass https in oauth for callback redirect url*/,
    },
    function (accessToken: string, refreshToken: string, profile: GoogleProfile, done) {
      if (!profile.emails || !profile.emails[0].value) {
        throw new Error('Missing User Email');
      }
      const input: FindOrCreateUserInput = {
        userId: profile.id,
        firstName: profile.name?.givenName || DEFAULT_NINJAPREP_NAME,
        profilePicture: profile.photos && profile.photos[0].value,
        email: profile.emails[0].value,
        oauthProvider: profile.provider,
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
      callbackURL: process.env.FACEBOOK_AUTH_CALLBACK,
      profileFields: ['email', 'name', 'picture'],
    },
    function (accessToken: string, refreshToken: string, profile: FacebookProfile, done: Done) {
      if (!profile.emails || !profile.emails[0].value) {
        throw new Error('Missing User Email');
      }
      const profileParams = qs.parseUrl((profile.photos && profile.photos[0].value) || '');
      const profileId = profileParams.query.asid;
      const profilePicturePath = `http://graph.facebook.com/${profileId}/picture`;
      const input: FindOrCreateUserInput = {
        userId: profile.id,
        firstName: profile.name?.givenName || DEFAULT_NINJAPREP_NAME,
        profilePicture: profilePicturePath,
        email: profile.emails[0].value,
        oauthProvider: profile.provider,
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
      scope: ['read:user, user:email'],
      callbackURL: '/api/auth/github/callback',
    },
    async function (accessToken: string, refreshToken: string, profile: Profile, done: Done) {
      const emailResponse = await axios.get('https://api.github.com/user/emails', {
        headers: {
          Authorization: `token ${accessToken}`,
        },
      });
      // https://docs.github.com/en/rest/reference/users#emails
      const userEmail = emailResponse.data.find((email: any) => email.primary === true);
      if (!userEmail || !userEmail.email) {
        throw new Error('Missing User Email');
      }
      const input: FindOrCreateUserInput = {
        userId: profile.id,
        firstName: profile.displayName || profile.username || DEFAULT_NINJAPREP_NAME,
        profilePicture: profile.photos && profile.photos[0].value,
        email: userEmail.email,
        oauthProvider: profile.provider,
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
  User.findOne({userId: user.userId}, function (err: Error, user: boolean | Express.User) {
    done(err, user);
  });
});

export default passport;
