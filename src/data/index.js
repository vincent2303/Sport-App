import {
  armsExercises, torsoExercises, legsExercises, backExercises,
} from './exercises';
import defaultCategories from './categories';
import { assignCategoryIdToExerciseArray } from '../utils/exercises';

assignCategoryIdToExerciseArray({
  assignment: {
    Arms: armsExercises,
    Torso: torsoExercises,
    Legs: legsExercises,
    Back: backExercises,
  },
  categories: defaultCategories,
});

const defaultExercises = [
  ...armsExercises,
  ...torsoExercises,
  ...legsExercises,
  ...backExercises,
];

export {
  defaultExercises,
  defaultCategories,
};
