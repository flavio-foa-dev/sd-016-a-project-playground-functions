// Desafio 1
function compareTrue(a, b) {
  if (a && b === true) return true;
  return false;
}

// Desafio 2
function calcArea(base, altura) {
  const area = (base * altura) / 2;
  return area;
}

function splitSentence(string) {
  const splitString = string.split(' ');
  return splitString;
}

// Desafio 4
function concatName(array) {
  const firstI = array[0];
  const lastI = array[array.length - 1];
  return (`${lastI}, ${firstI}`);
}

// Desafio 5
function footballPoints(wins, ties) {
  const win = 3;
  const tie = 1;

  return ((wins * win) + (ties * tie));
}

// Desafio 6
function highestCount(arrayNumbers) {
  const maxNumber = arrayNumbers.reduce((acc, number) => Math.max(acc, number));
  return arrayNumbers.filter((number) => maxNumber === number).length;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  const cat1Mouse = Math.abs(mouse - cat1);
  const cat2Mouse = Math.abs(mouse - cat2);

  if (cat1Mouse > cat2Mouse) {
    return 'cat2';
  }
  if (cat2Mouse > cat1Mouse) {
    return 'cat1';
  }
  return 'os gatos trombam e o rato foge';
}

// Desafio 8
function fizzBuzz(array) {
  const answerArray = [];
  array.forEach((element) => {
    if (element % 3 === 0 && element % 5 === 0) answerArray.push('fizzBuzz');
    else if (element % 3 === 0) answerArray.push('fizz');
    else if (element % 5 === 0) answerArray.push('buzz');
    else (answerArray.push('bug!'));
  });
  return answerArray;
}

// Desafio 9
function encode(string) {
  const stringReplace1 = string.replace(/a/gi, '1');
  const stringReplace2 = stringReplace1.replace(/e/gi, '2');
  const stringReplace3 = stringReplace2.replace(/i/gi, '3');
  const stringReplace4 = stringReplace3.replace(/o/gi, '4');
  const stringReplace5 = stringReplace4.replace(/u/gi, '5');
  return stringReplace5;
}

function decode(string) {
  const stringReplaceA = string.replace(/1/gi, 'a');
  const stringReplaceE = stringReplaceA.replace(/2/gi, 'e');
  const stringReplaceI = stringReplaceE.replace(/3/gi, 'i');
  const stringReplaceO = stringReplaceI.replace(/4/gi, 'o');
  const stringReplaceU = stringReplaceO.replace(/5/gi, 'u');
  return stringReplaceU;
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
