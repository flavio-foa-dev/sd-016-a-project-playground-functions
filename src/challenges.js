// Desafio 1
function compareTrue(a, b) {
  return a && b;
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
function concatName(array) {
  let firstName = array[0];
  const string = ', ';
  let lastName = array[array.length - 1];
  let concat = lastName.concat(string).concat(firstName);
  return concat;
}

// Desafio 5
function footballPoints(wins, ties) {
  let math = wins * 3 + ties;
  return math;
}

// Desafio 6
function highestCount(array) {
  let finalArray = [];
  Math.max(array);
  finalArray.push(Math.max);
  return finalArray.length;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  const cat1Wins = 'cat1';
  const cat2Wins = 'cat2';
  const mouseWins = 'os gatos trombam e o rato foge';
  if (Math.abs(cat1 - mouse) === Math.abs(cat2 - mouse)) {
    return mouseWins;
  } else if (Math.abs(cat1 - mouse) < Math.abs(cat2 - mouse)) {
    return cat1Wins;
  } else {
    return cat2Wins;
  }
}

// Desafio 8
function fizzBuzz(arrayNumeros) {
  let mensagemFinal = [];
  for (let key in arrayNumeros) {
    if ((arrayNumeros[key] % 3 === 0) && (arrayNumeros[key] % 5 === 0)) {
      mensagemFinal.push("fizzBuzz");
  } else if (arrayNumeros[key] % 3 === 0){
      mensagemFinal.push("fizz");
  } else if (arrayNumeros[key] % 5 === 0){
      mensagemFinal.push("buzz")
  } else {
      mensagemFinal.push("bug!")
  }
  }
  return mensagemFinal;
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
