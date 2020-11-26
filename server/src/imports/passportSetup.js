const passport = require("passport");
const bcrypt = require("bcrypt");
const FacebookStrategy = require("passport-facebook").Strategy;
const TwitterStrategy = require("passport-twitter").Strategy;
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const LinkedInStrategy = require("passport-linkedin-oauth2").Strategy;
const keys = require("../config/keys");
const User = require("../models/user");

// passport.use(
//   new FacebookStrategy(
//     {
//       clientID: keys.Facebook_Client,
//       clientSecret: keys.Facebook_Secret,
//       callbackURL: "http://localhost:3000/auth/facebook/callback"
//     },
//     function(accessToken, refreshToken, profile, done) {
//       console.log(profile.id);
//       User.findOrCreate(profile.id, function(err, user) {
//         if (err) {
//           return done(err);
//         }
//         done(null, user);
//       });
//     }
//   )
// );

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.Google_Client,
      clientSecret: keys.Google_Secret,
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

// passport.use(
//   new TwitterStrategy(
//     {
//       consumerKey: keys.Twitter_Client,
//       consumerSecret: keys.Twitter_Secret,
//       callbackURL: "http://127.0.0.1:3000/auth/twitter/callback"
//     },
//     function(token, tokenSecret, profile, cb) {
//       User.findOrCreate(profile.id, function(err, user) {
//         return cb(err, user);
//       });
//     }
//   )
// );

// passport.use(
//   new LinkedInStrategy(
//     {
//       clientID: keys.LinkedIn_Client,
//       clientSecret: keys.LinkedIn_Secret,
//       callbackURL: "http://127.0.0.1:3000/auth/linkedin/callback",
//       scope: ["r_emailaddress", "r_liteprofile"]
//     },
//     // asynchronous verification, for effect...
//     function(token, tokenSecret, profile, done) {
//       User.findOrCreate(profile.id, function(err, user) {
//         return done(err, user);
//       });
//     }
//   )
// );

passport.serializeUser(async function (user, done) {
  done(null, user.id);
});

passport.deserializeUser(function (id, done) {
  User.findById(id, function (err, user) {
    done(err, user);
  });
});

module.exports = passport;
