import { PUSH_EXERCISE, SET_CATEGORIES, SELECT_EXERCISE } from './types';

const setExerciseAction = exercises => ({
  type: PUSH_EXERCISE,
  payload: exercises,
});

const setCategoriesAction = categories => ({
  type: SET_CATEGORIES,
  payload: categories,
});

const selectExerciseAction = exercise => ({
  type: SELECT_EXERCISE,
  payload: exercise,
});

export { setExerciseAction, setCategoriesAction, selectExerciseAction };
