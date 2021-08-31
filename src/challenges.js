const { RuleTester } = require("eslint");

// Desafio 1
function compareTrue(boo1, boo2) {
  if (boo1 === true && boo2 === true) {
    return(true);
  } else {
    return (false);
  }
}

// Desafio 2
function calcArea(base, height) {
  area = base * height / 2;
  return (area);
}

// Desafio 3
function splitSentence(frase) {
  split = frase.split(' ');
  return (split);
}

// Desafio 4
function concatName(arr) {
  let concat = arr[arr.length - 1] + ', ' + arr[0];
  return (concat);
}

// Desafio 5
function footballPoints(wins, ties) {
  points = (wins * 3) + ties;
  return (points);
}

// Desafio 6
function highestCount(arr) {
  let n = arr[0];
  let count = 0
  for (let index = 0; index < arr.length; index += 1) {
    if (n < arr[index]) {
      n = arr[index];
    }
  }
  for (let index2 = 0; index2 < arr.length; index2 += 1) {
    if (n === arr[index2]) {
      count += 1;
    } 
  }
  return (count);
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  catDistance1 = Math.abs(cat1 - mouse);
  catDistance2 = Math.abs(cat2 - mouse);
  if (catDistance1 > catDistance2) {
    return('cat2');
  } else if (catDistance1 < catDistance2) {
    return('cat1');
  } else {
    return("os gatos trombam e o rato foge")
  }
}

// Desafio 8
function fizzBuzz(arr) {
  let frase = []
  for (let index = 0; index < arr.length; index += 1) {
    if (arr[index] % 3 === 0 && arr[index] % 5 != 0) {
      frase[index] = "fizz";
    } else if (arr[index] % 3 != 0 && arr[index] % 5 === 0) {
      frase[index] = "buzz";
    } else if (arr[index] % 3 === 0 && arr[index] % 5 === 0) {
      frase[index ]= "fizzBuzz";
    } else {
      frase[index] = "bug!";
    }
  }
  return (frase);
}

// Desafio 9
function encode(str) {
  let arr = [];
  for (let index = 0; index < str.length; index += 1) {
    if (str[index] == 'a') {
      arr[index] = 1;
    } else if (str[index] == 'e') {
      arr[index] = 2;
    } else if (str[index] == 'i') {
      arr[index] = 3;
    } else if (str[index] == 'o') {
      arr[index] = 4;
    } else if (str[index] == 'u') {
      arr[index] = 5;
    } else {
      arr[index] = str[index]
    }
  }
  return(arr.join(''));
}

function decode(str) {
  let arr = [];
  for (let index = 0; index < str.length; index += 1) {
    if (str[index] == '1') {
      arr[index] = 'a';
    } else if (str[index] == '2') {
      arr[index] = 'e';
    } else if (str[index] == '3') {
      arr[index] = 'i';
    } else if (str[index] == '4') {
      arr[index] = 'o';
    } else if (str[index] == '5') {
      arr[index] = 'u';
    } else {
      arr[index] = str[index]
    }
  }
  return(arr.join(''));
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
