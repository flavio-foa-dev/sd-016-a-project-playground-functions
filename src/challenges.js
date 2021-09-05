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
function footballPoints(wins, ties) {
  let winsPoints = wins * 3;
  let tiesPoints = ties * 1;
  let totalPoints = winsPoints + tiesPoints;
  return totalPoints;
}

// Desafio 6
function highestCount(numeros) {
  let maximoNumero = numeros[0] - 1;
  let contarNumero = 0;
  for (let i in numeros) {
    if (maximoNumero < numeros[i]) {
      maximoNumero = numeros[i];
      contarNumero = 1;
    } else if (maximoNumero === numeros[i]) {
      contarNumero += 1;
    }
  }
  return contarNumero;
}

console.log(highestCount([-2, -2, -1]));

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
