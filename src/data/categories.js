import { addIdToArrayOfObjects } from '../utils/idGenerators';
import { generateCategoriesObject } from '../utils/exercises';

const defaultCategoriesArry = [
  { name: 'Arms' },
  { name: 'Torso' },
  { name: 'Legs' },
  { name: 'Back' },
];

addIdToArrayOfObjects(defaultCategoriesArry);

export default generateCategoriesObject(defaultCategoriesArry);
