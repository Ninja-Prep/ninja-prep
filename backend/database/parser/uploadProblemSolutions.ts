import {ProgrammingLanguages} from '../utils/enums/ProgrammingLanguages';
import {QueryOptions} from 'mongoose';
import {getCodeSnippets, parseProblemFiles} from './parser';
import ProblemSolution, {SolutionDetails} from '../models/ProblemSolutions';
import path from 'path';

export async function uploadProblemSolutions(
  problemDirectoryPath: string,
): Promise<void> {
  const problemBO = parseProblemFiles(problemDirectoryPath);
  const solutions: SolutionDetails[] = problemBO.languages.map((language) => {
    language = language.toLowerCase();
    const codeSnippets = getCodeSnippets(
      path.join(problemDirectoryPath, 'SubmissionCode', language),
    );
    return {
      language: ProgrammingLanguages[language as ProgrammingLanguages],
      solutionSnippet: codeSnippets.solutionCodeSnippet,
    };
  });
  await insertSolutions(solutions, problemBO.problemTagsJson.problemPath);
}

async function insertSolutions(
  solutions: SolutionDetails[],
  problemPath: string,
) {
  // Upload to Database
  try {
    // Upsert/Create document if it does not exist
    const options: QueryOptions = {
      upsert: true,
      new: true,
      runValidators: true,
      context: 'query',
    };

    // Update for problem metadata
    const updateWithFields = {
      problemPath: problemPath,
      solutions: solutions,
    };

    await ProblemSolution.findOneAndUpdate(
      {problemPath: problemPath},
      updateWithFields,
      options,
    );
  } catch (err) {
    console.log(err);
    throw new Error(`Could not add solutions for problem: ${problemPath}`);
  }
}
