// Desafio 1
function compareTrue(param1,param2) {
  if (param1 === true && param2 === true) {
    return true
  }else{
    return false
  }
}

// Desafio 2
function calcArea(base,altura) {
  area = (base * altura) / 2
  return area 
}

// Desafio 3
function splitSentence(string) {
  split = string.split(' ')
  return console.log(split)   
}

// Desafio 4
function concatName() {
  // seu código aqui
}

// Desafio 5
function footballPoints(wins,ties) {
  if (wins && ties > 0 ) {
    pontos = (wins * 3) + ties
  return pontos
  }else if (wins && ties === 0){
    return pontos
  }
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
