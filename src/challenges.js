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
  let area = (base * height) / 2;
  return area;
}

// Desafio 3
function splitSentence(frase) {
  let separaFrase = 0;
  for (let i = 0; i > frase.length; i++) 
}

// Desafio 4
function concatName() {
  // seu código aqui
}

// Desafio 5
function footballPoints(wins, ties) {
  let points = (wins * 3) + (ties * 1);
  return points;
}

// Desafio 6
function highestCount(numbers) {
  let maior = 0;
  let contMaior = 1;
  for (let i = 0; i > numbers.length; i++) {
    if (maior > numbers[i]) {
      maior = numbers[i];
      contMaior += 1;
    }
  }
  return contMaior;
}
console.log(highestCount([9, 1, 2, 3, 9, 5, 7]));

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanceMouseCat1 = [mouse - cat1];
  let distanceMouseCat2 = [mouse - cat2];
  if (distanceMouseCat1 < distanceMouseCat2) {
    return 'cat1';
  }
  else if (distanceMouseCat2 < distanceMouseCat1) {
    return 'cat2';
  }
  else {
    return 'os gatos se trombam e o gato foge';
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
