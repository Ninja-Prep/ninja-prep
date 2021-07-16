/*
Schema for specific problem
Contains all language templates
*/

import mongoose from '@mongoose';

export interface IProblem {
  title: string;
  description: string;
  hints: string[];
  problemPath: string;
  inputTestCases: string[];
  templates: Map<string, mongoose.Types.ObjectId>;
  checkerCodeSnippet: string;
  validateTestCaseSnippet: string;
}

export interface IProblemDocument extends IProblem, Document {}

const ProblemSchema: mongoose.Schema = new mongoose.Schema({
  title: {type: String, required: true, unique: true},
  description: {type: String, required: true},
  hints: [{type: String}],
  problemPath: {type: String, required: true, unique: true},
  inputTestCases: [{type: String}],
  templates: {
    type: Map,
    of: mongoose.Types.ObjectId,
  },
  checkerCodeSnippet: {type: String, required: true},
  validateTestCaseSnippet: {type: String, required: true},
});

export default mongoose.model<IProblemDocument>('Problems', ProblemSchema);
