// Desafio 10
function techList(array, name1) {
  if (array.length === 0) {
    return 'Vazio!';
  }
  array = array.sort();
  let returnArray = [];
  for (let i = 0; i < array.length; i += 1) {
    let info = {
      tech: array[i],
      name: name1,
    };
    returnArray.push(info);
  }
  return returnArray;
}

// Desafio 11
function formatNumber(array) {
  let phoneNumber = array.slice();

  phoneNumber.splice(0, 0, '(');
  phoneNumber.splice(3, 0, ') ');
  phoneNumber.splice(9, 0, '-'); // add na posição 9, 0 para não remover nada, adiciona a string '-'

  return phoneNumber;
}

function countInArray(array, number) {
  return array.filter((elemento) => elemento === number).length;
  // retorna um array com todos os elementos number e depois pega o length dele
}

function countAndTest(array) {
  for (let i = 0; i < array.length; i += 1) {
    if (countInArray(array, array[i]) >= 3 || (array[i] < 0 || array[i] > 9)) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }
  return true;
}

function generatePhoneNumber(array) {
  let phoneNumber = [];
  if (array.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  phoneNumber = formatNumber(array);
  if (countAndTest(array) === true) {
    return phoneNumber.join('');
  }
  return countAndTest(array);
}

// Desafio 12

function checkSide(lineA, lineB, lineC) {
  if (lineA < lineB + lineC && lineA > Math.abs(lineB - lineC)) {
    return true;
  }
  return false;
}

function triangleCheck(lineA, lineB, lineC) {
  let count = 0;
  if (checkSide(lineA, lineB, lineC) === true) {
    count += 1;
  }
  if (checkSide(lineB, lineA, lineC) === true) {
    count += 1;
  }
  if (checkSide(lineC, lineA, lineB) === true) {
    count += 1;
  }
  if (count === 3) {
    return true;
  }
  return false;
}

// Desafio 13

function match(string) {
  let numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
  let matches = [];
  for (let i = 0; i < string.length; i += 1) {
    if (numbers.includes(string[i]) === true) {
      matches.push(string[i]);
    }
  }
  return matches;
}

function hydrate(string) {
  string = string.split('');
  // cria uma array com todos os numeros encontrados -> numeros estarão no tipo string
  let sum = 0;
  let matches = [];

  matches = match(string);

  for (let i = 0; i < matches.length; i += 1) {
    sum += parseInt(matches[i], 10); // -> sem o 10 dá erro no lint, o segundo parametro significa a base que nesse caso é 10(decimal)
    // passa de string para number -> https://www.alura.com.br/artigos/convertendo-string-para-numero-em-javascript?gclid=Cj0KCQjwpreJBhDvARIsAF1_BU2BKYU6f6ReQl7b1z1TH6HDzqJ7xsHremu8uaTEcvL1hkzuWM9gOjYaAh1DEALw_wcB
  }
  if (sum === 1) {
    return `${sum} copo de água`;
  }
  return `${sum} copos de água`;
}
module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
