import {Action} from 'utils/types/redux';

import {UPDATE_TEXT} from './actionTypes';

export const updateEditorText = (text: string): Action<string, string> => ({
  type: UPDATE_TEXT,
  payload: text,
});
