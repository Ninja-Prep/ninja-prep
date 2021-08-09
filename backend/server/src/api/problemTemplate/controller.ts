import {Request, Response} from 'express';
import Problem, {IProblemDocument} from '@models/ProblemDetails';
import ProblemLanguageTemplate from '@models/ProblemLanguageTemplate';
import _ from 'lodash';

export async function getChallengesList(
  req: Request,
  res: Response,
): Promise<void> {
  const publicChallengesFields = ['title', 'problemPath'];

  const challenges = await Problem.find();
  const filteredChallenges = challenges.map((challenge: IProblemDocument) => {
    return _.pick(challenge, publicChallengesFields);
  });

  res.send(filteredChallenges);
}

export async function getProblemDetails(
  req: Request,
  res: Response,
): Promise<void> {
  const language = req.body.programmingLanguage?.toLowerCase() || 'java';
  const problem = await Problem.findOne({
    problemPath: req.params.problemPath,
  });
  if (problem) {
    const templateObjectId = problem.templates.get(language);
    const problemTemplateCode = await ProblemLanguageTemplate.findById(
      templateObjectId,
    );

    const starterCode = problemTemplateCode?.starterCodeSnippet;
    const title = problem.title;
    const description = problem.description;
    const hints = problem.hints;
    const testCases = problem.inputTestCases;
    res.send({starterCode, title, description, hints, testCases});
  } else {
    res.send({}).sendStatus(500);
  }
}

export async function getStarterCode(
  req: Request,
  res: Response,
): Promise<void> {
  const language = req.body.programmingLanguage?.toLowerCase() || 'java';
  const problem = await Problem.findOne({
    problemPath: req.params.problemPath,
  });
  if (problem) {
    const templateObjectId = problem.templates.get(language);
    const problemTemplateCode = await ProblemLanguageTemplate.findById(
      templateObjectId,
    );
    const starterCode = problemTemplateCode?.starterCodeSnippet;
    res.send({starterCode});
  } else {
    res.send({}).sendStatus(500);
  }
}
