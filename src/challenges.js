// Desafio 1
function compareTrue(value1, value2) {
  // seu código aqui
  if (value1 === true && value2 === true) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  return (base*height)/2;
}

// Desafio 3
function splitSentence(texto) {
  // seu código aqui
  return texto.split(' ');
}

// Desafio 4
function concatName(array) {
  // seu código aqui
  let length = array.length
  let texto = array[length -1] + ", " + array[0];
  return texto;
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  let pointsWin = wins*3;
  let pointTies = ties;
  return pointTies + pointsWin;
}

// Desafio 6
function highestCount(array) {
  // seu código aqui
  let count = 0;

  for (let indexCount = 0 ; indexCount < array.length ; indexCount++) {

    for (let indexCurrent = 0 ; indexCurrent < array.length ; indexCurrent++) {
    
      if (array[indexCount] > array[indexCurrent]) {

        let currentIndex = array[indexCount];
        array[indexCount] = array[indexCurrent];
        array[indexCurrent] = currentIndex;    
    }
  }
}
  for (let repCount = 0 ; repCount < array.length ; repCount++) {

    if (array[0] === array[repCount]) {
      count++;
    }
  }

  return count;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  // Função Math.abs ignora sinal negativo do número armazenado na variável tornando todos os números positivos
  // desta forma, caso as distancias entre o rato seja de 1 e -1, o código reconhece que a distância é a mesma

  let distanciaCat1 = cat1 - mouse;
  let distanciaCat2 = cat2 - mouse;
  if (Math.abs(distanciaCat1) < Math.abs(distanciaCat2)) {
    return "cat1";

  } else if (Math.abs(distanciaCat2) < Math.abs(distanciaCat1)) {
    return "cat2";

  } else {
    return "os gatos trombam e o rato foge";

  }
}

// Desafio 8
function fizzBuzz(array) {
  // seu código aqui
  let arrayResposta = [];
  for (let count = 0 ; count < array.length ; count++) {
    if (array[count]%3 === 0 && array[count]%5 != 0) {
      arrayResposta.push('fizz');
    } else if (array[count]%5 === 0 && array[count]%3 != 0) {
      arrayResposta.push('buzz');
    } else if (array[count]%3 === 0 && array[count]%5 === 0) {
      arrayResposta.push('fizzBuzz');
    } else {
      arrayResposta.push('bug!');
    }
  }
  return arrayResposta;
}

fizzBuzz([7,9]);
// Desafio 9
function encode(texto) {
  // seu código aqui
  let textoArray = texto.split('')
  for (index = 0 ; index < textoArray.length ; index++) {
    switch (textoArray[index]) {
      case 'a': 
        textoArray[index] = '1';
        break;
      case 'e': 
        textoArray[index] = '2';
        break;
      case 'i': 
        textoArray[index] = '3';
        break;
      case 'o': 
        textoArray[index] = '4';
        break;
      case 'u': 
        textoArray[index] = '5';
        break;
      }
  }  
  return textoArray.join('');
}
function decode(textocod) {
  // seu código aqui
  let textoArray = textocod.split('')
  for (index = 0 ; index < textoArray.length ; index++) {
    switch (textoArray[index]) {
      case '1': 
        textoArray[index] = 'a';
        break;
      case '2': 
        textoArray[index] = 'e';
        break;
      case '3': 
        textoArray[index] = 'i';
        break;
      case '4': 
        textoArray[index] = 'o';
        break;
      case '5': 
        textoArray[index] = 'u';
        break;
    }
  }
  return textoArray.join('');
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
