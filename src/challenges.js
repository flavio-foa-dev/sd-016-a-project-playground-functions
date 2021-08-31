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
  // seu código aqui
}

// Desafio 6
function highestCount() {
  // seu código aqui
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
