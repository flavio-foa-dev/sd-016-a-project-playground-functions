// Desafio 1
function compareTrue(a, b) {
  return a && b;
}
// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
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
  let maxNumber = Math.max.apply(null, numbersArray)
  let maxNumberCount = 0;
  for (index = 0; index < numbersArray.length; index += 1) {
    if (numbersArray[index] === maxNumber) {
      maxNumberCount += 1;
    }
  }
  return maxNumberCount; 
}
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
function encode(message) {
  let encodedArray = [];
  for (let key of message) {
    if (key === "a") {
      encodedArray.push("1");
    } else if (key === "e") {
      encodedArray.push("2")
    } else if (key === "i") {
      encodedArray.push("3")
    } else if (key === "o") {
      encodedArray.push("4")
    } else if (key === "u") {
      encodedArray.push("5")
    } else {
      encodedArray.push(key)
    }
  }
  return encodedArray.join("")
}
function decode(message) {
  let decodedArray = [];
  for (let key of message) {
    if (key === "1") {
      decodedArray.push("a");
    } else if (key === "2") {
      decodedArray.push("e")
    } else if (key === "3") {
      decodedArray.push("i")
    } else if (key === "4") {
      decodedArray.push("o")
    } else if (key === "5") {
      decodedArray.push("u")
    } else {
      decodedArray.push(key)
    }
  }
  return decodedArray.join("")
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
