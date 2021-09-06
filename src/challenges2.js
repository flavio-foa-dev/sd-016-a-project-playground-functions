// Desafio 10
function techList(array, name) {
  let objetoFinal = [];
  if (array.length <= 0) {
    return 'Vazio!';
  }
  array = array.sort();
  for (let techno of array) {
    objetoFinal.push({ tech: techno, name });
  }
  return objetoFinal;
}

// Desafio 11
// eslint-disable-next-line complexity
function generatePhoneNumber(array) {
  let x = 0;
  let numero = array.slice();
  if (numero.length !== 11) return 'Array com tamanho incorreto.';
  for (let index = 0; index < numero.length; index += 1) {
    numero.sort();
    if (numero[index] === numero[index + 1] && numero[index + 1] === numero[index + 2]) {
      x = 1;
    } if (numero[index] < 0 || numero[index] > 9 || x === 1) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }
  let ddd ="(" + array[0] + array[1] + ")";
  let firstHalf = " " + array[2] + array[3] + array[4] + array[5] + array[6];
  let secondHalf = '-' + array[7] + array[8] + array[9] + array[10];
  return ddd + firstHalf + secondHalf;
}

// Desafio 12
// eslint-disable-next-line complexity
function triangleCheck(lineA, lineB, lineC) {
  if (lineA > lineB + lineC || lineB > lineA + lineC || lineC > lineA + lineB) {
    return false;
  // eslint-disable-next-line max-len
  } if (lineA < Math.abs(lineB - lineC) || lineB < Math.abs(lineA - lineC) || lineC < Math.abs(lineB - lineA)) {
    return false;
  } return true;
  // seu código aqui
}
console.log(triangleCheck(10, 14, 8));

// Desafio 13

function hydrate(str) {
  let numbers = str.match(/\d+/g).map(Number);
  let glassOfWater = 0;
  for (let index = 0; index < numbers.length; index += 1) {
    glassOfWater += numbers[index];
  }
  if (glassOfWater === 1) {
    return `${glassOfWater} copo de água`;
  } return `${glassOfWater} copos de água`;
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
