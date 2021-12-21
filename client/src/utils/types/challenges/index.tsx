import {VerdictStatus, ProblemDifficulty} from 'utils/enums/userSubmission';

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

export interface SubmissionRecord {
  status: VerdictStatus;
  date: Date;
  codeSnippet: string;
  language: string;
}

export interface SolutionDetails {
  solutionSnippet: string;
  language: string;
}

export type ProblemDetails = {
  readonly description: string;
  readonly hints: string[];
  readonly starterCode: string;
  readonly testCases: string[];
  readonly title: string;
  readonly isFree: boolean;
  readonly difficulty: ProblemDifficulty;
};

export function isUserSubmissionOutput(
  // eslint-disable-next-line @typescript-eslint/ban-types
  output: UserSubmissionOutput,
): output is UserSubmissionOutput {
  return output?.verdict !== undefined;
}
