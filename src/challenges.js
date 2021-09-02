// Desafio 1
function compareTrue(valueOne, valueTwo) {
  if (valueOne === true && valueTwo === true) {
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
 function splitSentence(string) {
  return string.split(" ");
} 

// Desafio 4
  function concatName(array) {
  let concat = array[array.length - 1] + ", " + (array[0]);
    return concat;
  }

// Desafio 5
function footballPoints(wins, ties) {
  wins = (wins * 3);
  ties = (ties * 1);
  let pontos = wins + ties;
  return pontos;
}

// Desafio 6
function highestCount(array) {
  let maior = -1000;
  let repeticoesMaior = 0;

  for (let index in array) {
    
    if (array[index] > maior) {
      maior = array[index];
      repeticoesMaior = 1;
    } else if (array[index] === maior) {
      repeticoesMaior += 1;
    }
  }
  return repeticoesMaior;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {

  if (Math.abs(mouse - cat1) < Math.abs(mouse - cat2) ) {
    return 'cat1';
  } else if (Math.abs(mouse - cat1) > Math.abs(mouse - cat2)) {
    return 'cat2';
  } else {
    return 'os gatos trombam e o rato foge';
  }
}

// Desafio 8
function fizzBuzz(array) {

  let retorno = [];

  for (let i = 0; i < array.length; i += 1) {
    if (array[i] % 3 == 0 && array[i] % 5 != 0) {
     retorno.push('fizz');
    } else if (array[i] % 5 == 0 && array[i] % 3 != 0) {
      retorno.push('buzz');
    } else if (array[i] % 3 == 0 && array[i] % 5 === 0) {
      retorno.push('fizzBuzz');
    } else {
      retorno.push('bug!');
    }
  }
  return retorno;
}

// Desafio 9
function encode(string) {
  let stringCodificada = '';
  for (let i = 0; i < string.length; i += 1) {
    switch (string[i]) {
      case 'a':
        stringCodificada += '1';
        break;
      case 'e':
        stringCodificada += '2';
        break;
      case 'i':
        stringCodificada += '3';
        break;
      case 'o':
        stringCodificada += '4';
        break;
      case 'u':
        stringCodificada += '5';
        break;
      default:
        stringCodificada += string[i]; 
    }
  } 
    return stringCodificada;
}
  
function decode(string) {
  let stringDecodificada = '';
  for (let i = 0; i < string.length; i += 1) {
    switch (string[i]) {
      case '1':
        stringDecodificada += 'a';
        break;
      case '2':
        stringDecodificada += 'e';
        break;
      case '3':
        stringDecodificada += 'i';
        break;
      case '4':
        stringDecodificada += 'o';
        break;
      case '5':
        stringDecodificada += 'u';
        break;
      default:
        stringDecodificada += string[i]; 
    }
  } 
    return stringDecodificada;
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
  splitSentence
};
