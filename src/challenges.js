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
  let area = (base * altura) / 2
  return area 
}

// Desafio 3
function splitSentence(string) {
 let split = string.split(' ')
  return console.log(split)   
}

// Desafio 4
function concatName(param3) {
  let concatenacao =  param3[-1] + param3[0]
  return concatenacao
}

// Desafio 5
function footballPoints(wins,ties) {
  let pontos = 0
  if (wins && ties > 0 ) {
   pontos = (wins * 3) + ties
  return pontos
  }else if (wins && ties === 0){
    return pontos
  }
}

// Desafio 6
function highestCount(array) {
  let maiornumero = 0
  let repeticoes = 0
  for (index = 0, index <= array.length, index +=1;) {
    if ( array[index] > maiornumero ) {
      maiornumero = array[index]
      repeticoes + 1
    }else if (array[index] = maiornumero ){
      repeticoes += 1
    } return maiornumero , repeticoes
  }
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
