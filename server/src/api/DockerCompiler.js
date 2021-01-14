const router = require("express").Router();
const fs = require("fs");
const Problem = require("./../models/Problem")
const fsPromises = fs.promises;
const encrypt = require("crypto");
const DockerSandbox = require("./DockerSandbox");
const containerLanguageMap = require("./DockerSandboxHelper")
  .containerLanguageMap;



// Run user code
// Run solution code
// Check code
// Send response
router.post("/execute/:problemName", async (req, res) => {
  const hash = random(5);
  const absPath = __dirname + "/";
  const folderPath = absPath + "temp/" + hash;
  const programmingLanguage = req.body.programmingLanguage;
  const dockerImageName = containerLanguageMap[programmingLanguage].container;
  const fileName = containerLanguageMap[programmingLanguage].fileName;
  const userCodeSnippet = req.body.codeSnippet;

  console.log(req.params.problemName)
  const problem = await Problem.findOne({ problem_name: req.params.problemName }).populate(`templates.${programmingLanguage}`)
  const testCases = problem.input_testcases;
  console.log(testCases);
  // res.send("hello")
  const solutionCodeSnippet = problem.templates.get(`${programmingLanguage}`).solution_code_snippet
  const codeContainer = problem.templates.get(`${programmingLanguage}`).executable_code_container;
  const execUserCode = codeContainer.replace("INSERT_SOLVER", userCodeSnippet)
  const execSolutionCode = codeContainer.replace("INSERT_SOLVER", solutionCodeSnippet)

  // console.log(programmingLanguage)
  // console.log(fileName)

  const userSandbox = new DockerSandbox(
    folderPath,
    dockerImageName,
    absPath,
    programmingLanguage,
    execSolutionCode,
    fileName,
    testCases
  );
  // console.log(userCodeSnippet);
  // console.log(programmingLanguage);
  const val = await userSandbox.run()
  // console.log("the output", val)

  // const solutionSandbox = new DockerSandbox(
  //   folderPath,
  //   dockerImageName,
  //   absPath,
  //   programmingLanguage,
  //   solutionCodeSnippet,
  //   fileName,
  //   sendOutput,
  // );


});

function random(size) {
  //Returns a crypto-safe random
  return encrypt.randomBytes(size).toString("hex");
}

module.exports = router;