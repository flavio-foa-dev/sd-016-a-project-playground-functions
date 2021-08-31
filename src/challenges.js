// Desafio 1
function compareTrue(value1, value2) {
  return value1 === true && value2 === true;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(sentence) {
  return sentence.split(' ');
}

// Desafio 4
function concatName(arrayList) {
  return `${arrayList[arrayList.length - 1]}, ${arrayList[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + ties;
}

// Desafio 6
function highestCount(arrayList) {
  let number = Math.max.apply(null, arrayList);
  let cont = 0;
  let i = 0;
  for (i = 0; i < arrayList.length; i += 1) {
    if (number === arrayList[i]) {
      cont += 1;
    } else {
      cont += 0;
    }
  } return cont;
}

// Referencia da linha 28 - Math.max.apply retirada do - https://stackoverflow.com/questions/1669190/find-the-min-max-element-of-an-array-in-javascript

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let cat1Distance = Math.abs(mouse - cat1);
  let cat2Distance = Math.abs(mouse - cat2);
  if (cat1Distance > cat2Distance) {
    return 'cat2';
  }
  if (cat2Distance > cat1Distance) {
    return 'cat1';
  }
  if (cat2Distance === cat1Distance) {
    return 'os gatos trombam e o rato foge';
  }
}

// Desafio 8
function fizzBuzz(arrayList) {
  let arrayResult = [];
  let i = 0;
  for (i = 0; i < arrayList.length; i += 1) {
    if (arrayList[i] % 3 === 0 && arrayList[i] % 5 === 0) {
      arrayResult.push('fizzBuzz');
    } else if (arrayList[i] % 3 === 0 && arrayList[i] % 5 !== 0) {
      arrayResult.push('fizz');
    } else if (arrayList[i] % 5 === 0 && arrayList[i] % 3 !== 0) {
      arrayResult.push('buzz');
    } else {
      arrayResult.push('bug!');
    }
  }
  return arrayResult;
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
