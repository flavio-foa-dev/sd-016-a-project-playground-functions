// Desafio 1
function compareTrue(a, b) {
  if (a && b) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(s) {
  s += " ";
  let sentenceSplited = [];
  let word = "";
  for (let i = 0; i < s.length + 1; i += 1) {
    if (s[i] !== " ") {
      word += s[i];
    } else {
      sentenceSplited.push(word);
      word = "";
    }
  }
  return sentenceSplited;
}

// Desafio 4
function concatName(arr) {
  return arr[arr.length - 1] + ", " + arr[0];
}

// Desafio 5
function footballPoints(wins, ties) {
  let points = 0;
  points += wins * 3;
  points += ties;
  return points;
}

// Desafio 6
function highestCount(arr) {
  let counter = 0;
  let higher = arr[0];
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] > higher) {
      higher = arr[i];
      counter = 1;
    } else if (higher === arr[i]) {
      counter += 1;
    }
  }
  return counter;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if (Math.abs(mouse - cat1) < Math.abs(mouse - cat2)) {
    return "cat1";
  } else if (Math.abs(mouse - cat2) < Math.abs(mouse - cat1)) {
    return "cat2";
  } else if (Math.abs(mouse - cat2) === Math.abs(mouse - cat1)) {
    return "os gatos trombam e o rato foge";
  }
}

// Desafio 8
function fizzBuzz(arr) {
  let fizzBuzz = [];
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] % 3 === 0 && arr[i] % 5 !== 0) {
      fizzBuzz.push("fizz");
    } else if (arr[i] % 5 === 0 && arr[i] % 3 !== 0) {
      fizzBuzz.push("buzz");
    } else if (arr[i] % 5 === 0 && arr[i] % 3 === 0) {
      fizzBuzz.push("fizzBuzz");
    } else if (arr[i] % 5 !== 0 && arr[i] % 3 !== 0) {
      fizzBuzz.push("bug!");
   
    }
  }
  return fizzBuzz;
}

// Desafio 9
function encode(s) {
  let message = "";
  for (let i = 0; i < s.length; i += 1) {
    if (s[i] === 'a') {
      message += '1';
    } else if (s[i] === 'e') {
      message += '2';
    } else if (s[i] === 'i') {
      message += '3';
    } else if (s[i] === 'o') {
      message += '4';
    } else if (s[i] === 'u') {
      message += '5';
    } else {
      message += s[i];
    }
  }
  return message;
}

function decode(s) {
  let message = "";
  for (let i = 0; i < s.length; i += 1) {
    if (s[i] === '1') {
      message += 'a';
    } else if (s[i] === '2') {
      message += 'e';
    } else if (s[i] === '3') {
      message += 'i';
    } else if (s[i] === '4') {
      message += 'o';
    } else if (s[i] === '5') {
      message += 'u';
    } else {
      message += s[i];
    }
  }
  return message;
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
