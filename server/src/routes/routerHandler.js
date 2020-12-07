const editorApi = require("./editorApi");
const oauthRoute = require("./oauthRoute");

module.exports = function (app) {
  app.use("/editor", editorApi);
  app.use("/auth", oauthRoute);
};
