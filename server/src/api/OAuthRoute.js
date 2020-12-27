const _ = require("lodash");
const router = require("express").Router();
const passport = require("passport");

router.get("/google", passport.authenticate("google", { scope: ["profile"] }));
router.get("/facebook", passport.authenticate("facebook"));
router.get("/github", passport.authenticate("github"));

const publicUserFields = ["first_name", "_id"];

router.get("/authenticationStatus", (req, res) => {
  console.log(req.session.isAuthenticated);
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
    const publicUser = _.pick(req.user, publicUserFields);
    req.session.publicUser = publicUser;
    req.session.user = req.user;
    req.session.isAuthenticated = true;
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
    res.redirect("/");
  }
);

router.get(
  "/github/callback",
  passport.authenticate("github", { failureRedirect: "/login" }),
  function (req, res) {
    res.redirect("/");
  }
);

module.exports = router;
