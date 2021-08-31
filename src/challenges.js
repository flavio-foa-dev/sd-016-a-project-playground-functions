// Desafio 1
function compareTrue(value1, value2) {
  return value1 && value2;  // compara os dois valores boleanos
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2; // calcula a area de um triangulo
}

// Desafio 3
function splitSentence(string) {
  return string.split(' '); // divide uma string quando tem espaços
}

// Desafio 4
function concatName(array) {
  return array[array.length - 1] + ', ' + array[0]; // concatena o ultimo e o primeiro
}

// Desafio 5
function footballPoints(wins, ties) {
  return 3 * wins + ties;  // retorna 3 pontos para cada vitoria e 1 ponto para cada empate
}

// Desafio 6
function highestCount(someArray) {

  function highestNumber(array) { // descobre o maior numero
    let max = array[0];
    for (let i = 0; i < array.length; i += 1) {
      if (array[i] >= max) {
        max = array[i];
      }
    }
    return max;
  }

  let max = highestNumber(someArray);

  let count = 0;
  
  for (let i = 0; i < someArray.length; i += 1) {
    if (someArray[i] == max) {
      count += 1;
    }
  }

  return count;

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
