// Import createStore and applyMiddleware
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger'
import promise from 'redux-promise-middleware';
import { apiMiddleware } from "redux-api-middleware";
import rootReducer from './reducers';

const initialState = {};

const middleware = [thunk, logger, promise];
const composeEnhancers =  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(
  rootReducer,
  initialState,
  composeEnhancers(
    applyMiddleware(apiMiddleware, ...middleware)
  )
)

export default  store;