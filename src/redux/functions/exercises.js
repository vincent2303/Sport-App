import { addExerciseAction } from '../actions/exercises';
import { storeExercises } from '../storageSystem/exercises';

// we don't await store exercise to have a fast app
const addExercise = exercises => (dispatch) => {
  storeExercises(exercises);
  dispatch(addExerciseAction(exercises.slice(0)));
};

function fake() {}

export { addExercise, fake };
