// Desafio 1
function compareTrue(booleanA, booleanB) {
  if (booleanA === true && booleanB === true) {
    return true;
  } return false;
}

// Desafio 2
function calcArea(base, height) {
  return ((base * height) / 2);
}

// Desafio 3
function splitSentence(sentence) {
  return sentence.split(' ');
}

// Desafio 4
function concatName(names) {
  return (names[names.length - 1] + ', ' + names[0]);
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3 + ties);
}

// Desafio 6
function highestCount(numeros) {
  let count = 0;
  let maior = numeros[0];

  for (let i = 0; i < numeros.length; i += 1) {
    if (maior < numeros[i]) {
      maior = numeros[i];
    } 
  }
  for (let i = 0; i < numeros.length; i += 1) {
    if (maior === numeros[i]){
      count += 1;
    }
  }
  return count;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distCat1;
  let distCat2;

  if (cat1 > mouse) {
    distCat1 = cat1 - mouse;
  } else distCat1 = mouse - cat1;

  if (cat2 > mouse) {
    distCat2 = cat2 - mouse;
  } else distCat2 = mouse - cat2;


  if (distCat1 === distCat2) {
    return "os gatos trombam e o rato foge";
  } else if (distCat1 < distCat2) {
    return 'cat1';
  }  return 'cat2';
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
