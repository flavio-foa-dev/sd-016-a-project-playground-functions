// Desafio 1
function compareTrue(value1, value2) {

  return value1 && value2;

  if (value1 && value2) {
    return true;
  } else {
     return false;
  }
}

// Desafio 2
function calcArea(base, height) {

  return ((base * height)/2);
}

// Desafio 3
function splitSentence(value) {
  let result = [];
  let space = "";
  

  for (index = 0; index < value.length; index += 1) {

    if (value[index] !== " ") {
      space += value[index];
  } else {
    result.push(space);
    space = "";
  }
  }
  result.push(space);

  return result;
}


// Desafio 4
function concatName(value) {

  result = value[value.length -1] + ", " + value[0];
  return result;
}

// Desafio 5
function footballPoints(wins, ties) {

  let result = (wins * 3) + (ties * 1);
  return result;
}


// Desafio 6
function highestCount(value) {

  let number = value[0];
  let result = 0;

  for (let index = 0; index < value.length; index += 1) {
    if (value[index] > number) {
      number = value[index];
    }
  }
  for (let index = 0; index < value.length; index += 1) {
    if (number == value[index]) {
      result += 1;
    }
  }
  return result;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  
  let distanceCat1 = Math.abs(cat1 - mouse); 
  let distanceCat2 = Math.abs(cat2 - mouse);
  let result;
 
  if (distanceCat1 < distanceCat2) {
    result = "cat1"
  } else if (distanceCat2 < distanceCat1) {
    result = "cat2"
  } else {
    result = ("os gatos trombam e o rato foge");
  }

  return result;
  
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
