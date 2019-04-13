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
    const exercises = await AsyncStorage.getItem(exercisesKey);
    return exercises;
  } catch (err) {
    throw new Error(err);
  }
}

export { storeExercises, getExercises };
