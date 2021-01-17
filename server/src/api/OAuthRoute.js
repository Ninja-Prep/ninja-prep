const _ = require("lodash");
const router = require("express").Router();
const passport = require("passport");

router.get("/google", passport.authenticate("google", { scope: ["profile"] }));
router.get("/facebook", passport.authenticate("facebook"));
router.get("/github", passport.authenticate("github"));

const publicUserFields = ["first_name", "_id", "profile_picture"];

function setUserCookie(req) {
  const publicUser = _.pick(req.user, publicUserFields);
  req.session.publicUser = publicUser;
  req.session.user = req.user;
  console.log(req.user);
  req.session.isAuthenticated = true;
}

router.get("/authenticationStatus", (req, res) => {
  res.send(req.session.isAuthenticated);
});

router.get("/getUser", (req, res) => {
  res.send(req.session.publicUser);
});

router.get("/logout", (req, res) => {
  req.logOut();
  req.session = null;
  res.redirect("/");
});

router.get(
  "/google/callback",
  passport.authenticate("google", {
    failureRedirect: "/login",
  }),
  (req, res) => {
    req.flash("login", "Logged In");
    setUserCookie(req);
    res.redirect("/");
  }
);

router.get(
  "/facebook/callback",
  passport.authenticate("facebook", {
    failureRedirect: "/login",
  }),
  (req, res) => {
    req.flash("login", "Logged In");
    setUserCookie(req);
    res.redirect("/");
  }
);

router.get(
  "/github/callback",
  passport.authenticate("github", { failureRedirect: "/login" }),
  function (req, res) {
    setUserCookie(req);
    res.redirect("/");
  }
);

module.exports = router;
