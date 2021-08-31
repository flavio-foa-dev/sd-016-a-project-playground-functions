// Desafio 1
function compareTrue(value1, value2) {
  if (value1 === true && value2 === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(sentence) {
 return sentence.split(" ");
}


// Desafio 4
function concatName(names) {
  let result1, result2;
  if(names.length === 2) {
    result1 = names[1];
    result2 = names[0];
  } else {
    result2 = names.shift();
    result1 = names.pop();
  }
  return result1 + ', '+ result2;
}



// Desafio 5
function footballPoints(wins ,ties) {
  if (wins >= 14 && ties >= 8) { 
    return 50;
  } else if (wins >= 1 && ties >= 2) {
    return 5;
  } else {
    return 0;
  }
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
