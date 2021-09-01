// Desafio 1
function compareTrue(booleanA, booleanB) {
  if (booleanA === true && booleanB === true) {
    return true;
  } return false;
}

// Desafio 2
function calcArea(base, height) {
  return ((base * height) / 2);
}

// Desafio 3
function splitSentence(sentence) {
  return sentence.split(' ');
}

// Desafio 4
function concatName(names) {
  return (names[names.length - 1] + ', ' + names[0]);
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3 + ties);
}

// Desafio 6
function highestCount(numeros) {
  let count = 0;
  let maior = numeros[0];
  for (let i = 0; i < numeros.length; i += 1) {
    if (maior < numeros[i]) {
      maior = numeros[i];
    } 
  }
  for (let i = 0; i < numeros.length; i += 1) {
    if (maior === numeros[i]){
      count += 1;
    }
  }
  return count;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distCat1;
  let distCat2;

  if (cat1 > mouse) {
    distCat1 = cat1 - mouse;
  } else distCat1 = mouse - cat1;

  if (cat2 > mouse) {
    distCat2 = cat2 - mouse;
  } else distCat2 = mouse - cat2;

  if (distCat1 === distCat2) {
    return "os gatos trombam e o rato foge";
  } else if (distCat1 < distCat2) {
    return 'cat1';
  }  return 'cat2';
}

// Desafio 8
function fizzBuzz(divisiveis) {
  let divTres = false;
  let divCinco = false;
  let resultados = [];
  for (let i = 0; i < divisiveis.length; i += 1) {
    if (divisiveis[i] % 3 === 0)
      divTres = true;
    if (divisiveis[i] % 5 === 0)
      divCinco = true;       
    if (divCinco === false && divTres === false) {
      resultados.push('bug!');
    } else if (divTres === true && divCinco === true) {
      resultados.push('fizzBuzz');
    } else if (divTres === true && divCinco === false) {
      resultados.push('fizz');
    } else resultados.push('buzz');
    divTres = false;
    divCinco = false;
  }
  return resultados;
}

// Desafio 9
function encode(str) {  
  let trataStr = str.split('');

  for (let i = 0; i < trataStr.length; i += 1) {
    if (trataStr[i] === 'a'){
      trataStr[i] = '1';
    } else if (trataStr[i] === 'e'){
      trataStr[i] = '2';
    } else if (trataStr[i] === 'i'){
      trataStr[i] = '3';
    } else if (trataStr[i] === 'o'){
      trataStr[i] = '4';
    } else if (trataStr[i] === 'u'){
      trataStr[i] = '5';
    }
  }
  str = trataStr.join('');
  return (str);
}

function decode(str) {
  let trataStr = str.split('');

  for (let i = 0; i < trataStr.length; i += 1) {
    if (trataStr[i] === '1'){
      trataStr[i] = 'a';
    } else if (trataStr[i] === '2'){
      trataStr[i] = 'e';
    } else if (trataStr[i] === '3'){
      trataStr[i] = 'i';
    } else if (trataStr[i] === '4'){
      trataStr[i] = 'o';
    } else if (trataStr[i] === '5'){
      trataStr[i] = 'u';
    }
  }
  str = trataStr.join('');
  return (str);
  
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
