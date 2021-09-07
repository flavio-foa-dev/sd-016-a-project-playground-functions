// Desafio 1
function compareTrue(value1, value2) {
  if (value1 === true && value2 === true) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
  return area;
}

// Desafio 3
function splitSentence(sentence) {
  let words = sentence.split(' ');
  return words;
}

// Desafio 4
function concatName(arrayNames) {
  let lastName = arrayNames[arrayNames.length - 1];
  let firstName = arrayNames[0];
  let stringNames = lastName + ', ' + firstName;
  return stringNames;
}

// Desafio 5
function footballPoints(wins, ties) {
  let victoryPoints = wins * 3;
  let tiePoints = ties;
  let totalPoints = victoryPoints + tiePoints;
  return totalPoints;
}

// Desafio 6
function highestCount(arrayNumbers) {
  let highestNumber = arrayNumbers[0];
  let repetitions = 0;
  for (let i = 0; i < arrayNumbers.length; i += 1) {
    if (arrayNumbers[i] > highestNumber) {
      highestNumber = arrayNumbers[i];
      repetitions = 1;
    } else if (arrayNumbers[i] === highestNumber)
      repetitions += 1;
  }
  return repetitions;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if (Math.abs(mouse - cat1) < Math.abs(mouse - cat2)) {
    return "cat1";
  } else if (Math.abs(mouse - cat1) > Math.abs(mouse - cat2)) {
    return "cat2";
  } else {
    return "os gatos trombam e o rato foge";
  }
}

// Desafio 8
function fizzBuzz(arrayNumbers) {
  let newArray= [];
  for (let i = 0; i < arrayNumbers.length; i += 1) {
    if (arrayNumbers[i] % 3 === 0) {
      newArray.push("fizz");
    } else if (arrayNumbers[i] % 5 === 0) {
      newArray.push("buzz");
    } else if (arrayNumbers[i] % 3 === 0 && arrayNumbers[i] % 5 === 0){
      newArray.push("fizzBuzz");
    } else {
      newArray.push("bug!");
    }
  }
  return newArray;
}

// Desafio 9
function encode(mySentence) {
  let encodedArray = [];
  for (let i = 0; i < mySentence.length; i += 1) {
    if (mySentence[i] === "a") {
      encodedArray.push("1");
    } else if (mySentence[i] === "e") {
      encodedArray.push("2");
    } else if (mySentence[i] === "i") {
      encodedArray.push("3");
    } else if (mySentence[i] === "o") {
      encodedArray.push("4");
    } else if (mySentence[i] === "u") {
      encodedArray.push("5");
    } else {
      encodedArray.push(mySentence[i]);
    }
  }
  return encodedArray.join('');
}

function decode(encodedSentence) {
  let decodedArray = [];
  for (let i = 0; i < encodedSentence.length; i += 1) {
    if (encodedSentence[i] === "1") {
      decodedArray.push("a");
    } else if (encodedSentence[i] === "2") {
      decodedArray.push("e");
    } else if (encodedSentence[i] === "3") {
      decodedArray.push("i");
    } else if (encodedSentence[i] === "4") {
      decodedArray.push("o");
    } else if (encodedSentence[i] === "5") {
      decodedArray.push("u");
    } else {
      decodedArray.push(encodedSentence[i]);
    }
  }
  return decodedArray.join('');
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