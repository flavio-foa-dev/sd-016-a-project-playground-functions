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
function splitSentence(stringEx3) {
  let arrayEx3 = stringEx3.split(' '); // https://www.horadecodar.com.br/2020/11/11/como-transformar-string-em-array-de-caracteres-com-javascript/
  return arrayEx3;
}

// Desafio 4
function concatName(arrayEx5) { // https://eslint.org/docs/rules/prefer-template
  return `${arrayEx5[arrayEx5.length - 1]}, ${arrayEx5[0]}`; // https://www.guj.com.br/t/gostaria-de-saber-como-posso-pegar-o-ultimo-elemento-de-um-array-em-c/344923
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + (ties * 1);
}

// Desafio 6
function highestCount(arrayEx6) {
  let maior = Math.max.apply(null, arrayEx6); // https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/max
  let contadorMaiorNumero = 0;
  for (let posicao = 0; posicao < arrayEx6.length; posicao += 1) {
    if (arrayEx6[posicao] === maior) {
      contadorMaiorNumero += 1;
    }
  }
  return contadorMaiorNumero;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distancia1 = Math.abs(mouse - cat1);
  let distancia2 = Math.abs(mouse - cat2);
  if (distancia1 === distancia2) {
    return 'os gatos trombam e o rato foge';
  }
  return cat1 > cat2 ? 'cat2' : 'cat1'; // https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Expressions_and_operators
}

// Desafio 8
function fizzBuzz(arrayEx8) {
  for (let posicao in arrayEx8) {
    if (arrayEx8[posicao] % 3 === 0 && arrayEx8[posicao] % 5 === 0) {
      arrayEx8[posicao] = 'fizzBuzz';
    }
    else if (arrayEx8[posicao] % 3 === 0) {
      arrayEx8[posicao] = 'fizz';
    }
    else if (arrayEx8[posicao] % 5 === 0) {
      arrayEx8[posicao] = 'buzz';
    }
    else {
      arrayEx8[posicao] = 'bug!';
    }
  }
  return arrayEx8;
}

// Desafio 9
function encode(stringEx9) {
  let novoAray = stringEx9.split('');
  for (let posicao = 0; posicao < novoAray.length; posicao += 1) {
    if (novoAray[posicao] === 'a') {
      novoAray[posicao] = '1';
    }
    if (novoAray[posicao] === 'e') {
      novoAray[posicao] = '2';
    }
    if (novoAray[posicao] === 'i') {
      novoAray[posicao] = '3';
    }
    if (novoAray[posicao] === 'o') {
      novoAray[posicao] = '4';
    }
    if (novoAray[posicao] === 'u') {
      novoAray[posicao] = '5';
    }
  }
  stringEx9 = novoAray.join(''); // https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/join
  return stringEx9;
}

function decode(stringEx9A) {
  let novoAray = stringEx9A.split('');
  for (let posicao = 0; posicao < novoAray.length; posicao += 1) {
    if (novoAray[posicao] === '1') {
      novoAray[posicao] = 'a';
    }
    else if (novoAray[posicao] === '2') {
      novoAray[posicao] = 'e';
    }
    if (novoAray[posicao] === '3') {
      novoAray[posicao] = 'i';
    }
    if (novoAray[posicao] === '4') {
      novoAray[posicao] = 'o';
    }
    if (novoAray[posicao] === '5') {
      novoAray[posicao] = 'u';
    }
  }
  stringEx9A = novoAray.join(''); // https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/join
  return stringEx9A;
}

console.log(decode('h2ll4'));

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
