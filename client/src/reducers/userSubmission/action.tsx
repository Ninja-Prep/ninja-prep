import axios, {AxiosError} from 'axios';
import * as _ from 'lodash';
import {GetState} from 'index';
import {Dispatch} from 'redux';
import {UserSubmissionOutput} from 'utils/types/challenges';
import {JudgedTestCase} from 'utils/types/challenges/index';
import {Action} from 'utils/types/redux';

import {getLanguage} from '../editorSettings/reducer';
import {SUBMIT_PROBLEM_SUCCESS, SUBMIT_PROBLEM, SUBMIT_PROBLEM_ERROR, RESET_PROBLEM_SUBMISSION, SUBMIT_PROBLEM_THROTTLE_ERROR} from './actionTypes';

export function submitProblemSuccess(output: UserSubmissionOutput): Action<string, UserSubmissionOutput> {
  return {
    type: SUBMIT_PROBLEM_SUCCESS,
    payload: output,
  };
}

export function resetProblemSubmission(): Action<string, UserSubmissionOutput> {
  return {
    type: RESET_PROBLEM_SUBMISSION,
  };
}

export function submitProblemError(errorMessage: string): Action<string, string> {
  return {
    type: SUBMIT_PROBLEM_ERROR,
    payload: errorMessage,
  };
}
export function submitProblemThrottleError(): Action<string, undefined> {
  return {
    type: SUBMIT_PROBLEM_THROTTLE_ERROR,
  };
}

export function submitProblem(problemId: string) {
  return function (dispatch: Dispatch, getState: GetState): void {
    dispatch({type: SUBMIT_PROBLEM});
    const state = getState();
    axios
      .post(`/api/submission/execute/${problemId}`, {
        codeSnippet: _.trim(state.textEditor.value),
        programmingLanguage: getLanguage(state),
      })
      .then((response) => {
        const output = response.data;
        const formattedJudgedTestCases: JudgedTestCase[] = output.judgedTestCases.map((testCase: any) => {
          const judgedTestCase: JudgedTestCase = {
            status: testCase.status,
            stderr: testCase.userStderr,
            userStdout: testCase.userStdout,
            userOutput: testCase.userOutput,
            testCase: testCase.testcase,
            expectedOutput: testCase.expectedOutput,
          };
          return judgedTestCase;
        });

        const stderr = typeof output.stderr === 'string' ? output.stderr : JSON.stringify(output.stderr, null, 4);

        const payload: UserSubmissionOutput = {
          judgedTestCases: formattedJudgedTestCases,
          verdict: output.verdict,
          stderr,
        };
        dispatch(submitProblemSuccess(payload));
      })
      .catch((err: AxiosError) => {
        if (err.response?.status === 429) {
          dispatch(submitProblemThrottleError());
        } else {
          dispatch(submitProblemError(err.message));
        }
      });
  };
}
