import { addIdToArrayOfObjects } from '../utils/idGenerators';

const armsExercises = [
  {
    name: 'Arms exo',
    weight: 5,
    executionNumber: 13,
    repetitionNumber: 3,
    restTime: 60,
    categoryId: 0,
  },
  {
    name: 'push up',
    weight: 15,
    executionNumber: 13,
    repetitionNumber: 4,
    restTime: 30,
    categoryId: 0,
  },
];
const torsoExercises = [
  {
    name: 'Abs',
    weight: 22,
    executionNumber: 13,
    repetitionNumber: 2,
    restTime: 90,
    categoryId: 1,
  },
  {
    name: 'Abs weight',
    weight: 22,
    executionNumber: 13,
    repetitionNumber: 4,
    restTime: 20,
    categoryId: 1,
  },
];

const legsExercises = [
  {
    name: 'Abs weight',
    weight: 22,
    executionNumber: 13,
    repetitionNumber: 4,
    restTime: 20,
    categoryId: 2,
  },
  {
    name: 'Abs weight',
    weight: 22,
    executionNumber: 13,
    repetitionNumber: 4,
    restTime: 20,
    categoryId: 2,
  },
];

const backExercises = [
  {
    name: 'Abs weight',
    weight: 22,
    executionNumber: 13,
    repetitionNumber: 4,
    restTime: 20,
    categoryId: 3,
  },
  {
    name: 'Abs weight',
    weight: 22,
    executionNumber: 13,
    repetitionNumber: 4,
    restTime: 20,
    categoryId: 3,
  },
];

addIdToArrayOfObjects([
  ...armsExercises,
  ...torsoExercises,
  ...legsExercises,
  ...backExercises,
]);

export {
  armsExercises, torsoExercises, legsExercises, backExercises,
};
