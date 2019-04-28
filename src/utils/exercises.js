// input exercises array; output map of exercises by category
function getCategoryMap(exercises) {
  const exerciseMap = {};
  exercises.forEach((exercise) => {
    const { category } = exercise;
    if (exerciseMap[category]) {
      exerciseMap[category].push(exercise);
    } else {
      exerciseMap[category] = [exercise];
    }
  });
  return exerciseMap;
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
  getCategoryMap, getWeightString, getRepString, getRestString,
};
