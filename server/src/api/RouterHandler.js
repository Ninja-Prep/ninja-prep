const editorApi = require("./CodeEditorApi");
const oauthRoute = require("./OAuthRoute");
const stripeRoute = require("./Stripe");

module.exports = function (app) {
  app.use("/api", editorApi);
  app.use("/auth", oauthRoute);
  app.use("/payment", stripeRoute);
};
