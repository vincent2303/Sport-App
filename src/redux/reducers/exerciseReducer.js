import { PUSH_EXERCISE, SET_CATEGORIES } from '../actions/types';

const exerciseInitialState = {
  exercises: {},
  categories: {},
};


// le return du reducer ne doit pas avoir mutate le state:
// si mon state c'est {a: 11, b: 222 }
// je peux, avant le return faire ce que je veux mais au moment du return,
// si j'ai changé qqch, ce qqch doit etre un nvl objet

function exerciseReducer(state = exerciseInitialState, { type, payload }) {
  switch (type) {
    case PUSH_EXERCISE: {
      return { ...state, exercises: payload };
    }
    case SET_CATEGORIES: {
      return { ...state, categories: payload };
    }
    default:
      return { ...state };
  }
}
export default exerciseReducer;
