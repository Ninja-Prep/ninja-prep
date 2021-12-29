import {Action} from 'utils/types/redux';
import {TOGGLE_LOGIN_MODAL, TOGGLE_CONTACT_EMAIL_MODAL} from './actionTypes';

export const toggleLoginModal = (): Action<string, boolean> => ({
  type: TOGGLE_LOGIN_MODAL,
});

export const toggleContactEmailModal = (): Action<string, boolean> => ({
  type: TOGGLE_CONTACT_EMAIL_MODAL,
});
