import { combineReducers } from 'redux';
import exercisesReducer from './reducers/exercisesReducer';
import sessionsReducer from './reducers/sessionsReducer';

const appReducer = combineReducers({
  exercisesReducer,
  sessionsReducer,
});

const rootReducer = (state, action) => appReducer(state, action);
export default rootReducer;
