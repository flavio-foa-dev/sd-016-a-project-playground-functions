// Desafio 1
function compareTrue(a, b) {
  if (a === true && b === true) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  let triangleArea = (base * height) / 2;
  return triangleArea
}

// Desafio 3
function splitSentence(phrase) {
  let transformInToArray = phrase.split(" ");
  return transformInToArray;
}
// Desafio 4
function concatName(array) {
  let firstName = [];
  let lastName = [];
  for (index = 0; index < array.length; index += 1) {
    if (index == 0) {
      firstName.push(array[index])
    } else if(index == (array.length) - 1) {
      lastName.push(array[index])
    }
  }
  return lastName +", " +  firstName
}
// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + ties;
}
// Desafio 6
function highestCount(numbersArray) {
  let numberCount = 1;
  numbersArray.sort()
  console.log(numbersArray)
  for (index = 1; index < numbersArray.length; index += 1) {
    if (Math.abs(numbersArray[index]) === Math.abs(numbersArray[index - 1])) {
      numberCount += 1;
    } if (numbersArray[index] > numbersArray[index - 1]) {
      numberCount = 1;
    }
  }
  return numberCount;
}
console.log(highestCount([-2, -1, -2]))
console.log(highestCount([0, 0, 0]))
console.log(highestCount([1, 9, 2, 3, 9, 5, 7]))
console.log(highestCount([0, 4, 4, 4, 9, 2, 1]))
// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let cat1position = Math.abs(cat1 - mouse)
  let cat2position = Math.abs(cat2 - mouse)
  if (cat1position > cat2position) {
    return "cat2";
  } else if (cat1position < cat2position) {
    return "cat1";
  } else {
    return "os gatos trombam e o rato foge";
  }
  }
// Desafio 8
function fizzBuzz(numbersArray) {
  let namesArray = [];
  for (index = 0; index < numbersArray.length; index += 1) {
    if (numbersArray[index] % 3 === 0 && numbersArray[index] % 5 !== 0) {
      namesArray.push("fizz");
    } else if (numbersArray[index] % 5 === 0 && numbersArray[index] % 3 !== 0) {
      namesArray.push("buzz");
    } else if (numbersArray[index] % 3 === 0 && numbersArray[index] % 5 === 0) {
      namesArray.push("fizzBuzz");
    } else {
      namesArray.push("bug!");
    }
  }
  return namesArray;
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
