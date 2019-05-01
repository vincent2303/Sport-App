import { PUSH_EXERCISE, SET_CATEGORIES } from './types';

const setExerciseAction = exercises => ({
  type: PUSH_EXERCISE,
  payload: exercises,
});

const setCategoriesAction = (categories) => {
  const newCategories = Object.assign({}, categories);
  return ({
    type: SET_CATEGORIES,
    payload: newCategories,
  });
};

export { setExerciseAction, setCategoriesAction };
