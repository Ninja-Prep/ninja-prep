import {Problem} from 'question-database';
import {ProblemLanguageTemplate} from 'question-database';
import {Request, Response} from 'express';
import _ from 'lodash';

export async function getChallengesList(
  req: Request,
  res: Response,
): Promise<void> {
  const publicChallengesFields = ['title', 'problem_path'];

  const challenges = await Problem.find();
  const filteredChallenges = challenges.map((challenge) => {
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
    problem_path: req.params.problemPath,
  });

  if (problem) {
    const templateObjectId = problem.templates.get(language);
    const problemTemplateCode = await ProblemLanguageTemplate.findById(
      templateObjectId,
    );

    const starterCode = problemTemplateCode?.starter_code_snippet;
    const title = problem.title;
    const description = problem.description;
    const hints = problem.hints;
    const testCases = problem.input_testcases;
    res.send({starterCode, title, description, hints, testCases});
  } else {
    res.send({}).sendStatus(500);
  }
}
