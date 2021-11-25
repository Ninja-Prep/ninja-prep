import React from 'react';

import App from 'App';
import {shallow} from 'enzyme';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import {Provider} from 'react-redux';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

it('renders successfully', () => {
  const store = mockStore({});
  const wrapper = shallow(
    <Provider store={store}>
      <App />
    </Provider>,
  );
  expect(wrapper).toBeDefined();
});
