const keys = require("../../config/keys");
const router = require("express").Router();

router.post("/", (req, res) => {
  res.set("Content-Type", "text/html");
  config = {
    clientId: keys.JDOODLE_CLIENT,
    clientSecret: keys.JDOODLE_SECRET,
    script: req.body.script,
    language: req.body.language,
  };
  jdoodle.callExecuteAPI(config).then((response) => {
    res.send(new Buffer.from(`${response["output"]}`));
  });
});
