const dockerSandboxApi = require("./DockerCompiler");
const oauthRoute = require("./OAuthRoute");

module.exports = function (app) {
  app.use("/api/dockersandbox", dockerSandboxApi);
  app.use("/auth", oauthRoute);
};
