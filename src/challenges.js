// Desafio 1
function compareTrue(v1, v2) {
  if(v1 === true && v2 === true) {
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
function splitSentence(str) {
  let array = str.split(" ");
  return array;
}

// Desafio 4
function concatName(names) {
  let uName = names[names.length - 1];
  let pName = names[0];
return result = uName + ", " + pName
}

// Desafio 5
function footballPoints() {
  // seu código aqui
}

// Desafio 6
function highestCount(numeros) {
  // função recebe uma arrey de números
  // retorne quantas vezes o MAIOR deles se repete
  // percorrer o array
  // contar o maior número em um laço de repetição
  // definir uma let para armazenar o maior número contar qtas vezes ele aparece

  let maiorNumero = numeros[0];
  let soma = 1;

  for(let index = 1; index < numeros.length; index += 1){

  }


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
