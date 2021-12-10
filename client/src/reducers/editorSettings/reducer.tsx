import {PayloadAction} from '@reduxjs/toolkit';
import {RootState} from 'reducers/rootReducer';
import {codeMirrorModeOptions} from 'utils/CodeEditorLanguages';

import {CHANGE_THEME, CHANGE_MODE} from './actionTypes';

export interface EditorState {
  theme: string;
  mode: string;
}

const initialState: EditorState = {
  theme: 'github',
  mode: 'text/x-java',
};

const editorSettingsReducer = (state = initialState, action: PayloadAction<string>): EditorState => {
  switch (action.type) {
    case CHANGE_THEME:
      return {
        ...state,
        theme: action.payload,
      };
    case CHANGE_MODE:
      return {
        ...state,
        mode: action.payload,
      };

    default:
      return state;
  }
};

export function getLanguage(state: RootState): string {
  const language = codeMirrorModeOptions.find((_) => _.value === state.editorSettings.mode)?.label;

  return language || 'Java';
}

export default editorSettingsReducer;
