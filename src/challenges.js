// Desafio 1
function compareTrue(parameter1, parameter2) {
  if (parameter1 == true && parameter2 == true) {
  return true;
  }
  else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(frase) {
  return frase.split(' ');
}

// Desafio 4
function concatName(palavras) {
  return palavras[palavras.length - 1].concat(', ', palavras[0]);
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + ties;
}

// Desafio 6
function highestCount(numeros) {
  let maior = numeros[0];
  let cont = 0;
  for (let index = 0; index < numeros.length; index++) {
    if (numeros[index] > maior) maior = numeros[index];
  }
  for (let index = 0; index < numeros.length; index++) {
    if (numeros[index] === maior) cont++;
  }
  return cont;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distCat1 = 0;
  let distCat2 = 0;
  if (cat1 === mouse);
  else if (cat1 < mouse) {
    while (cat1 != mouse) {
      cat1++;
      distCat1++;
    }
  }
    else {
      while (cat1 != mouse) {
        cat1--;
        distCat1++;
      }
    }
  if (cat2 === mouse);
  else if (cat2 < mouse) {
    while (cat2 != mouse) {
      cat2++;
      distCat2++;
    }
  }
    else {
      while (cat2 != mouse) {
        cat2--;
        distCat2++;
      }
    }
  if (distCat1 === distCat2) {
    return "os gatos trombam e o rato foge";
  }
  else if (distCat1 > distCat2) {
    return "cat2";
  }
  else {
    return "cat1";
  }
}

// Desafio 8
function fizzBuzz(numeros) {
  let resultado = [];
  for (let index = 0; index < numeros.length; index++) {
    if ((numeros[index] % 3) == 0 && (numeros[index] % 5) == 0){
      resultado.push('fizzBuzz');
    }
    else if ((numeros[index] % 3) == 0) {
      resultado.push('fizz');
    }
    else if ((numeros[index] % 5) == 0) {
      resultado.push('buzz');
    }
    else {
      resultado.push('bug!')
    }
  }
  return resultado;
}

// Desafio 9
function encode(frase) {
  let fraseArray = frase.split('');
  for (let index = 0; index < frase.length; index++) {
    switch (frase[index]) {
      case 'a':
        fraseArray[index] = '1';
        break;
      case 'e':
        fraseArray[index] = '2'
        break;
      case 'i':
        fraseArray[index] = '3';
        break;
      case 'o':
        fraseArray[index] = '4';
        break;
      case 'u':
        fraseArray[index] = '5';
        break;
      default:
        break;
    }
  }
  fraseArray = fraseArray.join('');
  return fraseArray;
}

function decode(fraseCod) {
  let fraseArray = fraseCod.split('');
  for (let index = 0; index < fraseCod.length; index++) {
    switch (fraseCod[index]) {
      case '1':
        fraseArray[index] = 'a';
        break;
      case '2':
        fraseArray[index] = 'e'
        break;
      case '3':
        fraseArray[index] = 'i';
        break;
      case '4':
        fraseArray[index] = 'o';
        break;
      case '5':
        fraseArray[index] = 'u';
        break;
      default:
        break;
    }
  }
  fraseArray = fraseArray.join('');
  return fraseArray;
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
