import { createStore } from 'redux'
import rootReducer from './reducer'

// redux-logger 를 통해 상태 변화에 대한 로그를 상세하게 제공 받는다.
const redux = require('redux');
const reduxLogger = require('redux-logger');

const logger = reduxLogger.createLogger();
const applyMiddleware = redux.applyMiddleware;
const store = createStore(rootReducer, applyMiddleware(logger));

export default store