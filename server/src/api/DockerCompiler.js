const keys = require("../../config/keys");
const router = require("express").Router();
const encrypt = require("crypto");
const DockerSandbox = require("./DockerSandbox");

router.post("/", (req, res) => {
  const hash = random(5);
  const absPath = __dirname + "/";
  const folderPath = absPath + "temp/" + hash;
  const dockerImageName = "javac_container";

  sendOutput = function (output = { exitCode, stdOut, stdErr }) {
    console.log(output);
    res.send(output);
  };

  const sandbox = new DockerSandbox(
    folderPath,
    dockerImageName,
    absPath,
    sendOutput
  );

  sandbox.run();
});

function random(size) {
  //Returns a crypto-safe random
  return encrypt.randomBytes(size).toString("hex");
}

module.exports = router;

// router.post("/", (req, res) => {
//   res.set("Content-Type", "text/html");
//   config = {
//     clientId: keys.JDOODLE_CLIENT,
//     clientSecret: keys.JDOODLE_SECRET,
//     script: req.body.script,
//     language: req.body.language,
//   };
//   jdoodle.callExecuteAPI(config).then((response) => {
//     res.send(new Buffer.from(`${response["output"]}`));
//   });
// });

// module.exports = router;
