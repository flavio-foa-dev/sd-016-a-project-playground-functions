// Desafio 1
function compareTrue(number1, number2) {
  // Compara dois valores se ambos são true;
  // Retorna com true se caso ambos sejam true e false para qualquer valor # true
  if (number1 === true && number2 === true) {
    return true;
  } else {
    return false;
  }
}
// Desafio 2
function calcArea(base, height) {
  // função recebe valor base(base) e altura(height) de um triângulo
  // retorna o cálculo da sua área
  // fórmula da área de um triângulo (base * altura) / 2
  let areaTriangle = (base * height) / 2;
  return areaTriangle;
}
// Desafio 3
function splitSentence(stringSplit) {
  // função recebe uma string
  // retorna uma array de strings separadas por cada espaço na string original.
  let space = ' ';
  let arrayString = stringSplit.split(space);
  return arrayString;
}
// Desafio 4
function concatName(stringArray) {
  // função receber uma array de strings
  // retorna uma string com o formato `'ÚLTIMO ITEM, PRIMEIRO ITEM'`
  // independente do tamanho da array
  let space = ', ';
  let lastIndex = stringArray.length - 1;
  let stringConcat = stringArray[lastIndex] + space + stringArray[0];
  return stringConcat;
}
// Desafio 5
function footballPoints(wins, ties) {
  // função recebe o número de vitórias(chamar `wins`)
  // e o número de empates( chamar `ties`)
  // retorna a quantidade de pontos que o time marcou em um campeonato.
  let spotsTime = (wins * 3) + ties;
  return spotsTime;
}
// Desafio 6
function highestCount(numbersArray) {
  let higherAtual = numbersArray[0];
  let sumHigherNumber = 0;
  for (let index = 1; index < numbersArray.length; index += 1) {
    if (numbersArray[index] > higherAtual) {
      higherAtual = numbersArray[index];
    }
  }
  for (let index = 0; index < numbersArray.length; index += 1) {
    if (numbersArray[index] === higherAtual) {
      sumHigherNumber += 1;
    }
  }
  return sumHigherNumber;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let positionCat1 = (mouse - cat1);
  let positionCat2 = (mouse - cat2);
  let result;
  if (mouse < cat1) {
    positionCat1 = (cat1 - mouse);
  }
  if (mouse < cat2) {
    positionCat2 = (cat2 - mouse);
  }
  if (positionCat1 === positionCat2) {
    result = 'os gatos trombam e o rato foge'
  } else if (positionCat1 < positionCat2) {
    result = 'cat1';
  } else if (positionCat2 < positionCat1) {
    result = 'cat2';
  }
  return result;
}
// Desafio 8
function fizzBuzz(fizBuzzArray) {
  // divisível por 3 "fizz"
  // divisível por 5 "buzz"
  // divisível por 3 e 5 "fizzBuzz"
  // não divisível por 3 nem por 5 "bug!"
  for (let index = 0; index < fizBuzzArray.length; index +=1) {
    if (fizBuzzArray[index] % 3 === 0) {
      fizBuzzArray[index] = ('fizz');
    } else if (fizBuzzArray[index] % 5 === 0) {
      fizBuzzArray[index] = ('buzz');
    } else if (fizBuzzArray[index] % 5 === 0 && fizBuzzArray[index] % 3 === 0) {
      fizBuzzArray[index] = ('fizzBuzz');
    } else {
      fizBuzzArray[index] = ('bug!');
    }
  }
  return fizBuzzArray;
}
// Desafio 9
function encode(arrayEncode) {
  for (let index = 0; index < arrayEncode.length; index += 1) {
    if (arrayEncode[index] === 'a') {
      arrayEncode[index] = 1;
    } else if (arrayEncode[index] === 'e') {
      arrayEncode[index] = 2;
    } else if (arrayEncode[index] === 'i') {
      arrayEncode[index] = 3;
    } else if (arrayEncode[index] === 'o') {
      arrayEncode[index] = 4;
    } else if (arrayEncode[index] === 'u') {
      arrayEncode[index] = 5;
    }
  }
  return arrayEncode;
}

function decode(arrayDecode) {
  for (let index = 0; index < arrayDecode.length; index += 1) {
    if (arrayDecode[index] === 1) {
      arrayDecode[index] = 'a';
    } else if (arrayEncode[index] === 2) {
      arrayDecode[index] = 'e';
    } else if (arrayDecode[index] === 3) {
      arrayDecode[index] = 'i';
    } else if (arrayDecode[index] === 4) {
      arrayDecode[index] = 'o';
    } else if (arrayDecode[index] === 5) {
      arrayDecode[index] = 'u';
    }
  }
  //console.log(arrayDecode);
  return arrayDecode;
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