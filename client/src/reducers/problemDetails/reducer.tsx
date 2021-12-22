import {PayloadAction} from '@reduxjs/toolkit';
import {ProblemDifficulty} from 'utils/enums/userSubmission';
import {ProblemDetails, SolutionDetails, SubmissionRecord} from 'utils/types/challenges';

import {LOAD_PROBLEM_DETAILS, LOAD_PROBLEM_DETAILS_ERROR, LOAD_PROBLEM_DETAILS_SUCCESS} from './actionTypes';

export interface UserSubmissionState {
  isLoading: boolean;
  isError: boolean;
  details: ProblemDetails;
  solutionsList: SolutionDetails[];
  submissionRecords: SubmissionRecord[];
}

export interface ProblemDetailsPayload {
  problemDetails: ProblemDetails;
  solutionsList: SolutionDetails[];
  submissionRecords: SubmissionRecord[];
}

const initialState: UserSubmissionState = {
  isLoading: false,
  isError: false,
  submissionRecords: [],
  solutionsList: [],
  details: {
    description: '',
    hints: [],
    starterCode: '',
    testCases: [],
    title: '',
    isFree: false,
    difficulty: ProblemDifficulty.EASY,
    videoSolutionLink: '',
  },
};

const ProblemDetailsReducer = (state = initialState, action: PayloadAction<ProblemDetailsPayload>): UserSubmissionState => {
  switch (action.type) {
    case LOAD_PROBLEM_DETAILS:
      return {
        ...state,
        isLoading: true,
      };
    case LOAD_PROBLEM_DETAILS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        details: action.payload.problemDetails,
        solutionsList: action.payload.solutionsList,
        submissionRecords: action.payload.submissionRecords,
      };
    case LOAD_PROBLEM_DETAILS_ERROR:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };

    default:
      return state;
  }
};

export default ProblemDetailsReducer;
