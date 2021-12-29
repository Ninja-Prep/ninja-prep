import {PayloadAction} from '@reduxjs/toolkit';
import {User} from 'utils/types/user';

import {TOGGLE_CONTACT_EMAIL_MODAL, TOGGLE_LOGIN_MODAL} from './actionTypes';

export interface LoginModalState {
  showLoginModal: boolean;
  showContactEmailModal: boolean;
}

const initialState: LoginModalState = {
  showLoginModal: false,
  showContactEmailModal: false,
};

const displayModalReducer = (state = initialState, action: PayloadAction<User>): LoginModalState => {
  switch (action.type) {
    case TOGGLE_LOGIN_MODAL:
      return {
        ...state,
        showLoginModal: !state.showLoginModal,
      };
    case TOGGLE_CONTACT_EMAIL_MODAL:
      return {
        ...state,
        showContactEmailModal: !state.showContactEmailModal,
      };
    default:
      return state;
  }
};

export default displayModalReducer;
