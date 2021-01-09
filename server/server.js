const express = require("express");
const app = express();
const middleWare = require("./src/middleware/MiddlewareSetup")(app);
const routers = require("./src/api/RouterHandler")(app);
const passport = require("./src/middleware/PassportSetup");
const mongoose = require("./src/middleware/MongooseSetup");
const keys = require("./config/keys");
const path = require("path");

const PORT = process.env.PORT || process.argv[2] || 5000;

let inProduction = false;
if (process.env.NODE_ENV) {
  inProduction = process.env.NODE_ENV.trim() === "production";
}

console.log(`production is ${inProduction}`);

if (inProduction) {
  app.use(express.static(path.join(__dirname, "..", "client", "build")));

  app.get("/*", (req, res) => {
    res.sendFile(path.join(__dirname, "..", "client", "build", "index.html"));
  });
}

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
