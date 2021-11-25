import {PayloadAction} from '@reduxjs/toolkit';

import {DISPLAY_FOOTER} from './actionTypes';

export interface FooterState {
  displayFooter: boolean;
}

const initialState: FooterState = {
  displayFooter: true,
};

const loginModalReducer = (state = initialState, action: PayloadAction<boolean>): FooterState => {
  switch (action.type) {
    case DISPLAY_FOOTER:
      return {
        ...state,
        displayFooter: action.payload,
      };
    default:
      return state;
  }
};

export default loginModalReducer;
