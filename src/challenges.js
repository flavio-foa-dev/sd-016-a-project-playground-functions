// Desafio 1
function compareTrue(valor1, valor2) {
  if (valor1 === true && valor2 === true){
    return true
  }else{
    return false
  }
}

// Desafio 2
function calcArea(base, height) {
  let calculo = (base * height) / 2;
  return calculo
}

// Desafio 3
function splitSentence() {
  // seu código aqui
}

// Desafio 4
function concatName() {
  // seu código aqui
}

// Desafio 5
function footballPoints(wins, ties) {
  let calc = (wins * 3) + (ties *1)
  return calc
}

// Desafio 6
function highestCount(arr) {
    let highestNumber = arr[0];
    let sum = 1;
    for (let index = 1; index < arr.length; index += 1){
        if (arr[index] > highestNumber){
            
            highestNumber = arr[index];
            
            sum = 0;
            
            sum += 1;
            
        }else if ( arr[index] === highestNumber){
            sum += 1;
        }
    }
    return sum
}

// Desafio 7
function catAndMouse() {
  
}

// Desafio 8
function fizzBuzz(arr) {
      let array = [];
    for (let index = 0; index < arr.length; index += 1){
        if (arr[index] % 3 === 0 && arr[index] % 5 === 0){
            array.push('fizzBuzz');
        }else if (arr[index] % 5 === 0){
            array.push('buzz');
        }else if (arr[index] % 3 === 0){
            array.push('fizz');
        }else{
            array.push('bug!')
        }
    }
    return array
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
