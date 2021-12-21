import {
  CodeSnippets,
  ProblemBO,
  getCodeSnippets,
  parseProblemFiles,
} from './parser';
import {ProgrammingLanguages} from '../utils/enums/ProgrammingLanguages';
import Problem, {IProblem} from '../models/ProblemDetails';
import ProblemLanguageTemplate from '../models/ProblemLanguageTemplate';
import mongoose, {QueryOptions} from 'mongoose';
import path from 'path';

interface UpdateFields extends Omit<IProblem, 'templates'> {
  $set: {
    [x: string]: mongoose.Types.ObjectId;
  };
}

export async function uploadForProblemName(
  problemDirectoryPath: string,
): Promise<void> {
  const problemBO = parseProblemFiles(problemDirectoryPath);
  const uploadPromises = problemBO.languages.map(async (language) => {
    language = language.toLowerCase();
    const codeSnippets = getCodeSnippets(
      path.join(problemDirectoryPath, 'SubmissionCode', language),
    );
    await uploadProblemAndTemplate(problemBO, language, codeSnippets);
  });
  await Promise.all(uploadPromises);
}

async function uploadProblemAndTemplate(
  problemBO: ProblemBO,
  language: string,
  codeSnippets: CodeSnippets,
) {
  // Upload to Database
  try {
    // Upsert/Create document if it does not exist
    const options: QueryOptions = {
      upsert: true,
      new: true,
    };

    const enumLanguage: ProgrammingLanguages =
      ProgrammingLanguages[language as ProgrammingLanguages];
    const updateTemplateResult = await updateLanguageTemplate(
      codeSnippets,
      problemBO.problemTagsJson.title,
      enumLanguage,
      options,
    );
    console.log(
      `Successfully updated problem: ${problemBO.problemTagsJson.title}`,
    );
    if (updateTemplateResult) {
      return await updateProblem(
        problemBO,
        updateTemplateResult._id,
        language,
        options,
      );
    }
  } catch (err) {
    console.log(err);
    throw new Error(
      `Could not add problem: ${problemBO.problemTagsJson.title}`,
    );
  }
}

async function updateProblem(
  problemBO: ProblemBO,
  templateId: mongoose.Types.ObjectId,
  language: string,
  options: QueryOptions,
) {
  // Update for problem metadata
  const updateWithFields: UpdateFields = {
    title: problemBO.problemTagsJson.title,
    hints: problemBO.problemTagsJson.hints,
    description: problemBO.description,
    problemPath: problemBO.problemTagsJson.problemPath,
    inputTestCases: problemBO.testCases,
    checkerCodeSnippet: problemBO.checkerFile,
    validateTestCaseSnippet: problemBO.validateTestCaseFile,
    isFree: problemBO.problemTagsJson.isFree,
    questionCategory: problemBO.problemTagsJson.category,
    videoSolutionLink: problemBO.problemTagsJson.videoSolutionLink,
    previewDescription: problemBO.problemTagsJson.previewDescription,
    difficulty: problemBO.problemTagsJson.difficulty,
    $set: {
      [`templates.${language}`]: templateId,
    },
  };

  const filterByTitle = {title: problemBO.problemTagsJson.title};
  await Problem.findOneAndUpdate(filterByTitle, updateWithFields, options);
}

async function updateLanguageTemplate(
  codeSnippets: CodeSnippets,
  title: string,
  language: ProgrammingLanguages,
  options: QueryOptions,
) {
  // Update for specific language template
  const updateForLanguageTemplate = {
    title: title,
    programmingLanguage: language,
    starterCodeSnippet: codeSnippets.starterCodeSnippet,
    solutionCodeSnippet: codeSnippets.solutionCodeSnippet,
    executableCodeContainerSnippet: codeSnippets.executableCodeContainer,
  };

  const filterByTitleAndLanguage = {
    title: title,
    programmingLanguage: language,
  };
  const result = await ProblemLanguageTemplate.findOneAndUpdate(
    filterByTitleAndLanguage,
    updateForLanguageTemplate,
    options,
  );
  return result;
}
