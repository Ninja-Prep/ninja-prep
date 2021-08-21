import {PayloadAction} from '@reduxjs/toolkit';
import {User} from 'utils/types/user';

import {LOADING_USER, LOADING_USER_SUCCESS, SET_USER} from './actionTypes';

export interface AuthState {
  isLoadingUser: boolean;
  authUser: User;
}

const initialState: AuthState = {
  isLoadingUser: false,
  authUser: null,
};

const authReducer = (state = initialState, action: PayloadAction<User>): AuthState => {
  switch (action.type) {
    case LOADING_USER:
      return {
        ...state,
        isLoadingUser: true,
      };
    case LOADING_USER_SUCCESS:
      return {
        ...state,
        isLoadingUser: false,
      };

    case SET_USER:
      return {
        ...state,
        authUser: action.payload,
      };

    default:
      return state;
  }
};

export default authReducer;
