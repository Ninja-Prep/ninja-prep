const router = require("express").Router();
const Problem = require("../models/Problem");

router.get("/:problemName", async (req, res) => {
  const language = "java";
  let problem = await Problem.findOne({
    problem_name: req.params.problemName,
  }).populate(`templates.${language}`);
  res.send(problem.templates.get("java").starter_code_snippet);
});

module.exports = router;
