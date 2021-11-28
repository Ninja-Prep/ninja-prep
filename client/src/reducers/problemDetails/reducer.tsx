import {PayloadAction} from '@reduxjs/toolkit';
import {ProblemDetails} from 'utils/types/challenges';

import {LOAD_PROBLEM_DETAILS, LOAD_PROBLEM_DETAILS_ERROR, LOAD_PROBLEM_DETAILS_SUCCESS} from './actionTypes';

export interface UserSubmissionState {
  isLoading: boolean;
  isError: boolean;
  details: ProblemDetails;
}

const initialState: UserSubmissionState = {
  isLoading: false,
  isError: false,
  details: {
    description: '',
    hints: [],
    starterCode: '',
    testCases: [],
    title: '',
    isFree: false,
  },
};

const ProblemDetailsReducer = (state = initialState, action: PayloadAction<ProblemDetails>): UserSubmissionState => {
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
        details: action.payload,
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
