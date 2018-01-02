import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { listReducer as reducers } from './reducers';
import Layout from './components/Layout';
import * as initialState from './initialState';
import * as actions from './actions/index';

const store = createStore(reducers, initialState);

const layout = <Layout store={store}/>;

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    layout,
    document.getElementById('main')
  );
});
