
import AsyncStorage from '@react-native-community/async-storage';
import { loadExercises, setAndStoreDefaultExercises } from './exercises';

const firstConnectionKey = 'AimHighIsFirstConnection';

// load the data and set the result in redux
async function loadCoreData() {
  await Promise.all([
    loadExercises(),
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
  const firstConnection = isFirstConnection();
  if (firstConnection) {
    setAndStoreDefaultExercises();
    markFirstConnection();
  } else {
    await loadCoreData();
  }
}
