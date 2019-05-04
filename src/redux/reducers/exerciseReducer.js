import { PUSH_EXERCISE, SET_CATEGORIES, SELECT_EXERCISE } from '../actions/types';

const exerciseInitialState = {
  exercises: {},
  categories: {},
  selectedExercise: null,
};

function exerciseReducer(state = exerciseInitialState, { type, payload }) {
  switch (type) {
    case PUSH_EXERCISE: {
      return { ...state, exercises: payload };
    }
    case SET_CATEGORIES: {
      return { ...state, categories: payload };
    }
    case SELECT_EXERCISE: {
      return { ...state, selectedExercise: payload };
    }
    default:
      return { ...state };
  }
}
export default exerciseReducer;
