// Desafio 1
function compareTrue(valor1, valor2) {
  if (valor1 === true && valor2 === true) {
    return true;
  } return false;
}
// Desafio 2
function calcArea(base, altura) {
  let area = (base * altura) / 2;
  return area;
}

// Desafio 3
function splitSentence(caract) {
  let arraycaract = caract.split(' ');
  return arraycaract;
}

// Desafio 4
function concatName(arrayCaract) {
  let primArray = arrayCaract[0];
  let ultArray = arrayCaract[arrayCaract.length - 1];
  let string = ultArray.concat(', ', primArray);
  return string;
}

// Desafio 5
function footballPoints() {
  // seu código aqui
}

// Desafio 6
function highestCount() {
  // seu código aqui
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
