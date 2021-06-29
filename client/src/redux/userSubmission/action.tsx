import axios from 'axios';
import {GetState} from 'index';
import {Dispatch} from 'redux';
import {UserSubmissionOutput} from 'utils/types/challenges';
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
        dispatch(submitProblemSuccess(output));
      })
      .catch((err: Error) => {
        dispatch(submitProblemError(err.message));
      });
  };
}
