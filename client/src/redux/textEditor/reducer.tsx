import {PayloadAction} from '@reduxjs/toolkit';
import {RootState} from 'redux/rootReducer';

import {UPDATE_TEXT} from './actionTypes';

export interface TextEditorState {
  value: string;
}

const initialState: TextEditorState = {
  value: '',
};

const textEditorReducer = (
  state = initialState,
  action: PayloadAction<string>,
): TextEditorState => {
  switch (action.type) {
    case UPDATE_TEXT:
      return {
        ...state,
        value: action.payload,
      };

    default:
      return state;
  }
};

export function getCookieUserCodeKey(state: RootState): string {
  const problemTitle = state.problemDetails.details?.title;
  const mode = state.editorSettings.mode;
  return [problemTitle, mode].join('_');
}

export default textEditorReducer;
