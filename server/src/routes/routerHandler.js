const editorApi = require("./editorApi");
const oauthRoute = require("./routes/oauthRoute");

module.exports = function (app) {
  app.use("/editor", editorApi);
  app.use("/auth", oauthRoute);
};
