// Desafio 1
function compareTrue(value1, value2) {
  if (value1 === true && value2 === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(string) {
  return string.split(' ');
}

// Desafio 4
function concatName(Array) {
  for (let i = 0; i < Array.length; i += 1) {
    Array = Array[Array.length - 1] + ', ' + Array[0];
    return Array;
  }
}

// Desafio 5
function footballPoints(wins, ties) {
  let totalPoints = (wins * 3) + ties;
  return totalPoints;
}

// Desafio 6
function highestCount(array) {
  let higherNumber = array[0];
  let higherNumberTimes = [];
  for (let i = array[0]; i < array.length; i += 1) {
    if (array[i] > higherNumber) {
      higherNumber = array[i];
    }
  }
  for (let i = array[0]; i < array.length; i += 1) {
    if (array[i] === higherNumber) {
      higherNumberTimes.push(array[i]);
    }
  }
  return higherNumberTimes.length;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let cat1distance = mouse - cat1;
  let cat2distance = mouse - cat2;
  let winner = '';
  if (Math.abs(cat1distance) < Math.abs(cat2distance)) {
    winner = "cat1";
  } else if (Math.abs(cat1distance) > Math.abs(cat2distance)) {
    winner = "cat2";
  } else if (Math.abs(cat1distance) === Math.abs(cat2distance)) {
    winner = "os gatos trombam e o rato foge";
  }
  return winner;
}

// Desafio 8
function fizzBuzz(array) {
  let myArray = [];
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] % 3 === 0 && array[index] % 5 !== 0) {
      myArray.push("fizz");
    } else if (array[index] % 5 === 0 && array[index] % 3 !== 0) {
      myArray.push("buzz");
    } else if (array[index] % 3 === 0 && array[index] % 5 === 0) {
      myArray.push("fizzBuzz");
    } else if (array[index] % 3 !== 0 && array[index] % 5 !== 0) {
      myArray.push("bug!");
    }
  }
  return myArray;
}

// Desafio 9
function encode(string) {
  let newArray = string.split('');
  let newStr = [];
  for (let i = 0; i < newArray.length; i += 1) {
    let currElement = newArray[i];
    if (currElement === 'a') {
      newStr.push('1');
    } else if (currElement === 'e') {
      newStr.push('2');
    } else if (currElement === 'i') {
      newStr.push('3');
    } else if (currElement === 'o') {
      newStr.push('4');
    } else if (currElement === 'u') {
      newStr.push('5');
    } else {
      newStr.push(currElement);
    }
  }
  return newStr.join('');
}

function decode(string) {
  let newArray = string.split('');
  let newStr = [];
  for (let i = 0; i < newArray.length; i += 1) {
    let currElement = newArray[i];
    if (currElement === '1') {
      newStr.push('a');
    } else if (currElement === '2') {
      newStr.push('e');
    } else if (currElement === '3') {
      newStr.push('i');
    } else if (currElement === '4') {
      newStr.push('o');
    } else if (currElement === '5') {
      newStr.push('u');
    } else {
      newStr.push(currElement);
    }
  }
  return newStr.join('');
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
