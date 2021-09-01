// Desafio 1
function compareTrue(value1, value2) {
  // seu código aqui
  if (value1 === true && value2 === true) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  // retorne o calculo da area do triangulo
  // formula (base*altura) / 2
  let calculo = (base*height) / 2;
  return calculo
}

// Desafio 3
function splitSentence(string) {
  // seu código aqui
  let frase = string.split(" ")
  return frase;
}

// Desafio 4
function concatName(array) {
  // seu código aqui
  let first = array[0];
  let last = array[array.length - 1];
  let result = last.concat(", " + first)
  return result 
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  let points = wins*3 + ties
  return points;
}   
// Desafio 6
function highestCount(array) {
  // seu código aqui
  let highestNumber = array[0];
  let sum = 1;

  for (let i = 1; i < array.length; i += 1) {
    if (array[i] > highestNumber) {
      
      highestNumber = array[i];
      sum = 1;

    } else if (array[i] === highestNumber) {
      sum +=1;
    }
  }
  return sum;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  let distanciaCat1 = Math.abs(mouse - cat1);
  let distanciaCat2 = Math.abs(mouse - cat2);

  if ( distanciaCat1 < distanciaCat2) {
    return 'cat1';
  } else if (distanciaCat1 > distanciaCat2) {
    return 'cat2';
  }
    return 'os gatos trombam e o rato foge'
} // tentar com swit 

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