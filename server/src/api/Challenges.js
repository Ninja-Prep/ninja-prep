const router = require("express").Router();
const _ = require("lodash");
const mongoose = require("mongoose")

router.get("/findchallenges", async (req, res) => {
  const publicChallengesFields = ["title", "problem_path"];
  const challenges = await mongoose.connection.db.collection("problems").find().toArray()
  const filteredChallenges = challenges.map(challenge => {
    return _.pick(challenge, publicChallengesFields)
  })
  res.send(filteredChallenges)
})

router.get("/:problemPath", async (req, res) => {
  const language = "java";
  let problem = await mongoose.connection.db.collection("problems").findOne({
    problem_path: req.params.problemPath,
  })
  if (_.isNull(problem)) {
    res.send({});
  }
  else {
    const problemTemplateCode = await mongoose.connection.db.collection("problemlanguagetemplates").findOne({ _id: problem.templates[language] })
    const starterCode = problemTemplateCode.starter_code_snippet
    const title = problem.title
    const description = problem.description
    res.send({ starterCode, title, description });
  }

});

module.exports = router;
