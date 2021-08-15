import {NextFunction, Request, Response} from 'express';
import {StatusCode} from 'services/docker/statusCodes';
import DockerService from 'services/docker/docker';
import Problem from '@models/ProblemDetails';
import ProblemLanguageTemplate from '@models/ProblemLanguageTemplate';

export async function compileCode(
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> {
  const dockerService = new DockerService();
  const compileOutput = await dockerService.compileCode(
    req.problemSubmissionInput,
  );
  try {
    const stderr = compileOutput.errorStream.text;

    if (compileOutput.exitCode != 0) {
      res.send({
        judgedTestCases: [],
        verdict: StatusCode.CompileError,
        stderr,
      });
      return;
    }

    req.dockerService = dockerService;
    next();
  } catch (e) {
    res.send({
      judgedTestCases: [],
      verdict: StatusCode.InternalError,
      stderr: e,
    });
  }
}

export async function getProblemSubmissionDetails(
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> {
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
