import {
  createStore, applyMiddleware, compose,
} from 'redux';

import thunk from 'redux-thunk';
import rootReducer from './rootReducer';

const middeleware = [thunk];

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(...middeleware),
  ),
);

export default store;
