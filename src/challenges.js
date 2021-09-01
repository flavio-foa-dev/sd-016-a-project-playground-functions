/* eslint-disable sonarjs/cognitive-complexity */
/* eslint-disable sonarjs/no-one-iteration-loop */
// Desafio 1
function compareTrue(valor1, valor2) {
  if (valor1 === true && valor2 === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
  return area;
}

// Desafio 3
function splitSentence(string) {
  string = string.split(' ');
  return string;
}

// Desafio 4
function concatName(names) {
  return `${names[(names.length) - 1]}, ${names[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  let pontos = (wins * 3) + (ties * 1);
  return pontos;
}

// Desafio 6
function highestCount(values) {
  let count = 0;
  let maiorValor = -1;
  for (let index = 0; index < values.length; index += 1) {
    if (values[index] > maiorValor) {
      maiorValor = values[index];
      count = 1;
    } else if (values[index] === maiorValor) {
      count += 1;
    }
  }
  return count;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distancia = mouse;
  let disCat1 = Math.abs(distancia - cat1);
  let disCat2 = Math.abs(distancia - cat2);
  if (disCat1 < disCat2) {
    return 'cat1';
  } if (disCat1 > disCat2) {
    return 'cat2';
  }
  return 'os gatos trombam e o rato foge';
}

// Desafio 8

function fizzBuzz(numbers) {
  let array = [];
  for (let index = 0; index < numbers.length; index += 1) {
    console.log(numbers[index]);
    if (numbers[index] % 3 === 0 && numbers[index] % 5 === 0) {
      array.push('fizzBuzz');
    } else if (numbers[index] % 3 === 0) {
      array.push('fizz');
    } else if (numbers[index] % 5 === 0) {
      array.push('buzz');
    } else {
      array.push('bug!');
    }
  }
  return array;
}

// Desafio 9
// eslint-disable-next-line complexity
function encode(frase) {
  let transform = [];
  for (const key in frase) {
    if (frase[key] === 'i') {
      transform.push('3');
    } else if (frase[key] === 'e') {
      transform.push('2');
    } else if (frase[key] === 'a') {
      transform.push('1');
    } else if (frase[key] === 'o') {
      transform.push('4');
    } else if (frase[key] === 'u') {
      transform.push('5');
    } else {
      transform.push(frase[key]);
    }
  }
  return `${transform.join('')}`;
}

// eslint-disable-next-line complexity
function decode(frase) {
  let transform = [];
  for (const key in frase) {
    if (frase[key] === '3') {
      transform.push('i');
    } else if (frase[key] === '2') {
      transform.push('e');
    } else if (frase[key] === '1') {
      transform.push('a');
    } else if (frase[key] === '4') {
      transform.push('o');
    } else if (frase[key] === '5') {
      transform.push('u');
    } else {
      transform.push(frase[key]);
    }
  }
  return `${transform.join('')}`;
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
