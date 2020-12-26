const router = require("express").Router();
const passport = require("passport");

router.get("/google", passport.authenticate("google", { scope: ["profile"] }));
router.get("/facebook", passport.authenticate("facebook"));
router.get("/github", passport.authenticate("github"));

router.get("/getLoginStatus", (req, res) => {
  res.send(req.isAuthenticated());
});

router.get("/logout", (req, res) => {
  req.session.destroy(function (err) {
    if (err) {
      console.log(err);
    } else {
      req.logOut();
      res.status(200).clearCookie("isLoggedIn", {
        path: "/",
      });
      res.redirect("/");
    }
  });
});

router.get(
  "/google/callback",
  passport.authenticate("google", {
    failureRedirect: "/login",
  }),
  (req, res) => {
    req.flash("login", "Logged In");
    res.cookie("isLoggedIn", req.isAuthenticated());
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
