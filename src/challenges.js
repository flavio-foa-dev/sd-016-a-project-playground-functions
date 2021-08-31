// Desafio 1
function compareTrue(valor1, valor2) {
  if (valor1 === true && valor2 === true) {
    return true;
  } 
  else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
  return area;
}

// Desafio 3
function splitSentence(frase) {
  let array = frase.split(' ');
  return array;
}

// Desafio 4
function concatName(frase) {
  let primeiraPalavra = frase[0];
  let ultimaPalavra = frase.[frase.length - 1];
  let resultado = ultimaPalavra + ', ' + primeiraPalavra;
  return resultado;
}

// Desafio 5
function footballPoints(wins, ties) {
  let points = (wins * 3) + (ties * 1);
  return points;
}

// Desafio 6
function highestCount(numbers) {
  let maior = numbers[0];
  let contMaior = 0;
  for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] > maior) {
      maior = numbers[i];
    }
  }
  for (let i = 0; i < numbers.length; i += 1) {
    if (maior === numbers[i]) {
      contMaior += 1;
    }
  }
  return contMaior;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanceMouseCat1 = mouse - cat1;
  let distanceMouseCat2 = mouse - cat2;
  if(distanceMouseCat2 < 0) {
    distanceMouseCat2 = -1 * distanceMouseCat2;
  }
  if(distanceMouseCat1 < 0) {
    distanceMouseCat1 = -1 * distanceMouseCat1;
  }
  if (distanceMouseCat1 < distanceMouseCat2) {
    return 'cat1';
  }
  else if (distanceMouseCat2 < distanceMouseCat1) {
    return 'cat2';
  }
  else {
    return 'os gatos trombam e o rato foge';
  }
}

// Desafio 8
function fizzBuzz(arrayNumbers) {
  let array = [];
  for(index = 0; index < arrayNumbers.length; index += 1) {
    if(arrayNumbers[index] % 3 === 0 && arrayNumbers[index] % 5 === 0) {
      array.push ("fizzBuzz");
    } else if(arrayNumbers[index] % 3 === 0) {
      array.push ("fizz");
    } else if(arrayNumbers[index] % 5 === 0) {
      array.push ("buzz");
    } else {
      array.push ("bug!");
    }
  }
  return array;
}

// Desafio 9
function encode(phrase1) {
  let newPhrase1 = '';
  for(let index = 0; index < phrase1.length; index += 1) {
    if(phrase1[index] === 'a') {
      newPhrase1 = newPhrase1 + 1;
    }
    else if (phrase1[index] === 'e') {
      newPhrase1 = newPhrase1 + 2;
    }
    else if (phrase1[index] === 'i') {
      newPhrase1 = newPhrase1 + 3;
    }
    else if (phrase1[index] === 'o') {
      newPhrase1 = newPhrase1 + 4;
    }
    else if (phrase1[index] === 'u') {
      newPhrase1 = newPhrase1 + 5;
    }
    else {
      newPhrase1 = newPhrase1 + phrase1[index];
    }
  }
  return newPhrase1;
}

function decode(phrase1) {
  let newPhrase1 = '';
  for(let index = 0; index < phrase1.length; index += 1) {
    if(phrase1[index] === 1) {
      newPhrase1 = newPhrase1 + 'a';
    }
    else if (phrase1[index] === 2) {
      newPhrase1 = newPhrase1 + 'e';
    }
    else if (phrase1[index] === 3) {
      newPhrase1 = newPhrase1 + 'i';
    }
    else if (phrase1[index] === 4) {
      newPhrase1 = newpHrase1 + 'o';
    }
    else if (phrase1[index] === 5) {
      newPhrase1 = newPHrase1 + 'u';
    }
    else {
      newPhrase1 = newPhrase1 + phrase1[index];
    }
  }
  return newPhrase1;
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
