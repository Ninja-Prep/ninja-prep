import {Action} from 'utils/types/redux';

import {UserSubmissionOutput} from '../../utils/types/challenges/index';
import {SET_USER_SUBMISSION_OUTPUT} from './actionTypes';

export const setSubmissionOutput = (
  output: UserSubmissionOutput,
): Action<string, UserSubmissionOutput> => ({
  type: SET_USER_SUBMISSION_OUTPUT,
  payload: output,
});
