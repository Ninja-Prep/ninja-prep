import {PayloadAction} from '@reduxjs/toolkit';
import {Status} from 'utils/enums/userSubmission';
import {UserSubmissionOutput} from 'utils/types/challenges';

import {SET_USER_SUBMISSION_OUTPUT} from './actionTypes';

export interface UserSubmissionState {
  status: Status;
  output: UserSubmissionOutput;
}

const initialState: UserSubmissionState = {
  status: Status.None,
  output: null,
};

const UserSubmissionReducer = (
  state = initialState,
  action: PayloadAction<UserSubmissionOutput>,
): UserSubmissionState => {
  switch (action.type) {
    case SET_USER_SUBMISSION_OUTPUT:
      return {
        status: Status.Submitted,
        output: action.payload,
      };

    default:
      return state;
  }
};

export default UserSubmissionReducer;
