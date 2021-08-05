import {NextFunction, Request, Response} from 'express';
import {logger} from '@logger/logger';
import Problem from '@models/ProblemDetails';
import ProblemLanguageTemplate from '@models/ProblemLanguageTemplate';

export async function getProblemSubmissionDetails(
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> {
  logger.info(req.body);

  const programmingLanguage = req.body.programmingLanguage.toLowerCase();
  const userCodeSnippet = req.body.codeSnippet;

  const problem = await Problem.findOne({
    problemPath: req.params.problemPath,
  });

  const problemTemplateCode = await ProblemLanguageTemplate.findOne({
    _id: problem?.templates.get(programmingLanguage),
  });

  if (problem && problemTemplateCode) {
    const testCases = problem.inputTestCases;
    const codeContainer = problemTemplateCode.executableCodeContainerSnippet;
    const userCode = codeContainer.replace('INSERT_SOLVER', userCodeSnippet);

    const checkerCode = problem.checkerCodeSnippet;
    const validateTestCaseCode = problem.validateTestCaseSnippet;

    req.problemSubmissionInput = {
      programmingLanguage,
      testCases,
      snippets: {userCode, checkerCode, validateTestCaseCode},
    };
    next();
  } else {
    res.send({}).sendStatus(500);
  }
}
