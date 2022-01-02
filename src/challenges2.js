// Desafio 10
function techList(techs, name) {
  if (techs.length === 0) return 'Vazio!';

  let list = [];

  techs.sort();
  for (let value of techs) {
    list.push({ tech: value, name });
  }

  return list;
}

// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if (lineA + lineB < lineC || Math.abs(lineA - lineB) > lineC) {
    return false;
  }
  return true;
}

// Desafio 13
function hydrate(string) {
  let result = /[1-9]/g;
  let sum = string.match(result);
  let water = 0;

  for (let value of sum) {
    water += parseInt(value, 6);
  }

  if (water === 1) return `${water} copo de água`;
  return `${water} copos de água`;
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
