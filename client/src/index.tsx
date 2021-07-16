import React from 'react';

import App from 'App';
import GlobalStyle from 'GlobalStyle';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import reduxThunk from 'redux-thunk';
import reducers from 'redux/rootReducer';

const store = createStore(reducers, applyMiddleware(reduxThunk));

export type GetState = typeof store.getState;

ReactDOM.render(
  <Provider store={store}>
    <GlobalStyle />
    <App />
  </Provider>,
  document.getElementById('root'),
);
