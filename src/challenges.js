// Desafio 1
function compareTrue(number1, number2) {
  if (number1 === true && number2 === true) {
    return true
  } else {
    return false
  }
}

// Desafio 2
function calcArea(base, height) {
  return base * height / 2
}

// Desafio 3
function splitSentence(string) {
  let array = []
  array = string.split(' ')
  return array
}

// Desafio 4'
function concatName(array) {
  let resultado = []
  resultado = array[array.length - 1] + ', ' + array[0];
  return resultado
}

// Desafio 5
function footballPoints(wins, ties) {
  let pointWins = wins * 3;
  let resultado = pointWins + ties;
  return resultado
}

// Desafio 6  : erro
function highestCount(array) {
  for (let index = 0; index < array.length; index += 1) {
    let maxNumber = array[0];
    if (array[index] > maxNumber) {
      maxNumber = array[index];
      let resultado = maxNumber === array[index]
      return resultado
    }
  }
}

// Desafio 7
function catAndMouse(mause, cat1, cat2) {
  let distance1 = cat1 - mause;
  let distance2 = cat2 - mause;
  if (distance1 < distance2) {
    return 'cat1'
  } else if (distance1 > distance2) {
    return 'cat2'
  } else {
    return "os gatos trombam e o rato foge."
  }
}
console.log(catAndMouse(1,4,5))
// Desafio 8  erro.
function fizzBuzz(number) {
  let valory = []
  for (let index = 0; index < number.length; index += 1) {
    if  (number[index] % 3 === 0 && number[index] % 5 === 0){
      valory.push("fizz");
    } else if (number[index] % 5 === 0) {
      valory.push("buzz");
    }  else if(number[index] % 3 === 0){
      valory.push("fizzBuzz");
    } else {
      valory.push("bug !");
    }
    return valory
  } 
}


console.log(fizzBuzz([2, 15, 7, 9, 45]))
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
