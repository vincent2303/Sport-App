import AsyncStorage from '@react-native-community/async-storage';
import store from '../store';
import defaultExercises from '../../data/exercises';
import defaultCategories from '../../data/categories';

import { setExerciseAction, setCategoriesAction } from '../actions/exercises';

const exercisesKey = 'exercisesKey';

async function storeExercises(exercises) {
  const exercisesString = JSON.stringify(exercises);
  try {
    await AsyncStorage.setItem(exercisesKey, exercisesString);
  } catch (err) {
    throw new Error(err);
  }
}

async function loadExercises() {
  try {
    const exercisesString = await AsyncStorage.getItem(exercisesKey);
    const exercises = JSON.parse(exercisesString);
    store.dispatch(setExerciseAction(exercises));
    store.dispatch(setCategoriesAction(defaultCategories));
  } catch (err) {
    throw new Error(err);
  }
}

// set default exercises in redux and store it (used for first connection)
function setAndStoreDefaultExercises() {
  const exercisesString = JSON.stringify(defaultExercises);
  AsyncStorage.setItem(exercisesKey, exercisesString);
  store.dispatch(setExerciseAction(defaultExercises));
  store.dispatch(setCategoriesAction(defaultCategories));
}

export { storeExercises, loadExercises, setAndStoreDefaultExercises };
