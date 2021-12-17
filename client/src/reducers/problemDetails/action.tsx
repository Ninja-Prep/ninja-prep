import {GetState} from 'index';
import {Dispatch} from 'redux';
import {getProblemDetails, getSolutions, getSubmissionRecords} from 'services/challenges/challengesService';
import {ProblemDetails, SolutionDetails, SubmissionRecord} from 'utils/types/challenges';
import {Action} from 'utils/types/redux';

import {getLanguage} from '../editorSettings/reducer';
import {LOAD_PROBLEM_DETAILS, LOAD_PROBLEM_DETAILS_ERROR, LOAD_PROBLEM_DETAILS_SUCCESS} from './actionTypes';
import {ProblemDetailsPayload} from './reducer';

export function loadProblemDetailsSuccess(problemDetails: ProblemDetails, solutionsList: SolutionDetails[], submissionRecords: SubmissionRecord[]): Action<string, ProblemDetailsPayload> {
  return {
    type: LOAD_PROBLEM_DETAILS_SUCCESS,
    payload: {problemDetails, solutionsList, submissionRecords},
  };
}

export function loadProblemDetails(problemId: string) {
  return async function (dispatch: Dispatch, getState: GetState): Promise<void> {
    dispatch({type: LOAD_PROBLEM_DETAILS});
    try {
      const state = getState();
      const language = getLanguage(state);

      const [problemDetails, solutionsList, submissionRecords] = await Promise.all([getProblemDetails(problemId, language), getSolutions(problemId), getSubmissionRecords(problemId)]);
      console.log(submissionRecords);
      dispatch(loadProblemDetailsSuccess(problemDetails, solutionsList, submissionRecords));
    } catch (err) {
      dispatch({type: LOAD_PROBLEM_DETAILS_ERROR});
    }
  };
}
