// Desafio 1
function compareTrue(valor1, valor2) {
  if (valor1 === true && valor2 === true) {
    return true;
  } return false;
}
// Desafio 2
function calcArea(base, altura) {
  let area = (base * altura) / 2;
  return area;
}

// Desafio 3
function splitSentence(caract) {
  let arraycaract = caract.split(' ');
  return arraycaract;
}

// Desafio 4
function concatName(arrayCaract) {
  let primArray = arrayCaract[0];
  let ultArray = arrayCaract[arrayCaract.length - 1];
  let string = ultArray.concat(', ', primArray);
  return string;
}

// Desafio 5
function footballPoints(wins, ties) {
  let winsPoints = wins * 3;
  let tiesPoints = ties * 1;
  let totalPoints = winsPoints + tiesPoints;
  return totalPoints;
}

// Desafio 6
function highestCount(numeros) {
  let maximoNumero = numeros[0] - 1;
  let contarNumero = 0;
  for (let i in numeros) {
    if (maximoNumero < numeros[i]) {
      maximoNumero = numeros[i];
      contarNumero = 1;
    } else if (maximoNumero === numeros[i]) {
      contarNumero += 1;
    }
  }
  return contarNumero;
}

console.log(highestCount([-2, -2, -1]));

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanciaGato1 = Math.abs(cat1 - mouse);
  let distanciaGato2 = Math.abs(cat2 - mouse);
  if (distanciaGato1 > distanciaGato2) {
    return 'cat2';
  } if (distanciaGato1 < distanciaGato2) {
    return 'cat1';
  } return 'os gatos trombam e o rato foge';
}

// Desafio 8
function fizzBuzzAux(lista) {
  if (lista % 3 === 0) {
    return 'fizz';
  } if (lista % 5 === 0) {
    return 'buzz';
  } return 'bug!';
}
function fizzBuzz(lista) {
  let novaLista = [];
  for (let i in lista) {
    if (lista[i] % 3 === 0 && lista[i] % 5 === 0) {
      novaLista.push('fizzBuzz');
    } else {
      novaLista.push(fizzBuzzAux(lista[i]));
    }
  }
  return novaLista;
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
