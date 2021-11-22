/*
Schema for specific problem
Contains all language templates
*/

import mongoose from '@mongoose';
import {QuestionCategories} from '../utils/enums/QuestionCategories';

export interface IProblem {
  title: string;
  description: string;
  previewDescription: string;
  hints: string[];
  isFree: boolean;
  videoSolutionLink: string;
  problemPath: string;
  inputTestCases: string[];
  templates: Map<string, mongoose.Types.ObjectId>;
  checkerCodeSnippet: string;
  validateTestCaseSnippet: string;
  questionCategory: QuestionCategories;
}

export interface IProblemDocument extends IProblem, Document {}

const ProblemSchema: mongoose.Schema = new mongoose.Schema({
  title: {type: String, required: true, unique: true},
  description: {type: String, required: true},
  previewDescription: {type: String, required: true},
  hints: [{type: String}],
  problemPath: {type: String, required: true, unique: true},
  inputTestCases: [{type: String}],
  templates: {
    type: Map,
    of: mongoose.Types.ObjectId,
  },
  checkerCodeSnippet: {type: String, required: true},
  validateTestCaseSnippet: {type: String, required: true},
  isFree: {type: Boolean},
  questionCategory: {type: String, enum: QuestionCategories},
});

export default mongoose.model<IProblemDocument>('Problems', ProblemSchema);
