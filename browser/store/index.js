import { createStore, applyMiddleware } from 'redux';
import mainReducer from './reducers/main';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';

const store = createStore(
  mainReducer,
  applyMiddleware(
    createLogger(),
    thunkMiddleware
  )
);