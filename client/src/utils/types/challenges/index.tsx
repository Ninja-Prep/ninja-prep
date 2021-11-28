import {VerdictStatus} from 'utils/enums/userSubmission';

/* eslint-disable camelcase */
export type JudgedTestCase = {
  status: string;
  stderr: string;
  userStdout: string;
  userOutput: string;
  testCase: string;
  expectedOutput: string;
};

export type UserSubmissionOutput = {
  verdict: VerdictStatus;
  stderr: string;
  judgedTestCases: JudgedTestCase[];
};

export interface ChallengeLink {
  readonly title: string;
  readonly problemPath: string;
  readonly isFree: boolean;
  readonly isCompleted?: boolean;
  readonly questionCategory: string;
  readonly previewDescription: string;
}

export type ProblemDetails = {
  readonly description: string;
  readonly hints: string[];
  readonly starterCode: string;
  readonly testCases: string[];
  readonly title: string;
  readonly isFree: boolean;
};

export function isUserSubmissionOutput(
  // eslint-disable-next-line @typescript-eslint/ban-types
  output: UserSubmissionOutput,
): output is UserSubmissionOutput {
  return output?.verdict !== undefined;
}
