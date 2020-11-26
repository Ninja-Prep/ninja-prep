const express = require("express");
const app = express();
const middleWare = require("./imports/middlewareSetup")(app);
const routers = require("./routes/routerHandler")(app);
const mongoose = require("./imports/mongooseSetup");
const keys = require("../config/keys");
const path = require("path");

app.use(express.static(path.join(__dirname, "../..", "client", "build")));

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "../..", "client", "build", "index.html"));
});

app.listen(keys.PORT, () => {
  console.log(`Server started on port ${keys.PORT}`);
});
