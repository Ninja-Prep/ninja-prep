const mongoose = require("mongoose");
const { Schema } = mongoose;

const ProblemLanguageTemplateSchema = new Schema({
  _id: Schema.Types.ObjectId,
  problem_name: String,
  programming_language: String,
  starter_code_snippet: String,
  solution_code_snippet: String,
  executable_code_container: String,
});

const ProblemLanguageModel = mongoose.model(
  "ProblemLanguageTemplate",
  ProblemLanguageTemplateSchema
);

module.exports = ProblemLanguageModel;
