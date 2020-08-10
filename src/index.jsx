import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux'
import createSagaMiddleware from 'redux-saga';
import { createLogger } from 'redux-logger';
import rootSaga from './saga';
import reducer from './reducer';
import App from './App';

const { DEV } = process.env;

const sagaMiddleware = createSagaMiddleware()

const middlewares = DEV ? applyMiddleware(sagaMiddleware, createLogger()) : applyMiddleware(sagaMiddleware);

const store = createStore(combineReducers(reducer), middlewares);

sagaMiddleware.run(rootSaga);

render(<Provider store={store}><App/></Provider>, document.getElementById('content_managers'));
