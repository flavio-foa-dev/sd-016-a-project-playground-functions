// Desafio 1
function compareTrue(param1,param2) {
  if(param1 === param2) {
    return true;
  }else{
    return false;
  }
}

// Desafio 2
function calcArea(base,heigth) {
  let area = (base * heigth) /2;
  return area;
}

// Desafio 3
function splitSentence(sentence) {
  return sentence.split(' ');
}

// Desafio 4
function concatName(words) {
  let last = words[(words.length -1)]
  let first = words[0];
  return last + ", " + first;
}

// Desafio 5
function footballPoints(wins,ties) {
  return (wins * 3) + ties
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
