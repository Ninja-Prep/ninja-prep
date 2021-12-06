import {DockerSubmissionResult} from 'services/docker/docker';
import {Request, Response} from 'express';
import {StatusCode, convertRuntimeVerdictExitCodes} from 'services/docker/statusCodes';
import {logger} from '@logger/logger';
import User from '@models/User';
import SubmissionRecords from '@models/ProblemSubmissionRecords';
import ProblemSolutions from '@models/ProblemSolutions';

export async function submitProblem(req: Request, res: Response): Promise<void> {
  try {
    const problemSubmissionInput = req.problemSubmissionInput;
    const dockerService = req.dockerService;
    const userOutput = await dockerService.executeCode(problemSubmissionInput);
    const judgedTestCases = formatTestCases(userOutput.testCaseResults);

    const verdict = getVerdict(judgedTestCases);

    if (req.session.user?.userId) {
      await addSubmissionToDatabase(req, verdict);
    }

    if (req.session.user && verdict === StatusCode.Accepted) {
      await User.updateOne({userId: req.session.user?.userId}, {$addToSet: {completedProblems: req.params.problemPath}});
    }
    res.send({
      judgedTestCases: judgedTestCases,
      verdict: verdict,
      stderr: userOutput.stderr,
    });
  } catch (error) {
    logger.error(error);
    res.send({
      judgedTestCases: [],
      verdict: StatusCode.InternalError,
      stderr: error,
    });
  }
}

export async function getSubmissionRecord(req: Request, res: Response) {
  const submissionRecord = await SubmissionRecords.findOne({userId: req.session.user?.userId, problemTitle: req.params.problemPath});
  res.send(submissionRecord?.submissions);
}

export async function getSolutions(req: Request, res: Response) {
  const solutionBO = await ProblemSolutions.findOne({problemTitle: req.params.problemPath});
  const solutions = await ProblemSolutions.find();
  res.send(solutionBO?.solutions);
}

interface JudgedTestCase {
  testCase: string;
  status: string;
  userStdout: string;
  userStderr: string;
  userOutput: string;
  expectedOutput: string;
}

function getVerdict(judgedTestCases: JudgedTestCase[]): StatusCode {
  if (judgedTestCases.length === 0) return StatusCode.InternalError;
  const errors = judgedTestCases.find((testcase) => {
    return testcase.status != StatusCode.Accepted;
  });
  if (errors) return StatusCode.WrongAnswer;
  return StatusCode.Accepted;
}

function formatTestCases(testCaseResults: DockerSubmissionResult[]): JudgedTestCase[] {
  const formattedTestCases: JudgedTestCase[] = testCaseResults.map((result) => {
    return {
      status: convertRuntimeVerdictExitCodes(result.runtimeExitCode, result.verdictExitCode),
      ...result,
    };
  });

  return formattedTestCases;
}

async function addSubmissionToDatabase(req: Request, verdict: StatusCode) {
  await SubmissionRecords.findOneAndUpdate(
    {userId: req.session.user?.userId, problemTitle: req.params.problemPath},
    {
      userId: req.session.user?.userId,
      problemTitle: req.params.problemPath,
      $push: {
        submissions: {
          date: new Date(),
          language: req.body.programmingLanguage.toLowerCase(),
          status: verdict,
          codeSnippet: req.body.codeSnippet,
        },
      },
    },
    {upsert: true, runValidators: true, context: 'query'},
  );
}
