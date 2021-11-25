import {PayloadAction} from '@reduxjs/toolkit';
import {User} from 'utils/types/user';

import {TOGGLE_LOGIN_MODAL} from './actionTypes';

export interface LoginModalState {
  showLoginModal: boolean;
}

const initialState: LoginModalState = {
  showLoginModal: false,
};

const loginModalReducer = (state = initialState, action: PayloadAction<User>): LoginModalState => {
  switch (action.type) {
    case TOGGLE_LOGIN_MODAL:
      return {
        ...state,
        showLoginModal: !state.showLoginModal,
      };
    default:
      return state;
  }
};

export default loginModalReducer;
