import {modeOptions} from '../../../components/CodeEditor/UserSettings/CodeEditorLanguages';

const initialState = {
  theme: 'github',
  mode: 'text/x-java',
  language: modeOptions.find((_) => _.value === 'text/x-java').label,
};

const editorReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGE_THEME':
      return {
        ...state,
        theme: action.theme,
      };
    case 'CHANGE_MODE':
      return {
        ...state,
        mode: action.mode,
        language: modeOptions.find((_) => _.value === action.mode).label,
      };

    default:
      return state;
  }
};

export default editorReducer;
