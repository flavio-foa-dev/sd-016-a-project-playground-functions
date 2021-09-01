// Desafio 1
function compareTrue(param1, param2) {
  if (param1 === true && param2 === true){
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2
}

// Desafio 3
function splitSentence(str) {
  return str.split(" ");
}

// Desafio 4
function concatName(nomes) {
  ordemNomes = nomes[nomes.length -1] + ', ' + nomes[0];
  return ordemNomes
}

// Desafio 5
function footballPoints(wins, ties) {
  wins = wins * 3;
  ties = ties * 1;
  return wins + ties
}

// Desafio 6
function highestCount(numeros) {
let result = 0;
let contador = 0;

for (index = 0; index <= numeros.length; index += 1) {
    if (result < numeros[index]) {
        result = numeros[index];
     
    } 
    if (numeros[index] < 0) {
      result = numeros[index];
    }
}    
for (indexP = 0; indexP < numeros.length; indexP += 1) {
    if (result === numeros[indexP]) {
        contador += 1;
    }
}
 return contador
} 

// Desafio 7
function catAndMouse() {
  
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode(str) {
  let newString = str.split("");

  for (let index in newString) {
    if (newString[index] === 'a') {
      newString[index] = '1';
    } else if (newString[index] === 'e') {
      newString[index] = '2';
    } else if (newString[index] === 'i') {
      newString[index] = '3';
    } else if (newString[index] === 'o') {
      newString[index] = '4'; 
    } else if (newString[index] === 'u') {
      newString[index] = '5';
    }
  } 
   return newString.join('');
}
function decode(str) {
  let newString = str.split("");

  for (let index in newString) {
    if (newString[index] === '1') {
      newString[index] = 'a';
    } else if (newString[index] === '2') {
      newString[index] = 'e';
    } else if (newString[index] === '3') {
      newString[index] = 'i';
    } else if (newString[index] === '4') {
      newString[index] = 'o'; 
    } else if (newString[index] === '5') {
      newString[index] = 'u';
    }
  }  
  return newString.join('');
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
