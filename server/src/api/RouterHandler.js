const dockerSandboxApi = require("./DockerCompiler");
const oauthRoute = require("./OAuthRoute");
const challengesRoute = require("./Challenges")

module.exports = function (app) {
  app.use("/api/dockersandbox", dockerSandboxApi);
  app.use("/auth", oauthRoute);
  app.use("/api/challenges/", challengesRoute)
};