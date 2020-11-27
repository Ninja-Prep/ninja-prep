const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const FacebookStrategy = require("passport-facebook").Strategy;
const keys = require("../../config/keys");
const User = require("../models/User");

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.GOOGLE_CLIENT,
      clientSecret: keys.GOOGLE_SECRET,
      callbackURL: "/auth/google/callback",
      proxy: true,
    },
    function (accessToken, refreshToken, profile, done) {
      User.findOrCreate(profile.id, function (err, user) {
        return done(err, user);
      });
    }
  )
);

passport.use(
  new FacebookStrategy(
    {
      clientID: keys.FACEBOOK_CLIENT,
      clientSecret: keys.FACEBOOK_SECRET,
      callbackURL: "https://ninjaprep.io/auth/facebook/callback",
    },
    function (accessToken, refreshToken, profile, done) {
      User.findOrCreate(profile.id, function (err, user) {
        if (err) {
          return done(err);
        }
        done(null, user);
      });
    }
  )
);

passport.serializeUser(async function (user, done) {
  done(null, user.id);
});

passport.deserializeUser(function (id, done) {
  User.findById(id, function (err, user) {
    done(err, user);
  });
});

module.exports = passport;
