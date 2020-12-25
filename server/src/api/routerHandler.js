const editorApi = require("./CodeEditorApi");
const oauthRoute = require("./OAuthRoute");

module.exports = function (app) {
  app.use("/editor", editorApi);
  app.use("/auth", oauthRoute);
};
