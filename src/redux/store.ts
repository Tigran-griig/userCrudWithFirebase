import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk'

import rootReducer from './reducers'

import { composeWithDevTools } from 'redux-devtools-extension';

const composeEnhancers = composeWithDevTools({});

const middleware = [thunk]
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(...middleware)))

export type AppDispatch = typeof store.dispatch

export default store;

