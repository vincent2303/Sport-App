import transformIntoMutableState from '../utils/mutbaleState';
import { PUSH_EXERCISE } from '../actions/types';

const exerciseInitialState = {
  exercises: [],
  myMap: new Map([
    [11, 'aa'],
    ['cc', 'azerty'],
  ]),
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
      exercises.push('aaaa');
      return { ...state, exercises };
    }
    default:
      return { ...state };
  }
}
export default exerciseReducer;
