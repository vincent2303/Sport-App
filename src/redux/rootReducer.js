import { combineReducers } from 'redux';
import exerciseReducer from './reducers/exerciseReducer';

const appReducer = combineReducers({
  exerciseReducer,
});

const rootReducer = (state, action) => appReducer(state, action);
export default rootReducer;
