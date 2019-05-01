import AsyncStorage from '@react-native-community/async-storage';
import store from '../store';
import { defaultCategories, defaultExercises } from '../../data';

import { setExerciseAction, setCategoriesAction } from '../actions/exercises';

const exercisesKey = 'exercisesKey';
const categoriesKey = 'categoriesKey';

//  ---------- exercises array ----------

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
  } catch (err) {
    throw new Error(err);
  }
}

// set default exercises in redux and store it (used for first connection)
function setAndStoreDefaultExercises() {
  const exercisesString = JSON.stringify(defaultExercises);
  AsyncStorage.setItem(exercisesKey, exercisesString);
  store.dispatch(setExerciseAction(defaultExercises));
}

//  ---------- categories ----------

async function loadCategories() {
  try {
    const categoriesString = await AsyncStorage.getItem(categoriesKey);
    const categories = JSON.parse(categoriesString);
    store.dispatch(setCategoriesAction(categories));
  } catch (err) {
    throw new Error(err);
  }
}

function setAndStoreDefaultCategories() {
  const categoriesString = JSON.stringify(defaultCategories);
  AsyncStorage.setItem(categoriesKey, categoriesString);
  store.dispatch(setCategoriesAction(defaultCategories));
}

export {
  storeExercises,
  loadExercises,
  setAndStoreDefaultExercises,
  loadCategories,
  setAndStoreDefaultCategories,
};
