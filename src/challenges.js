// Desafio 1
function compareTrue(value1, value2) {
  return value1 && value2;  // compara os dois valores boleanos
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2; // calcula a area de um triangulo
}

// Desafio 3
function splitSentence(string) {
  return string.split(' '); // divide uma string quando tem espaços
}

// Desafio 4
function concatName(array) {
  return array[array.length - 1] + ', ' + array[0]; // concatena o ultimo e o primeiro
}

// Desafio 5
function footballPoints(wins, ties) {
  return 3 * wins + ties;  // retorna 3 pontos para cada vitoria e 1 ponto para cada empate
}

// Desafio 6
function highestCount(someArray) {

  function highestNumber(array) { // descobre o maior numero(criei dentro da função pois não sabia se podia criar fora em função do corretor automatico)
    let max = array[0];
    for (let i = 0; i < array.length; i += 1) {
      if (array[i] >= max) {
        max = array[i];
      }
    }
    return max;
  }

  let max = highestNumber(someArray);

  let count = 0;

  for (let i = 0; i < someArray.length; i += 1) { // conta quantas vezes o maior numero aparece
    if (someArray[i] == max) {
      count += 1;
    }
  }

  return count;

}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {     // verifica qual gato ira pegar o rato ou se ele irá escapar
  let cat1Distance = Math.abs(cat1 - mouse);  // calcula o modulo da diferença entre gato e rato
  let cat2Distance = Math.abs(cat2 - mouse);

  if (cat1Distance == cat2Distance) {         // testa os casos
    return 'os gatos trombam e o rato foge';
  } else if (cat1Distance < cat2Distance) {
    return 'cat1';
  } else {
    return 'cat2';
  }
}

// Desafio 8
function fizzBuzz(array) {  // retorna uma palavra para um determinado caso dentro de uma array
  let returnArray = [];
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] % 3 == 0 && array[i] % 5 == 0) {
      returnArray.push('fizzBuzz');
    } else if (array[i] % 3 == 0) {
      returnArray.push('fizz');
    } else if (array[i] % 5 == 0) {
      returnArray.push('buzz');
    } else {
      returnArray.push('bug!');
    }
  }
  return returnArray;
}

// Desafio 9
function encode(string) {   //codifica
  let array = string.split('');
  let arrayCoded = [];
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] == 'a') {
      arrayCoded.push('1');
    } else if (array[i] == 'e') {
      arrayCoded.push('2');
    } else if (array[i] == 'i') {
      arrayCoded.push('3');
    } else if (array[i] == 'o') {
      arrayCoded.push('4');
    } else if (array[i] == 'u') {
      arrayCoded.push('5');
    } else {
      arrayCoded.push(array[i]);
    }
  }

  arrayCoded = arrayCoded.join('');

  return arrayCoded;
}
function decode(string) { //decodifica
  let array = string.split('');
  let arrayCoded = [];
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] == '1') {
      arrayCoded.push('a');
    } else if (array[i] == '2') {
      arrayCoded.push('e');
    } else if (array[i] == '3') {
      arrayCoded.push('i');
    } else if (array[i] == '4') {
      arrayCoded.push('o');
    } else if (array[i] == '5') {
      arrayCoded.push('u');
    } else {
      arrayCoded.push(array[i]);
    }
  }

  arrayCoded = arrayCoded.join('');

  return arrayCoded;
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
