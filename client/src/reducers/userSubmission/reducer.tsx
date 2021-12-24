import {PayloadAction} from '@reduxjs/toolkit';
import {SubmissionStatus, VerdictStatus} from 'utils/enums/userSubmission';
import {UserSubmissionOutput} from 'utils/types/challenges';

import {SUBMIT_PROBLEM_SUCCESS, SUBMIT_PROBLEM, SUBMIT_PROBLEM_ERROR, RESET_PROBLEM_SUBMISSION, SUBMIT_PROBLEM_THROTTLE_ERROR} from './actionTypes';

export interface UserSubmissionState {
  submissionStatus: SubmissionStatus;
  output: UserSubmissionOutput;
  throttleError: boolean;
}

const initialState: UserSubmissionState = {
  submissionStatus: SubmissionStatus.NONE,
  output: {
    verdict: VerdictStatus.NONE,
    stderr: '',
    judgedTestCases: [],
  },
  throttleError: false,
};

const UserSubmissionReducer = (state = initialState, action: PayloadAction<UserSubmissionOutput>): UserSubmissionState => {
  switch (action.type) {
    case SUBMIT_PROBLEM_SUCCESS:
      return {
        submissionStatus: SubmissionStatus.SUBMITTED,
        output: action.payload,
        throttleError: false,
      };
    case SUBMIT_PROBLEM_ERROR:
      return {
        ...state,
        submissionStatus: SubmissionStatus.ERROR,
      };
    case SUBMIT_PROBLEM:
      return {
        ...state,
        throttleError: false,
        submissionStatus: SubmissionStatus.LOADING,
      };
    case SUBMIT_PROBLEM_THROTTLE_ERROR:
      return {
        ...state,
        submissionStatus: SubmissionStatus.NONE,
        throttleError: true,
      };
    case RESET_PROBLEM_SUBMISSION:
      return initialState;

    default:
      return state;
  }
};

export default UserSubmissionReducer;
