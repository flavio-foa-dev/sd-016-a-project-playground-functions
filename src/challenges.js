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

// Desafio 7
function catAndMouse( mouse, cat1, cat2) {
  let distCat1 = Math.abs( mouse - cat1 );
  let distCat2 = Math.abs( mouse - cat2 );

  if( distCat1 < distCat2){
    return "cat1";
  }else if ( distCat2 < distCat1 ) {
    return "cat2";
  }else return "os gatos trombam e o rato foge";
}

// Desafio 8
function fizzBuzz( arrayNumbers ) {
  let arrayResult = [];

  for ( let index = 0; index < arrayNumbers.length; index += 1 ) {
    let div3 = (arrayNumbers[index] % 3);
    let div5 = (arrayNumbers[index] % 5);
    
    if ( div3 === 0 && div5 === 0){
      arrayResult.push("fizzBuzz");
    }
    else if ( div3 === 0 &&  div5 != 0 ) {
      arrayResult.push("fizz");
    }
    else if ( div3 != 0 &&  div5 === 0 ) {
      arrayResult.push("buzz");
    }
    else{
      arrayResult.push("bug!");
    }

  }

  return arrayResult;
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
