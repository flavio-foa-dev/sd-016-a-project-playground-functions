// Desafio 1
function compareTrue(param1, param2) {
  if (param1 === true && param2 === true) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(string) {
  return string.split(' ');
}
// Desafio 4
function concatName(string) {
  let concat = string[string.length - 1] + ', ' + string[0];
  return concat;
}

// Desafio 5
function footballPoints(wins, ties) {
  let points = wins * 3 + ties * 1;
  return points;
}
// Desafio 6
function highestCount(numbers) {
  let maxNumber = numbers[0];
  let count = 0;
  for (let index = 0; index < numbers.length; index++) {
    if(numbers[index] > maxNumber) maxNumber = numbers[index];
    } for(index = 0; index < numbers.length; index++) {
      if(maxNumber === numbers[index]) count++;
    }return count;
  }

// Desafio 7
function catAndMouse(mouse, cat1, cat2){
  let positionCat1 = mouse - cat1;
  let positionCat2 = mouse - cat2;
  if(positionCat1 > 0){
    positionCat1 = -1 * positionCat1;
  }else if(positionCat2 > 0) {
    positionCat2 = -1 * positionCat2;
  }
if(positionCat1 > positionCat2) {
  return 'cat1'
}else if(positionCat2 > positionCat1) {
  return 'cat2'
}else{
  return "os gatos trombam e o rato foge"
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

// Desafio 10
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
}