// Desafio 1
function compareTrue(v1, v2) {
  if(v1 === true && v2 === true) {
    return true;
  } else {
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
function concatName(names) {
  let uName = names[names.length - 1];
  let pName = names[0];
return result = uName + ", " + pName
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + ties
}

// Desafio 6
function highestCount(arr) {

  let maior = arr[0];
  let soma = 0;

  for(let index = 0; index < arr.length; index += 1) {
    if(maior < arr[index]) {
      maior = arr[index]
    }
  }
  for(let i = 0; i < arr.length; i += 1) {
    if(maior === arr[i]) {
      soma += 1
    }
  }
  return soma;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let resultado = "";
  let distance1 = Math.abs(mouse - cat1);
  let distance2 = Math.abs(mouse - cat2);

  if (distance1 > distance2) {
    resultado = "cat2"
  } else if(distance2 > distance1) {
    resultado = "cat1"
  } else {
    resultado = "os gatos trombam e o rato foge"
  }
  return resultado;
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
