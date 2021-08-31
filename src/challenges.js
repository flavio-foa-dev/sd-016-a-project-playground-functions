// Desafio 1
function compareTrue(num1, num2) {
  if (num1 === true && num2 === true) {
    return true
  } else {
    return false
  }
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2
}

// Desafio 3
function splitSentence(String) {
  return String.split(' ')
}

// Desafio 4
function concatName(arrays) {
  nomes = arrays[arrays.length -1] + ', ' + arrays[0]
  return nomes
}
// Desafio 5
function footballPoints(wins, ties) {
  wins = wins * 3
  ties = ties * 1
  return (wins + ties);
}

// Desafio 6
function highestCount(numeros) {
  x = 0
  for (let index = 0; index <= numeros.length; index++)
    // Math.max não funciona com arrays, usar apply!!!!
    // Utilizar Null caso não haja um valor global!!!!
    if (numeros[index] == Math.max.apply(null, numeros)) {
      x += 1
  }
  return (x)
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  switch(x) {
    
  }
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
