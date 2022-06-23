import React from 'react';
import { createStore } from 'redux';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';
import initialState from '../initialState';
import reducer from '../reducers';
import 'jsdom-global/register';
import jsdom from 'jsdom';

// const doc = jsdom.jsdom('<!doctype html><html><body></body></html>');
// global.document = doc;
// global.window = doc.defaultView;

const store = createStore(reducer, initialState);
const history = createBrowserHistory();

const ProviderMock = props => (
  <Provider store={store}>
    <Router history={history}>{props.children}</Router>
  </Provider>
);

export default ProviderMock;
