/*
Template for specific language
- Solution Code
- Executable Code
- Starter Code
*/
import {ProgrammingLanguages} from '../utils/enums/ProgrammingLanguages';
import mongoose from '@mongoose';

/*
Schema for submissions from a user for a specific problem
*/

type Submission = {
  language: ProgrammingLanguages;
  date: Date;
  status: string;
  codeSnippet: string;
};

export interface IProblemSubmissionRecordTemplate extends Document {
  userId: string;
  problemTitle: string;
  submissions: Submission[];
}

interface IProblemSubmissionRecordDocument
  extends IProblemSubmissionRecordTemplate,
    Document {}

const ProblemSubmissionRecordSchema: mongoose.Schema = new mongoose.Schema({
  userId: {type: String, required: true},
  problemTitle: {type: String, required: true},
  submissions: [
    {
      date: {type: Date, required: true},
      status: {type: String, required: true},
      language: {type: String, enum: ProgrammingLanguages},
      codeSnippet: {type: String},
    },
  ],
});

export default mongoose.model<IProblemSubmissionRecordDocument>(
  'ProblemSubmissionRecords',
  ProblemSubmissionRecordSchema,
);
