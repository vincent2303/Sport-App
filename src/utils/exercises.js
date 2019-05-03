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
  return `${restTime}s`;
}

function generateCategoriesObject(categoriesArray) {
  const categories = {};
  categoriesArray.forEach((category) => {
    categories[category.id] = category;
  });
  return categories;
}

function getCategoryNameToCategoryIdMap(categories) {
  const categoryNameToCategoryIdMap = new Map();
  Object.keys(categories).forEach((categoryId) => {
    categoryNameToCategoryIdMap.set(categories[categoryId].name, categoryId);
  });
  return categoryNameToCategoryIdMap;
}

/* eslint no-param-reassign: 0 */
function assignCategoryIdToExerciseArray({ assignment, categories }) {
  const categoryNameToCategoryIdMap = getCategoryNameToCategoryIdMap(categories);
  Object.keys(assignment).forEach((categoryName) => {
    const exerciseArray = assignment[categoryName];
    const categoryId = categoryNameToCategoryIdMap.get(categoryName);
    exerciseArray.forEach((exercise) => {
      exercise.categoryId = categoryId;
    });
  });
}

export {
  getExercisePerCategoryIdMap,
  getWeightString,
  getRepString,
  getRestString,
  generateCategoriesObject,
  assignCategoryIdToExerciseArray,
};
