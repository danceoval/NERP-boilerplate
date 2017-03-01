import React from 'react';
import ReactDOM from 'react-dom';
import { connect, Provider } from 'react-redux';
import store from './store';

ReactDOM.render(
  <Provider store={store}>
    <h1>Hello boilerPlate!</h1>
  </Provider>,
  document.getElementById('app')
);

