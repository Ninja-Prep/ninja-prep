/*
Template for specific language
- Solution Code
- Executable Code
- Starter Code
*/
import {ProgrammingLanguages} from '../utils/enums/ProgrammingLanguages';
import mongoose from '@mongoose';

/*
Schema for specific problem
Contains all language templates
*/

export interface IProblemLanguageTemplate extends Document {
  title: string;
  programmingLanguage: ProgrammingLanguages;
  starterCodeSnippet: string;
  executableCodeContainerSnippet: string;
  solutionCodeSnippet: string;
}

interface IProblemLanguageTemplateDocument
  extends IProblemLanguageTemplate,
    Document {}

const ProblemLanguageTemplateSchema: mongoose.Schema = new mongoose.Schema({
  title: {type: String, required: true},
  programmingLanguage: {type: String, enum: ProgrammingLanguages},
  starterCodeSnippet: {type: String, required: true},
  executableCodeContainerSnippet: {type: String, required: true},
  solutionCodeSnippet: {type: String, required: true},
});

export default mongoose.model<IProblemLanguageTemplateDocument>(
  'ProblemLanguageTemplates',
  ProblemLanguageTemplateSchema,
);
