import {Action} from 'utils/types/redux';
import {User} from 'utils/types/user';

import {LOADING_USER, LOADING_USER_SUCCESS, SET_USER} from './actionTypes';

export const loadingUser = (): Action<string, boolean> => ({
  type: LOADING_USER,
});

export const loadingUserSuccess = (): Action<string, boolean> => ({
  type: LOADING_USER_SUCCESS,
});

export const setUser = (user: User): Action<string, User> => ({
  type: SET_USER,
  payload: user,
});
