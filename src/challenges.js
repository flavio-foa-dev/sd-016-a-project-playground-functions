// Desafio 1
function compareTrue(comp1, comp2) 
{
  if (comp1 === true && comp2 === true)
    {
      return true;
    }
  else
    {
      return false;
    }  
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(phrase) {
  return phrase.split(" ");
}

// Desafio 4
function concatName(string) {
 return string[string.length -1] + ", " + string[0];
}

// Desafio 5
function footballPoints(wins, ties) {
  let sum = 0;
  sum = (wins * 3) + (ties * 1);
  return sum;
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
