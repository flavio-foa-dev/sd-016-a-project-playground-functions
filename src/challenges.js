// Desafio 1

function compareTrue (x, y) {
  if (x === true && y === true) {
      return true;
  } else if (x === true && y === false || x === false && y === true) {
      return false;        
  } else if (x === false && y === false) {
    return false;
  }
}


// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
  return area;
}


// Desafio 3
function splitSentence(str) {
  let array = str.split(" ");
  return array;
}

// Desafio 4
function concatName(arr) {
  let first = arr[0];
  let last = arr[arr.length - 1];
  let result = last + ", " + first;
  return result; 
}

// Desafio 5
function footballPoints(wins, ties) {
  let winsPoints = wins * 3;
  let finalPoints = winsPoints + ties;
  return finalPoints;
}

// Desafio 6
function highestCount(arr) {
  let maior = -100;
  for (let cont = 0; cont < arr.length; cont += 1){
    if (arr[cont] > maior) {
      maior = arr[cont]; 
    }
  }
  
  let contMaior = 0;

  for (let cont = 0; cont < arr.length; cont += 1) {
    if (arr[cont] === maior){
      contMaior += 1;
    }
  }

  return contMaior;
}


// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanceCat1;
  if (mouse < cat1) {
    distanceCat1 = cat1 - mouse;
  } else if (cat1 < mouse) {
    distanceCat1 = mouse - cat1;
  }

  let distanceCat2;
  if (mouse < cat2) {
    distanceCat2 = cat2 - mouse;
  } else if (cat2 < mouse) {
    distanceCat2 = mouse - cat2;
  }

  if (distanceCat1 > distanceCat2) {
    return 'cat2';
  } else if (distanceCat1 < distanceCat2) {
    return 'cat1';
  } else if (distanceCat1 === distanceCat2) {
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
