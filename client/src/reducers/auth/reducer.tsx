import {PayloadAction} from '@reduxjs/toolkit';
import {RootState} from 'reducers/rootReducer';
import {User} from 'utils/types/user';

import {LOADING_USER, LOADING_USER_SUCCESS, SET_USER} from './actionTypes';

export interface AuthState {
  isLoadingUser: boolean;
  authUser: User;
}

const initialState: AuthState = {
  isLoadingUser: false,
  authUser: null,
};

const authReducer = (state = initialState, action: PayloadAction<User>): AuthState => {
  switch (action.type) {
    case LOADING_USER:
      return {
        ...state,
        isLoadingUser: true,
      };
    case LOADING_USER_SUCCESS:
      return {
        ...state,
        isLoadingUser: false,
      };

    case SET_USER:
      return {
        ...state,
        authUser: action.payload,
      };

    default:
      return state;
  }
};

export function isPremiumUser(state: RootState): boolean {
  const premiumExpirationDate = state.authReducer.authUser?.premiumExpirationDate;
  if (premiumExpirationDate) {
    const currentTime = Date.now();
    const expirationDate = new Date(premiumExpirationDate).getTime();
    return expirationDate > currentTime;
  }

  return false;
}

export function formattedPremiumExpirationDate(state: RootState): string | undefined {
  const premiumExpirationDate = state.authReducer.authUser?.premiumExpirationDate;
  if (premiumExpirationDate) {
    const formattedDate = new Date(premiumExpirationDate).toLocaleString('default', {year: 'numeric', month: 'long', day: 'numeric'});
    return formattedDate;
  }
  return undefined;
}

export default authReducer;
