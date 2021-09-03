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

let mouse = 10;
let cat1 = 3;
let cat2 = 3;

let cat1distance = cat1 - mouse;
let cat2distance = cat2 - mouse;
let winner = ''; 
console.log
if (cat1distance < cat2distance) {
  winner = "cat1";
} else if (cat1distance > cat2distance) {
  winner = "cat2";
} else if (cat1distance === cat2distance) {
  winner = "os gatos trombam e o rato foge";
}
console.log(winner);

let a = 0;
let b = 3;
let c = 2;

let x = a - b;
let y = a - c;

console.log(Math.abs(b))
