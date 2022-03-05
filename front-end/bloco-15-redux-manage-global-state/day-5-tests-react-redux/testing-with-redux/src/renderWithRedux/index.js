import { Provider } from 'react-redux'
import { render } from '@testing-library/react';
import React from 'react';

// demais imports...
import { createStore, combineReducers } from 'redux';
import clickReducer from '../reducers';
const rootReducer = combineReducers({ clickReducer });

const createMockStore = () => createStore(rootReducer);

export const renderWithRedux = (
  component,
  { initialState, store = createStore(combineReducers({ clickReducer }), initialState) } = {}
) => {
  const mockStore = createMockStore();
  return {
    ...render(<Provider store={mockStore}>{component}</Provider>),
    store,
  }
}