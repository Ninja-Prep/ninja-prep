import fs from 'fs';

import path from 'path';

import {isValidProblem, isValidProblemTemplateFiles} from './parser';
import {uploadForProblemName} from './uploadProblem';
import {uploadProblemSolutions} from './uploadProblemSolutions';

/*
For each Problem
- Iterate through each langauge
- Update problem for each language template 
*/

export async function parseProblems(): Promise<void> {
  const rootFolder = 'problems';

  const problemNamesList = fs.readdirSync(rootFolder);

  // Validate problem set before upload
  const templatePromises = getTemplatePromises(problemNamesList, rootFolder);
  const problemPromises = getProblemPromises(problemNamesList, rootFolder);

  const hasError = await isValidHandler(templatePromises, problemPromises);
  if (hasError) {
    console.log('Error(s) found. Unable to upload to database');
  } else {
    const uploadPromises = await getUploadPromises(
      problemNamesList,
      rootFolder,
    );
    await Promise.all(uploadPromises);
  }
}

async function isValidHandler(
  templatePromises: Promise<Array<boolean>>[],
  problemPromises: Promise<boolean>[],
) {
  const isValidTemplates = await Promise.all(templatePromises);
  const isValidProblems = await Promise.all(problemPromises);
  // Ensure all templates and problems are valid
  return (
    isValidTemplates.some((list) => list.includes(false)) ||
    isValidProblems.includes(false)
  );
}

function getProblemPromises(problemNamesList: string[], rootFolder: string) {
  return problemNamesList.map((problemName) => {
    const problemFolderPath = getFolderPath(rootFolder, problemName);
    return isValidProblem(problemFolderPath);
  });
}

function getTemplatePromises(problemNamesList: string[], rootFolder: string) {
  return problemNamesList.map((problemName) => {
    const problemFolderPath = getFolderPath(rootFolder, problemName);
    return isValidProblemTemplateFiles(problemFolderPath);
  });
}

function getFolderPath(prefixPath: string, suffixPath: string) {
  return path.join(prefixPath, suffixPath);
}

async function getUploadPromises(
  problemNamesList: string[],
  rootFolder: string,
) {
  const uploadPromises = problemNamesList.map(async (problemName) => {
    await uploadForProblemName(path.join(rootFolder, problemName));
    await uploadProblemSolutions(path.join(rootFolder, problemName));
  });
  await Promise.all(uploadPromises);
  return uploadPromises;
}
