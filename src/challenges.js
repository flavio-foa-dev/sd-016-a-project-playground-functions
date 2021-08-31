// Desafio 1
function compareTrue( value1, value2) {

// Retornar true se ambos os valores forem verdadeiros;
// Retornar false se um ou ambos os parâmetros forem falsos.
return (value1 && value2)

}

// Desafio 2
function calcArea( base, height) {
  let area = (base*height) / 2;
  return area;
}

// Desafio 3
function splitSentence( str ) {
  let splittedSentense = str.split(' ');
  return splittedSentense;
}

// Desafio 4
function concatName( strArray ) {
  let lastStr = strArray[strArray.length-1];
  let firstStr = strArray[0];

  let strResult = lastStr.concat( ', ' + firstStr );
  
  //console.log(strResult);

  return strResult;
}

// Desafio 5
function footballPoints( wins, ties ) {
  let result = ( wins*3 ) + (ties);

  return result;
}

// Desafio 6
function highestCount( arrayNumbers ) {
  // localiza o numero maior
  let maxValue = arrayNumbers[0];
  let indexMaxValue = 0;
  let index = 0;
  let countEqual = 0;

  for( index = 0; index< arrayNumbers.length; index += 1){
    if( maxValue < arrayNumbers[index]){
      maxValue = arrayNumbers[index];
      indexMaxValue = index;
    }
  }
  console.log( indexMaxValue, maxValue );
  // Nesse ponto ja sabe-se onde está o numero maior
  // então, basta contar quantos tem iguais.

  for( let pos = 0; pos < arrayNumbers.length; pos += 1){
    if ( maxValue === arrayNumbers[pos] ){
      countEqual += 1;
    }
  }
  
  return countEqual;

}
let testArray = [9, 9, 2, 3, 9, 5, 7];
console.log ( highestCount(testArray) );


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
