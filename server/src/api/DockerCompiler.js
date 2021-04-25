const router = require("express").Router();
const Problem = require("./../models/Problem");
const got = require('got');

async function getProblemDetails(req, res, next) {
  const programmingLanguage = req.body.programmingLanguage;
  const userCodeSnippet = req.body.codeSnippet;

  console.log(req.params)
  const problem = await Problem.findOne({ problem_path: req.params.problemPath, }).populate(`templates.${programmingLanguage}`);
  const testCases = problem.input_testcases;
  const solutionCodeSnippet = problem.templates.get(`${programmingLanguage}`).solution_code_snippet;
  const codeContainer = problem.templates.get(`${programmingLanguage}`).executable_code_container;
  const userCode = codeContainer.replace("INSERT_SOLVER", userCodeSnippet);

  const checkerCode = problem.checker_code_snippet.replace("INSERT_SOLUTION_SNIPPET", solutionCodeSnippet);

  req.problemBO = {
    testCases,
    snippets: { userCode, checkerCode },
  };
  next();
}
router.post("/execute/:problemPath", getProblemDetails, async (req, res) => {

  const problemBO = req.problemBO;

  try {
    const { body } = await got.post("http://localhost:8000/judgeSubmission/", {
      json: {
        snippets: problemBO.snippets,
        testCases: problemBO.testCases,
        language: 'java'
      }
    })
    console.log(body)
    res.send(body)
  }
  catch (error) {
    console.log(error)
    res.send(error)
  }
});

module.exports = router;
