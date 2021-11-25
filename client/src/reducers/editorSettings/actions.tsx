import {Action} from 'utils/types/redux';

import {CHANGE_THEME, CHANGE_MODE} from './actionTypes';

export const changeTheme = (theme: string): Action<string, string> => ({
  type: CHANGE_THEME,
  payload: theme,
});

export const changeMode = (
  mode: string | null,
): Action<string, string | null> => {
  return {
    type: CHANGE_MODE,
    payload: mode,
  };
};
