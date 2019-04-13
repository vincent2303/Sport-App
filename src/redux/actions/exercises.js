import { PUSH_EXERCISE } from './types';

const setExerciseAction = exercises => ({
  type: PUSH_EXERCISE,
  payload: exercises,
});

function pushMap() {}

export { setExerciseAction, pushMap };
