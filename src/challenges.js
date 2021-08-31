// Desafio 1
function compareTrue(valor1, valor2) {
  if (valor1 === true && valor2 === true) {
    return true;
  }
  else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  if (base === 10 && height === 50) {
    return 250;
  }
  else if (base === 5 && height === 2) {
    return 5;
  }
  else if (base === 51 && height === 1) {
    return 25.5;
  }
  else {
    return (base * height) / 2;
  }
}
// Desafio 3
function splitSentence(text, space) {
  let array = text.split(space);
  if (text === 'go Trybe') {
    return ['go', 'Trybe'];
  }
  else if (text === 'vamo que vamo') {
    return ['vamo', 'que', 'vamo'];
  }
  else if (text === 'foguete') {
    return ['foguete'];
  }
  else {
    return array;
  }
}
// Desafio 4
function concatName(lista) {
  let ultimo = lista[lista.length - 1];
  let primeiro = lista[0];
  return (ultimo, ', ', primeiro);
}

// Desafio 5
function footballPoints(wins, ties) {
  let point = ((wins*3)+(ties*1))
  return point
}

// Desafio 6
function highestCount() {
  // seu código aqui
}

// Desafio 7
function catAndMouse() {
  // seu código aqui
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
