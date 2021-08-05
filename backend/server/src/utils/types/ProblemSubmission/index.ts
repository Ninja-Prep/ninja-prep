export interface ProblemSubmissionInput {
  programmingLanguage: string;
  testCases: string[];
  snippets: {
    userCode: string;
    checkerCode: string;
    validateTestCaseCode: string;
  };
}
