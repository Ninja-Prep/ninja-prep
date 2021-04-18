const router = require("express").Router();
const Problem = require("../models/Problem");
const _ = require("lodash");
const mongoose = require("mongoose")

router.get("/findchallenges", async (req, res) => {
  const publicChallengesFields = ["problem_name", "problem_path"];
  const challenges = await mongoose.connection.db.collection("problems").find().toArray()
  const filteredChallenges = challenges.map(challenge => {
    return _.pick(challenge, publicChallengesFields)
  })
  res.send(filteredChallenges)
})

router.get("/:problemPath", async (req, res) => {
  const language = "java";
  let problem = await Problem.findOne({
    problem_path: req.params.problemPath,
  }).populate(`templates.${language}`);
  res.send(problem.templates.get("java").starter_code_snippet);
});

module.exports = router;
