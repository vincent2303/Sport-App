import transformIntoMutableState from '../utils/mutbaleState';
import { PUSH_EXERCISE } from '../actions/types';

const exerciseInitialState = {
  exercises: [],
};


// le return du reducer ne doit pas avoir mutate le state:
// si mon state c'est {a: 11, b: 222 }
// je peux, avant le return faire ce que je veux mais au moment du return,
// si j'ai changé qqch, ce qqch doit etre un nvl objet

function exerciseReducer(immutableState = exerciseInitialState, { type }) {
  const state = transformIntoMutableState(immutableState);
  switch (type) {
    case PUSH_EXERCISE: {
      const { exercises } = state;
      return { ...state, exercises };
    }
    default:
      return { ...state };
  }
}
export default exerciseReducer;
