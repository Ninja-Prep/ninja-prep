import React from 'react';
import {ReactNode} from 'react';
import {ReactElement} from 'react';
import {ReactChild} from 'react';

import {createBrowserHistory} from 'history';
import {Router} from 'react-router-dom';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import configureMockStore from 'redux-mock-store';
import {Provider} from 'react-redux';
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const history = createBrowserHistory();

interface DEVICE_WIDTHS {
  readonly DESKTOP: number;
  readonly MOBILE: number;
  readonly TABLET: number;
}

// Widths in Pixels. Aligns with Media Query widths
export const DEVICE_TYPES: DEVICE_WIDTHS = {
  DESKTOP: 1000,
  MOBILE: 750,
  TABLET: 800,
};

export const routeWrapper = (children: React.ReactChild): ReactElement<(children: ReactChild) => ReactNode> => {
  const store = mockStore({
    authReducer: {
      authUser: {},
    },
  });

  return (
    <Provider store={store}>
      <Router history={history}>{children}</Router>
    </Provider>
  );
};
