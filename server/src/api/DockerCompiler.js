const router = require("express").Router();
const Problem = require("./../models/Problem")
const DockerSandbox = require("./DockerSandbox");
const languageContainerMap = require("./DockerSandboxHelper")
  .languageContainerMap;

// Run user code
// Run solution code
// Check code
// Send response
// TODO: Add more robust error handling

async function getProblemDetails(req, res, next) {
  const programmingLanguage = req.body.programmingLanguage;
  const dockerImageName = languageContainerMap[programmingLanguage].container;
  const fileName = languageContainerMap[programmingLanguage].fileName;
  const userCodeSnippet = req.body.codeSnippet;

  const problem = await Problem.findOne({ problem_name: req.params.problemName }).populate(`templates.${programmingLanguage}`)
  const testCases = problem.input_testcases;
  const solutionCodeSnippet = problem.templates.get(`${programmingLanguage}`).solution_code_snippet
  const codeContainer = problem.templates.get(`${programmingLanguage}`).executable_code_container;
  const userCode = codeContainer.replace("INSERT_SOLVER", userCodeSnippet)
  const solutionCode = codeContainer.replace("INSERT_SOLVER", solutionCodeSnippet)
  const checkerCode = problem.checker_code_snippet;

  const dockerDetails = { dockerImageName, fileName }
  req.problemBO = { dockerDetails, testCases, snippets: { userCode, solutionCode, checkerCode } }
  next()

}
router.post("/execute/:problemName", getProblemDetails, async (req, res) => {

  const problemBO = req.problemBO

  const checkerImageName = languageContainerMap["checker"].container;
  const checkerFileName = languageContainerMap["checker"].fileName;
  const checkerDockerDetails = { dockerImageName: checkerImageName, fileName: checkerFileName }

  try {
    const submissionResults = await Promise.all(problemBO.testCases.map(async (testCase) => {
      let snippets = [problemBO.snippets.userCode, problemBO.snippets.solutionCode];

      const [userOutput, solutionOutput] = await Promise.all(snippets.map(async (snippet) => {
        const sandbox = new DockerSandbox(problemBO.dockerDetails);
        return await sandbox.run(snippet, testCase)
      }))
      const checkerSandbox = new DockerSandbox(checkerDockerDetails);
      return await checkerSandbox.runChecker(problemBO.snippets.checkerCode, userOutput.stdout, solutionOutput.stdout, testCase)
    }))
    res.send(submissionResults)
  }
  catch (error) {
    console.error(error)
    res.status(500).send("Error building container")
  }

});

module.exports = router;