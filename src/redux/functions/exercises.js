import { setExerciseAction, selectExerciseAction } from '../actions/exercises';
import { storeExercises } from '../storageSystem/exercises';

// we don't await store exercise to have a fast app
const setExercises = exercises => (dispatch) => {
  storeExercises(exercises);
  dispatch(setExerciseAction(exercises.slice()));
};

const selectExercise = exercise => (dispatch) => {
  dispatch(selectExerciseAction(exercise));
};

export { setExercises, selectExercise };
