import {PayloadAction} from '@reduxjs/toolkit';

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

export default textEditorReducer;
