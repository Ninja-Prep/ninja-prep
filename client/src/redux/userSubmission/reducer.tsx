import {PayloadAction} from '@reduxjs/toolkit';
import {Status} from 'utils/enums/userSubmission';
import {UserSubmissionOutput} from 'utils/types/challenges';

import {
  SUBMIT_PROBLEM_SUCCESS,
  SUBMIT_PROBLEM,
  SUBMIT_PROBLEM_ERROR,
} from './actionTypes';

export interface UserSubmissionState {
  status: Status;
  output: UserSubmissionOutput;
}

const initialState: UserSubmissionState = {
  status: Status.NONE,
  output: null,
};

const UserSubmissionReducer = (
  state = initialState,
  action: PayloadAction<UserSubmissionOutput>,
): UserSubmissionState => {
  switch (action.type) {
    case SUBMIT_PROBLEM_SUCCESS:
      return {
        status: Status.SUBMITTED,
        output: action.payload,
      };
    case SUBMIT_PROBLEM_ERROR:
      return {
        ...state,
        status: Status.ERROR,
      };
    case SUBMIT_PROBLEM:
      return {
        ...state,
        status: Status.LOADING,
      };

    default:
      return state;
  }
};

export default UserSubmissionReducer;
