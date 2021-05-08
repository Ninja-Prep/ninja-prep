type JudgedTestCase = {
    status: string
    stderr: string
    user_stdout: string
    user_output: string
    test_case: string
    expected_output: string
}

export enum SubmissionStatus {
    None,
    Error,
    Pending,
    Completed
}

export type UserSubmissionOutput = {
    verdict: string
    stderr: string
    judged_test_cases: Array<JudgedTestCase>
}
