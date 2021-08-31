// Desafio 1
function compareTrue(n1, n2) {
  if (n1 === true && n2 === true) {
    return true
  } else {
    return false
  }
}

// Desafio 2
function calcArea(base, height) {
  return  (base * height) / 2;
}

// Desafio 3
function splitSentence(string) {
  return string.split(" ");
}

// Desafio 4
function concatName(arrayString) {
  let first = arrayString[0];
  let last = arrayString[arrayString.length - 1];
  return (last + ', ' + first);
}

// Desafio 5
function footballPoints(wins, ties) {
  let a = wins * 3;
  let b = ties;
  let points = a + b;
  return points;
}

// Desafio 6
function highestCount(arrayNumbers) {
  let greaterNumber = arrayNumbers[0];
  let count = 0;
  for (let index in arrayNumbers) {
    if (greaterNumber < arrayNumbers[index]) {
      greaterNumber = arrayNumbers[index];
    }
  }
  for (let secondIndex in arrayNumbers) {      
    if (greaterNumber === arrayNumbers[secondIndex]) {
      count += 1;
    }   
  }     
  return count;
  }  

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if (Math.abs(mouse - cat1)  > Math.abs(mouse - cat2)) {
    console.log('cat1');
  } else if (Math.abs(mouse - cat1) > Math.abs(mouse - cat2)){
    console.log('cat2');
  } else {
    console.log("os gatos trombam e o rato foge");
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
