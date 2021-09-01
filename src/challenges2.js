// Desafio 10
function criaNewObject(arrayTech, name) {
  const newCollectionArrayObject = [];
  for (let index = 0; index < arrayTech.length; index += 1) {
    const objectCollection = { tech: '', name: '' };
    objectCollection.tech = arrayTech[index];
    objectCollection.name = name;

    newCollectionArrayObject.push(objectCollection);
  }
  return newCollectionArrayObject;
}

function techList(arrayTech, name) {
  arrayTech = arrayTech.sort();
  const newCollectionArrayObject = criaNewObject(arrayTech, name);
  if (arrayTech.length === 0) {
    return 'Vazio!';
  }
  return newCollectionArrayObject;
}

// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
}

// Desafio 12
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
