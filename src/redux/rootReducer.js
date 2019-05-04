import { combineReducers } from 'redux';
import exerciseReducer from './reducers/exerciseReducer';
import sessionsReducer from './reducers/sessionsReducer';

const appReducer = combineReducers({
  exerciseReducer,
  sessionsReducer,
});

const rootReducer = (state, action) => appReducer(state, action);
export default rootReducer;
