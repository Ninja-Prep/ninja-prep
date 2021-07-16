import {GetState} from 'index';
import {Dispatch} from 'redux';
import {getProblemDetails} from 'services/challenges/challengesService';
import {ProblemDetails} from 'utils/types/challenges';
import {Action} from 'utils/types/redux';

import {getLanguage} from '../editorSettings/reducer';
import {
  LOAD_PROBLEM_DETAILS,
  LOAD_PROBLEM_DETAILS_ERROR,
  LOAD_PROBLEM_DETAILS_SUCCESS,
} from './actionTypes';

export function loadProblemDetailsSuccess(
  problemDetails: ProblemDetails,
): Action<string, ProblemDetails> {
  return {
    type: LOAD_PROBLEM_DETAILS_SUCCESS,
    payload: problemDetails,
  };
}

export function loadProblemDetails(problemId: string) {
  return async function (
    dispatch: Dispatch,
    getState: GetState,
  ): Promise<void> {
    dispatch({type: LOAD_PROBLEM_DETAILS});
    try {
      const state = getState();
      const language = getLanguage(state);
      const problemDetails = await getProblemDetails(problemId, language);
      dispatch(loadProblemDetailsSuccess(problemDetails));
    } catch (err) {
      dispatch({type: LOAD_PROBLEM_DETAILS_ERROR});
    }
  };
}
