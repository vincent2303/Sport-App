// input exercises array; output map of exercises by category
function getExercisePerCategoryIdMap({ exercises, categories }) {
  const categoryIdArray = Object.keys(categories);
  const exercisePerCategoryIdMap = {};
  categoryIdArray.forEach((categoryId) => {
    exercisePerCategoryIdMap[categoryId] = [];
  });
  exercises.forEach((exercise) => {
    exercisePerCategoryIdMap[exercise.categoryId].push(exercise);
  });
  return exercisePerCategoryIdMap;
}

// return the weight string
function getWeightString(weight) {
  if (!weight) {
    return 'body';
  }
  return `${weight} Kg`;
}

function getRepString(repetitionNumber) {
  return `${repetitionNumber} Rep`;
}

function getRestString(restTime) {
  if (restTime < 60) {
    return `${restTime}s`;
  }
  const minuteValue = Math.floor(restTime / 60);
  const secondeValue = restTime % 60;
  if (secondeValue === 0) {
    return `${minuteValue}s`;
  }
  return `${minuteValue}m ${secondeValue}s`;
}

export {
  getExercisePerCategoryIdMap, getWeightString, getRepString, getRestString,
};
