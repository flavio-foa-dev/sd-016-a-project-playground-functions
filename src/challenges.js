// Desafio 1
function compareTrue(value1, value2) {
// se ambos os valores forem verdadeiros, devo retornar true
// se não, devo retornar false
if (value1 === true && value2 === true){
return true;
} else  {
  return false;
}
}

// Desafio 2
function calcArea(base, height) {
 let calculoArea = (base * height) / 2;
 return calculoArea;
}


// Desafio 3
function splitSentence(string) {
   let array = string.split(' ')

  // console.log(array)
  return array
}
splitSentence('foguete nao da re')

// Desafio 4
function concatName(array) {
    
  // console.log(array[0])

  let ultimoElementoDoArray = array.length -1

  // console.log(array[ultimoElementoDoArray])

  // console.log(ultimoElementoDoArray) 
  let primeiroUltimo = array[ultimoElementoDoArray] +','+' '+ array[0]

  return primeiroUltimo

}
concatName(['casa', 'mesa', 'cama', 'banho', 'Bruno', 'Trybe', 'Zaqueu'])

// Desafio 5
function footballPoints(wins, ties) {
  
let totalDePontos = (wins * 3) + ties
return totalDePontos


}

// Desafio 6
function highestCount(array) {
 // retornar o maior numero e a quantidade de vezes que ele se repete dentro do array
 // [9, 3, 1, 4, 9, 8, 7]
 let maiorNumero = array[0]
for (let index = 0; index < array.length; index += 1) {
  if (maiorNumero < array[index]) {
  
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
