import store from '../store';
import { getExercises } from './exercises';
import { setExerciseAction } from '../actions/exercises';

async function loadExercises() {
  const exercises = await getExercises();
  store.dispatch(setExerciseAction(exercises));
}

// load the data and set the result in redux
export default async function loadCoreData() {
  await Promise.all([
    loadExercises(),
  ]);
}
