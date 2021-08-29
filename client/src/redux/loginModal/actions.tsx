import {Action} from 'utils/types/redux';
import {TOGGLE_LOGIN_MODAL} from './actionTypes';

export const toggleLoginModal = (): Action<string, boolean> => ({
  type: TOGGLE_LOGIN_MODAL,
});
