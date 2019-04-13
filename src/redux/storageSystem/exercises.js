import AsyncStorage from '@react-native-community/async-storage';

const exercisesKey = 'exercisesKey';

async function storeExercises(exercises) {
  const exerciseString = JSON.stringify(exercises);
  try {
    await AsyncStorage.setItem(exercisesKey, exerciseString);
  } catch (err) {
    throw new Error(err);
  }
}

async function getExercises() {
  try {
    const exercisesString = await AsyncStorage.getItem(exercisesKey);
    return JSON.parse(exercisesString);
  } catch (err) {
    throw new Error(err);
  }
}

export { storeExercises, getExercises };
