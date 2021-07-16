import axios from 'axios';
import {GetState} from 'index';
import {Dispatch} from 'redux';
import {UserSubmissionOutput} from 'utils/types/challenges';
import {JudgedTestCase} from 'utils/types/challenges/index';
import {Action} from 'utils/types/redux';

import {getLanguage} from '../editorSettings/reducer';
import {
  SUBMIT_PROBLEM_SUCCESS,
  SUBMIT_PROBLEM,
  SUBMIT_PROBLEM_ERROR,
} from './actionTypes';

export function submitProblemSuccess(
  output: UserSubmissionOutput,
): Action<string, UserSubmissionOutput> {
  return {
    type: SUBMIT_PROBLEM_SUCCESS,
    payload: output,
  };
}

export function submitProblemError(
  errorMessage: string,
): Action<string, string> {
  return {
    type: SUBMIT_PROBLEM_ERROR,
    payload: errorMessage,
  };
}

export function submitProblem(problemId: string) {
  return function (dispatch: Dispatch, getState: GetState): void {
    dispatch({type: SUBMIT_PROBLEM});
    const state = getState();
    axios
      .post(`/api/submisson/execute/${problemId}`, {
        codeSnippet: state.textEditor.value,
        programmingLanguage: getLanguage(state),
      })
      .then((response) => {
        const output = response.data;
        const formattedJudgedTestCases: JudgedTestCase[] =
          output.judged_test_cases.map((testCase: any) => {
            const judgedTestCase: JudgedTestCase = {
              status: testCase.status,
              stderr: testCase.stderr,
              userStdout: testCase.user_stdout,
              userOutput: testCase.user_output,
              testCase: testCase.testcase,
              expectedOutput: testCase.expected_output,
            };
            return judgedTestCase;
          });
        const payload: UserSubmissionOutput = {
          judgedTestCases: formattedJudgedTestCases,
          verdict: output.verdict,
          stderr: output.stderr,
        };
        dispatch(submitProblemSuccess(payload));
      })
      .catch((err: Error) => {
        dispatch(submitProblemError(err.message));
      });
  };
}
