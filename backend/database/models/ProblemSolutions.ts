import {ProgrammingLanguages} from '../utils/enums/ProgrammingLanguages';
import mongoose from '@mongoose';

/*
Schema for solutions for a specific problem
*/

export type SolutionDetails = {
  language: ProgrammingLanguages;
  solutionSnippet: string;
};

export interface IProblemSolutionTemplate extends Document {
  problemPath: string;
  solutions: SolutionDetails[];
}

interface IProblemSolutionDocument extends IProblemSolutionTemplate, Document {}

const ProblemSolutionSchema: mongoose.Schema = new mongoose.Schema({
  problemPath: {type: String, required: true},
  solutions: [
    {
      language: {type: String, enum: ProgrammingLanguages, required: true},
      solutionSnippet: {type: String, required: true},
    },
  ],
});

export default mongoose.model<IProblemSolutionDocument>(
  'ProblemSolutions',
  ProblemSolutionSchema,
);
