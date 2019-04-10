import { PUSH_EXERCISE } from '../actions/types';

const exerciseInitialState = {
  exercises: [],
};

function exerciseReducer(state = exerciseInitialState, { type }) {
  switch (type) {
    case PUSH_EXERCISE: {
      const exercises = state.exercises.slice(0);
      exercises.push('AAAA');
      return { ...state, exercises };
    }
    default:
      return { ...state };
  }
}
export default exerciseReducer;
