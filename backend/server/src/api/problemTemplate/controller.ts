import {Request, Response} from 'express';
import Problem from '@models/ProblemDetails';
import User from '@models/User';

import ProblemLanguageTemplate from '@models/ProblemLanguageTemplate';

interface ChallengeLink {
  title: string;
  problemPath: string;
  isFree: boolean;
  isCompleted?: boolean;
}
export async function getChallengesList(req: Request, res: Response): Promise<void> {
  const challenges = await Problem.find({}, 'title problemPath isFree').exec();
  const challengeLinks: ChallengeLink[] = challenges.map((challenge) => {
    return {
      title: challenge.title,
      problemPath: challenge.problemPath,
      isFree: challenge.isFree,
    };
  });

  if (req.session.user) {
    const user = await User.findOne({userId: req.session?.user?.userId}, 'completedProblems').exec();
    challengeLinks.map((link) => {
      link.isCompleted = user?.completedProblems.some((completedPath) => completedPath === link.problemPath);
    });
  }
  res.send(challengeLinks);
}

export async function getProblemDetails(req: Request, res: Response): Promise<void> {
  const language = req.body.programmingLanguage?.toLowerCase() || 'java';
  const problem = await Problem.findOne({
    problemPath: req.params.problemPath,
  });
  if (problem) {
    const templateObjectId = problem.templates.get(language);
    const problemTemplateCode = await ProblemLanguageTemplate.findById(templateObjectId);

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

export async function getStarterCode(req: Request, res: Response): Promise<void> {
  const language = req.body.programmingLanguage?.toLowerCase() || 'java';
  const problem = await Problem.findOne({
    problemPath: req.params.problemPath,
  });
  if (problem) {
    const templateObjectId = problem.templates.get(language);
    const problemTemplateCode = await ProblemLanguageTemplate.findById(templateObjectId);
    const starterCode = problemTemplateCode?.starterCodeSnippet;
    res.send({starterCode});
  } else {
    res.send({}).sendStatus(500);
  }
}
