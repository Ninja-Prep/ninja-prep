const mongoose = require("mongoose");
const { Schema } = mongoose;

const problemSignatureSchema = new Schema({
  language: String,
  signature: String,
});

const problemSchema = new Schema({
  title: String,
  problemId: String,
  description: String,
  methodSignature: [problemSignatureSchema],
  testCases: Object,
  category: String,
});

const problemModel = mongoose.model("Problem", problemSchema);

module.exports = problemModel;
