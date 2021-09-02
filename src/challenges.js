// Desafio 1
function compareTrue(valueOne, valueTwo) {
  if (valueOne === true && valueTwo === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
  return area;
}

// Desafio 3
function splitSentence(sentence) {
  let arrayWords = sentence.split(' ');
  return arrayWords;
}

// Desafio 4
function concatName(arrayWords) {
  let lastItem = arrayWords[arrayWords.length - 1];
  let firstItem = arrayWords[0];
  let stringWords = '';
  stringWords = `${lastItem}, ${firstItem}`;
  return stringWords;
}

// Desafio 5
function footballPoints(wins, ties) {
  let points = (wins * 3) + (ties * 1);
  return points;
}

// Desafio 6
function highestCount(arrayNumbers) {
  let highestNumber = arrayNumbers[0];
  let cont = 0;
  for (let i = 0; i < arrayNumbers.length; i += 1) {
    if (arrayNumbers[i] > highestNumber) {
      highestNumber = arrayNumbers[i];
      cont = 1;
    } else if (highestNumber === arrayNumbers[i]) {
      cont += 1;
    }
  }
  return cont;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanceMouseCat1 = cat1 - mouse;
  let distanceMouseCat2 = cat2 - mouse;
  let msg;
  if (distanceMouseCat1 < 0) {
    distanceMouseCat1 *= (-1);
  } else if (distanceMouseCat2 < 0) {
    distanceMouseCat2 *= (-1);
  }
  if (distanceMouseCat1 < distanceMouseCat2) {
    msg = 'cat1';
  } else if (distanceMouseCat2 < distanceMouseCat1) {
    msg = 'cat2';
  } else {
    msg = 'os gatos trombam e o rato foge';
  }
  return msg;
}
let result = catAndMouse(1, 4, 3);
console.log(result);

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
