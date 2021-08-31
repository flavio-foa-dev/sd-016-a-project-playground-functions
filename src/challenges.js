// Desafio 1
function compareTrue(parm1, parm2) {
  let parameters = parm1 === true && parm2 === true ? true : false;
  return parameters;
}

// Desafio 2
function calcArea(base, height) {
  let calcArea = (base * height) / 2;
  return calcArea;
}

// Desafio 3
function splitSentence(split) {
  let pharase = split.split(' ');
  return pharase;
}

// Desafio 4
function concatName(array) {
  // pesquisei sobre array neste site;
  let last = array.pop();
  // https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array;
  let first = array[0];
  return `${last}, ${first}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  let sum = wins * 3 + ties;
  return sum;
}

// Desafio 6
function highestCount(numbers) {
  let higherNumber = numbers[0];
  let nuberAppears = 0;
  for (let hN = 1; hN < numbers.length; hN += 1) {
    if (numbers[hN] > higherNumber) {
      higherNumber = numbers[hN];
    }
  }
  for (let nA = 0; nA < numbers.length; nA += 1) {
    if (numbers[nA] === higherNumber) {
      nuberAppears += 1;
    }
  }
  return nuberAppears;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // Math.abs descobri no: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/abs;
  let cat1Pos = Math.abs(mouse - cat1);
  let cat2Pos = Math.abs(mouse - cat2);
  if (cat2Pos < cat1Pos) {
    return 'cat2';
  } else if (cat1Pos < cat2Pos) {
    return 'cat1';
  } else {
    return 'os gatos trombam e o rato foge';
  }
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
