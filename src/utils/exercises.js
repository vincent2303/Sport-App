const fake = 333;

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

export { getCategoryMap, fake };
