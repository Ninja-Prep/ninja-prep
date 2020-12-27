const cookieParser = require("cookie-parser");
const flash = require("connect-flash");
const cookieSession = require("cookie-session");
const passport = require("passport");
const cors = require("cors");
const bodyParser = require("body-parser");

module.exports = function (app) {
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json({ extended: true }));
  app.use(flash());
  app.use(cookieParser("mySecret"));
  app.use(
    cors({
      methods: ["get", "post"],
    })
  );
  app.use(
    cookieSession({
      name: "session",
      keys: ["keyboard cat"],
      secure: false,
      httponly: false,
      // Cookie Options
      maxAge: 5 * 60 * 1000,
    })
  );
  app.use(passport.initialize());
  app.use(passport.session());
};
