import {combineReducers} from 'redux';

import editorSettings from './editorSettings/reducer';
import problemDetails from './problemDetails/reducer';
import textEditor from './textEditor/reducer';
import userSubmission from './userSubmission/reducer';
import authReducer from './auth/reducer';
import loginModal from './loginModal/reducer';
import footer from './footer/reducer';

const rootReducer = combineReducers({
  authReducer,
  editorSettings,
  textEditor,
  userSubmission,
  problemDetails,
  loginModal,
  footer,
});
export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
