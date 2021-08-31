// Desafio 1
function compareTrue(value1, value2) {
  // seu código aqui  Iniciando projeto
  if (value1 === true && value2 === true){
    return(true);
  } else {
    return(false);
  }
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  area = (base*height)/2;
  return(area);
}

// Desafio 3
function splitSentence(string) {
  // seu código aqui
  let splits = string.split(" ");
  return(splits)
}

// Desafio 4
function concatName(names) {
  // seu código aqui
  
  lastName = names[names.length - 1];
  firstName = names[0];

  let lastAndFirstNames = [lastName , firstName];

  return(lastAndFirstNames[0] + ', ' + lastAndFirstNames[1]);
}

// Desafio 5
function footballPoints(wins,ties) {
  // seu código aqui

  pointWin = wins*3
  pointTie = ties*1

  sum = pointWin + pointTie

  return(sum)
  
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
