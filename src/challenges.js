// Desafio 1
function compareTrue(param1, param2) {
  if (param1 === true && param2 === true) {
    return true;
  } else {
    return false;
  }
} 
console.log(compareTrue(true, false));

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Desafio 2
function calcArea(base, height) {
  let area = (base * height)/2;
  return area;  
}
console.log(calcArea(51, 1));

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Desafio 3
function splitSentence(testString) {
  let separaString = testString.split(/[\s,]+/);
  return separaString;
}
console.log(splitSentence("Vamo que vamo"));

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Desafio 4
function concatName(array) {
  let first = array[0];
  let last = [...array].pop();
  let resultado = [last, first];
  resultado = last + ", " + first;
  return resultado;
}

array = ['Lucas', 'Cassiano', 'Ferraz', 'Paolillo'];

console.log(concatName(array));

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Desafio 5
function footballPoints(wins, ties) {
  let victory = 3 * wins;
  let draw = 1 * ties;
  return victory + draw;
}
console.log(footballPoints(14, 8));

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Desafio 6
function highestCount() {
  
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

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
