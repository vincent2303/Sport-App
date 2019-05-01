
import AsyncStorage from '@react-native-community/async-storage';
import {
  loadExercises,
  setAndStoreDefaultExercises,
  loadCategories,
  setAndStoreDefaultCategories,
} from './exercises';

const firstConnectionKey = 'AimHighIsFirstConnection';

// load the data and set the result in redux
async function loadCoreData() {
  await Promise.all([
    loadExercises(),
    loadCategories(),
  ]);
}

async function isFirstConnection() {
  const alreadyConnected = await AsyncStorage.getItem(firstConnectionKey);
  return !alreadyConnected;
}

async function markFirstConnection() {
  AsyncStorage.setItem(firstConnectionKey, 'not first connection');
}

export default async function initApp() {
  const firstConnection = await isFirstConnection();
  if (firstConnection) {
    setAndStoreDefaultExercises();
    setAndStoreDefaultCategories();
    markFirstConnection();
  } else {
    await loadCoreData();
  }
}
