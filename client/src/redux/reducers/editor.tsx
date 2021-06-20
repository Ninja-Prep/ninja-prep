import {PayloadAction} from '@reduxjs/toolkit';
import {modeOptions} from 'components/CodeEditor/UserSettings/CodeEditorLanguages';

interface EditorState {
  theme: string;
  mode: string;
  language?: string;
}

const initialState: EditorState = {
  theme: 'github',
  mode: 'text/x-java',
  language: modeOptions.find((_) => _.value === 'text/x-java')?.label,
};

const editorReducer = (
  state = initialState,
  action: PayloadAction<string>,
): EditorState => {
  switch (action.type) {
    case 'CHANGE_THEME':
      return {
        ...state,
        theme: action.payload,
      };
    case 'CHANGE_MODE':
      return {
        ...state,
        mode: action.payload,
        language: modeOptions.find((_) => _.value === action.payload)?.label,
      };

    default:
      return state;
  }
};

export default editorReducer;
