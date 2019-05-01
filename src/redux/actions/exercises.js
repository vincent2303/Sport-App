import { PUSH_EXERCISE, SET_CATEGORIES } from './types';

const setExerciseAction = exercises => ({
  type: PUSH_EXERCISE,
  payload: exercises,
});

const setCategoriesAction = categories => ({
  type: SET_CATEGORIES,
  payload: categories,
});

export { setExerciseAction, setCategoriesAction };
