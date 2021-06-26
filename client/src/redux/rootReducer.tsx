import {combineReducers} from 'redux';

import editorSettings from './editorSettings/reducer';
import textEditor from './textEditor/reducer';
import userSubmission from './userSubmission/reducer';

const rootReducer = combineReducers({
  editorSettings,
  textEditor,
  userSubmission,
});
export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
