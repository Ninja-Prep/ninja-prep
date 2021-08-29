import {ProgrammingLanguages} from '../utils/enums/ProgrammingLanguages';
import Problem from '../models/ProblemDetails';
import ProblemLanguageTemplate from '../models/ProblemLanguageTemplate';

import fs from 'fs';
import path from 'path';

export interface jsonTags {
  title: string;
  problemPath: string;
  isFree: boolean;
  hints: string[];
}

export interface ProblemBO {
  problemTagsJson: jsonTags;
  description: string;
  testCases: string[];
  checkerFile: string;
  languages: string[];
  validateTestCaseFile: string;
}

export function parseProblemFiles(problemDirectoryPath: string): ProblemBO {
  const problemTags = fs.readFileSync(
    path.join(problemDirectoryPath, 'Tags.json'),
    'utf8',
  );
  const problemTagsJson = JSON.parse(problemTags);
  const description = fs.readFileSync(
    path.join(problemDirectoryPath, 'description.md'),
    'utf8',
  );

  const testCases = getAllTestcases(
    path.join(problemDirectoryPath, 'Testcases'),
  );
  const checkerFile = buildCheckerfile(problemDirectoryPath);
  const validateTestCaseFile = fs.readFileSync(
    path.join(problemDirectoryPath, 'ValidateTestCase', 'ValidateTestCase.py'),
    'utf8',
  );
  const languages = fs.readdirSync(
    path.join(problemDirectoryPath, 'SubmissionCode'),
  );
  return {
    problemTagsJson,
    description,
    testCases,
    checkerFile,
    languages,
    validateTestCaseFile,
  };
}

export async function isValidProblem(
  problemDirectoryPath: string,
): Promise<boolean> {
  const problemBO = parseProblemFiles(problemDirectoryPath);

  const problem = new Problem();
  problem.title = problemBO.problemTagsJson.title;
  problem.hints = problemBO.problemTagsJson.hints;
  problem.description = problemBO.description;
  problem.problemPath = problemBO.problemTagsJson.problemPath;
  problem.inputTestCases = problemBO.testCases;
  problem.checkerCodeSnippet = problemBO.checkerFile;
  problem.validateTestCaseSnippet = problemBO.validateTestCaseFile;

  const errors = problem.validateSync();
  if (errors) {
    console.log(`Error for problem ${problemBO.problemTagsJson.title}`);
  }
  return errors == null;
}

export async function isValidProblemTemplateFiles(
  problemDirectoryPath: string,
): Promise<boolean[]> {
  const problemBO = parseProblemFiles(problemDirectoryPath);
  const isValidPromises = problemBO.languages.map(async (language) => {
    const codeSnippets = getCodeSnippets(
      path.join(problemDirectoryPath, 'SubmissionCode', language),
    );
    const isValid = isValidTemplateContent(
      language,
      codeSnippets,
      problemBO.problemTagsJson,
    );
    if (!isValid) {
      console.log(
        `Error found for ${problemBO.problemTagsJson.title}: ${language}`,
      );
    }
    return isValid;
  });
  const isValidList = await Promise.all(isValidPromises);
  return isValidList;
}

async function isValidTemplateContent(
  language: string,
  codeSnippets: {
    executableCodeContainer: string;
    starterCodeSnippet: string;
    solutionCodeSnippet: string;
  },
  problemTagsJson: {title: string; hints: string[]; problemPath: string},
) {
  const template = new ProblemLanguageTemplate();
  language = language.toLowerCase();
  template.title = problemTagsJson.title;
  template.programmingLanguage =
    ProgrammingLanguages[language as ProgrammingLanguages];
  template.solutionCodeSnippet = codeSnippets.solutionCodeSnippet;
  template.starterCodeSnippet = codeSnippets.starterCodeSnippet;
  template.executableCodeContainerSnippet =
    codeSnippets.executableCodeContainer;

  const errors = template.validateSync();
  if (errors) {
    console.log(errors);
  }
  return errors == null;
}

export interface CodeSnippets {
  executableCodeContainer: string;
  starterCodeSnippet: string;
  solutionCodeSnippet: string;
}

// Get content from specific files (ex. "Problem/Two-Sum/SubmissionCode/Java/StarterCode.java")

export function getCodeSnippets(
  submissionCodeDirectoryPath: string,
): CodeSnippets {
  const executableFileName = getFileForLanguage(
    submissionCodeDirectoryPath,
    'File',
  );
  const executableCodeContainer = fs.readFileSync(
    path.join(submissionCodeDirectoryPath, executableFileName),
    'utf8',
  );

  const starterCodeFileName = getFileForLanguage(
    submissionCodeDirectoryPath,
    'Solver',
  );
  const starterCodeSnippet = fs.readFileSync(
    path.join(submissionCodeDirectoryPath, starterCodeFileName),
    'utf8',
  );

  const solutionFileName = getFileForLanguage(
    submissionCodeDirectoryPath,
    'Solution',
  );
  const solutionCodeSnippet = fs.readFileSync(
    path.join(submissionCodeDirectoryPath, solutionFileName),
    'utf8',
  );
  return {executableCodeContainer, starterCodeSnippet, solutionCodeSnippet};
}

// Get specific file name (ex. "File.java")

function getFileForLanguage(folderPath: string, fileName: string): string {
  const file = fs
    .readdirSync(folderPath)
    .find((file) => path.parse(file).name == fileName);
  return file ? file : '';
}

// Gets all Testcases in Testcases folder and returns array

function getAllTestcases(testCaseDirectoryPath: string): string[] {
  const testCaseFileNames = fs.readdirSync(testCaseDirectoryPath);
  const testCaseFiles = testCaseFileNames.map((testCase: string) => {
    return fs.readFileSync(path.join(testCaseDirectoryPath, testCase), 'utf8');
  });
  return testCaseFiles;
}

function buildCheckerfile(problemDirectoryPath: string) {
  const file = fs.readFileSync(
    path.join(problemDirectoryPath, 'Checker', 'Checker.java'),
    'utf8',
  );
  const solutionCodeSnippet = fs.readFileSync(
    path.join(problemDirectoryPath, 'SubmissionCode', 'java', 'Solution.java'),
    'utf8',
  );

  const builtCheckerCode = file.replace(
    'INSERT_SOLUTION_SNIPPET',
    solutionCodeSnippet,
  );
  return builtCheckerCode;
}
