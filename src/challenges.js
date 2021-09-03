// Desafio 1
function compareTrue(parameter1, parameter2) {
  if (parameter1 == true && parameter2 == true) {
  return true;
  }
  else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(frase) {
  return frase.split(' ');
}

// Desafio 4
function concatName(palavras) {
  return palavras[palavras.length - 1].concat(', ', palavras[0]);
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + ties;
}

// Desafio 6
function highestCount(numeros) {
  let maior = numeros[0];
  let cont = 0;
  for (let index = 0; index < numeros.length; index++) {
    if (numeros[index] > maior) maior = numeros[index];
  }
  for (let index = 0; index < numeros.length; index++) {
    if (numeros[index] === maior) cont++;
  }
  return cont;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distCat1 = 0;
  let distCat2 = 0;
  if (cat1 === mouse);
  else if (cat1 < mouse) {
    while (cat1 != mouse) {
      cat1++;
      distCat1++;
    }
  }
    else {
      while (cat1 != mouse) {
        cat1--;
        distCat1++;
      }
    }
  if (cat2 === mouse);
  else if (cat2 < mouse) {
    while (cat2 != mouse) {
      cat2++;
      distCat2++;
    }
  }
    else {
      while (cat2 != mouse) {
        cat2--;
        distCat2++;
      }
    }
  if (distCat1 === distCat2) {
    return "os gatos trombam e o rato foge";
  }
  else if (distCat1 > distCat2) {
    return "cat2";
  }
  else {
    return "cat1";
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
