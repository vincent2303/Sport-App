import { PUSH_EXERCISE } from './types';

const addExerciseAction = exercises => ({
  type: PUSH_EXERCISE,
  payload: exercises,
});

function pushMap() {}

export { addExerciseAction, pushMap };
