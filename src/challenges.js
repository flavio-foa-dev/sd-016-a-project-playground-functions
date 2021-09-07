// Desafio 1
const compareTrue = (a, b) => a === true && b === true;
// Desafio 2
const calcArea = (base, height) => (base * height) / 2;
// Desafio 3
const splitSentence = (str) => str.split(' ');
// Desafio 4
const concatName = (arr) => `${arr[arr.length - 1]}, ${arr[0]}`;
// Desafio 5
const footballPoints = (wins, ties) => wins * 3 + ties * 1;
// Desafio 6
function highestCount(arr) {
  let maxNumber = arr[0];
  let counter = 0;
  arr.forEach((el) => {
    if (el > maxNumber) {
      maxNumber = el;
    }
  });
  arr.forEach((el) => {
    if (el === maxNumber) {
      counter += 1;
    }
  });
  return counter;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distac1 = mouse - cat1;
  let distac2 = mouse - cat2;
  if (cat1 > mouse) {
    distac1 = cat1 - mouse;
  }
  if (cat2 > mouse) {
    distac2 = cat2 - mouse;
  }
  if (distac1 < distac2) {
    return 'cat1';
  }
  if (distac1 > distac2) {
    return 'cat2';
  }
  return 'os gatos trombam e o rato foge';
}

// Desafio 8
const printFizz = (arr, index, newArr) => {
  if (arr[index] % 3 === 0 && arr[index] % 5 !== 0) {
    newArr.push('fizz');
  }
};
const printBuzz = (arr, index, newArr) => {
  if (arr[index] % 5 === 0 && arr[index] % 3 !== 0) {
    newArr.push('buzz');
  }
};
const printBug = (arr, index, newArr) => {
  if (arr[index] % 5 !== 0 && arr[index] % 3 !== 0) {
    newArr.push('bug!');
  }
};

function fizzBuzz(arr) {
  let newArr = [];
  for (let index = 0; index < arr.length; index += 1) {
    printFizz(arr, index, newArr);
    printBuzz(arr, index, newArr);
    if (arr[index] % 3 === 0 && arr[index] % 5 === 0) {
      newArr.push('fizzBuzz');
    }
    printBug(arr, index, newArr);
  }
  return newArr;
}

// Desafio 9
const encode = (str) => {
  let newStr = str.replace(/a/g, '1').replace(/e/g, '2').replace(/i/g, '3').replace(/o/g, '4')
    .replace(/u/g, '5');
  return newStr;
};
const decode = (str) => {
  let newStr = str.replace(/1/g, 'a').replace(/2/g, 'e').replace(/3/g, 'i').replace(/4/g, 'o')
    .replace(/5/g, 'u');
  return newStr;
};

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
