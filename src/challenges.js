// Desafio 1
function compareTrue(firstParameter,secondParameter){

  if(firstParameter === true && secondParameter === true){
   return firstParameter;
  }else{
    return false;
  }
}
// Desafio 2
function calcArea(base,height) {

  let area = (base * height)/2;

  return area;
}

// Desafio 3
function splitSentence(string) {

  let splitedString = string.split(' ');

  return splitedString

}

// Desafio 4
function concatName(names) {
  let firstName = names[0];
  let lastName = names[names.length - 1] + ", ";
  
  let concatedNames = lastName.concat(firstName);

  return concatedNames;
  
}

// Desafio 5
function footballPoints(wins, ties) {
  let win = wins;
  let tie = ties;

  let totalPoints = (win * 3) + tie;

  return totalPoints;
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
}