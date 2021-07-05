import {NextFunction, Request, Response} from 'express';
import {Problem, ProblemLanguageTemplate} from 'question-database';
import {logger} from '@logger/logger';

export async function getProblemSubmissionDetails(
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> {
  logger.info(req.body);

  const programmingLanguage = req.body.programmingLanguage.toLowerCase();
  const userCodeSnippet = req.body.codeSnippet;

  const problem = await Problem.findOne({
    problem_path: req.params.problemPath,
  });

  const problemTemplateCode = await ProblemLanguageTemplate.findOne({
    _id: problem?.templates.get(programmingLanguage),
  });

  if (problem && problemTemplateCode) {
    const testCases = problem.input_testcases;
    const codeContainer = problemTemplateCode.executable_code_container;
    const userCode = codeContainer.replace('INSERT_SOLVER', userCodeSnippet);

    const checkerCode = problem.checker_code_snippet;
    const validateTestCaseCode = problem.validate_test_case_snippet;

    req.problemBO = {
      programmingLanguage,
      testCases,
      snippets: {userCode, checkerCode, validateTestCaseCode},
    };
    next();
  } else {
    res.send({}).sendStatus(500);
  }
}
