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
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
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
