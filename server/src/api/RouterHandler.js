const dockerSandboxApi = require("./DockerCompiler");
const oauthRoute = require("./OAuthRoute");
const stripeRoute = require("./Stripe");
const challengesRoute = require("./Challenges")

module.exports = function (app) {
  app.use("/api/dockersandbox", dockerSandboxApi);
  app.use("/auth", oauthRoute);
  app.use("/payment", stripeRoute);
  app.use("/api/challenges/", challengesRoute)
};

