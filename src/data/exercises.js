import { addIdToArrayOfObjects } from '../utils/idGenerators';

const armsExercises = [
  {
    name: 'Arms 1',
    weight: 5,
    executionNumber: 13,
    repetitionNumber: 3,
    restTime: 60,
    categoryId: 0,
  },
  {
    name: 'Arms 2',
    weight: 15,
    executionNumber: 13,
    repetitionNumber: 4,
    restTime: 30,
    categoryId: 0,
  },
];
const torsoExercises = [
  {
    name: 'Abs 1',
    weight: 22,
    executionNumber: 13,
    repetitionNumber: 2,
    restTime: 90,
    categoryId: 1,
  },
  {
    name: 'Abs 2',
    weight: 22,
    executionNumber: 13,
    repetitionNumber: 4,
    restTime: 20,
    categoryId: 1,
  },
];

const legsExercises = [
  {
    name: 'legs 1',
    weight: 22,
    executionNumber: 13,
    repetitionNumber: 4,
    restTime: 20,
    categoryId: 2,
  },
  {
    name: 'legs 2',
    weight: 22,
    executionNumber: 13,
    repetitionNumber: 4,
    restTime: 20,
    categoryId: 2,
  },
];

const backExercises = [
  {
    name: 'back 1',
    weight: 22,
    executionNumber: 13,
    repetitionNumber: 4,
    restTime: 20,
    categoryId: 3,
  },
  {
    name: 'back 2',
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
