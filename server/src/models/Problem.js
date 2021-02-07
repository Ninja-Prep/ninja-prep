const mongoose = require("mongoose");
const ProblemLanguageTemplateSchema = require("./ProblemLanguageTemplate");
const { Schema } = mongoose;

const templateMap = {
  type: mongoose.Schema.Types.ObjectId,
  ref: "ProblemLanguageTemplate",
};

const ProblemSchema = new Schema({
  _id: Schema.Types.ObjectId,
  problem_name: String,
  input_testcases: [String],
  templates: {
    type: Map,
    of: templateMap,
  },
  checker_code_snippet: String,
});

const ProblemModel = mongoose.model("Problem", ProblemSchema);

module.exports = ProblemModel;
