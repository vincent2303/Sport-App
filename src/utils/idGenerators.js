/* eslint no-param-reassign: 0 */

const idCharacters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
const idLength = 16;
const idCharactersLength = idCharacters.length;

function randomInt(maxNotIncluded) { return Math.floor(Math.random() * maxNotIncluded); }

function idGenerator() {
  let id = '';
  for (let index = 0; index < idLength; index += 1) {
    const letter = idCharacters[randomInt(idCharactersLength)];
    id += letter;
  }
  return id;
}

function addIdToArrayOfObjects(array) {
  array.forEach((object) => {
    object.id = idGenerator();
  });
}

export { idGenerator, addIdToArrayOfObjects };
