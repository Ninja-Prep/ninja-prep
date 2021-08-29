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
  verdict: string;
  stderr: string;
  judgedTestCases: JudgedTestCase[];
} | null;

export interface ChallengeLink {
  readonly title: string;
  readonly problemPath: string;
  readonly isFree: boolean;
  readonly isCompleted?: boolean;
}

export type ProblemDetails = {
  readonly description: string;
  readonly hints: string[];
  readonly starterCode: string;
  readonly testCases: string[];
  readonly title: string;
  readonly isFree: boolean;
} | null;

export function isUserSubmissionOutput(
  // eslint-disable-next-line @typescript-eslint/ban-types
  output: UserSubmissionOutput,
): output is UserSubmissionOutput {
  return output?.verdict !== undefined;
}
