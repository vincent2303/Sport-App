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

// get the weight value
function getWeight(exercise) {
  const { type, value } = exercise.weight;
  if (type === 'body') {
    return 'body';
  }
  return value;
}

// return the weight string
function getWeightString(exercise) {
  return exercise.weight.type === 'body' ? 'body' : `${getWeight(exercise)} Kg`;
}

function getRepString(exercise) {
  return `${exercise.repetitionNumber} Rep`;
}

function getRestString(exercise) {
  const { restTime } = exercise;
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
