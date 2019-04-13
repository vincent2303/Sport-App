import { setExerciseAction } from '../actions/exercises';
import { storeExercises } from '../storageSystem/exercises';

// we don't await store exercise to have a fast app
const setExercises = exercises => (dispatch) => {
  storeExercises(exercises);
  dispatch(setExerciseAction(exercises.slice(0)));
};

function fake() {}

export { setExercises, fake };
