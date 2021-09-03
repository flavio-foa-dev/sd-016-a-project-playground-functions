// Desafio 1
function compareTrue(value1, value2) {
  if (value1 === true && value2 === true ) {
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
//console.log( calcArea( 2, 2) );

// Desafio 3
function splitSentence(oneString) {
  let words = oneString.split(" "); 
  // função .split permite seprarar o array passando qual o parâmetro quer localizar
  // no caso o espaço vazio (" ");
  return words;
}
// console.log( splitSentence( "Quero saber o numero de palavras") );


// Desafio 4
function concatName(nameList) {
  let firstName = nameList[0];
  let lastName = nameList[nameList.length - 1];
  return (lastName  + ', ' + firstName);
}

// Desafio 5
function footballPoints(wins, ties) {
  let scoreTotal = (wins * 3) + ties;
  return scoreTotal;
}

// Desafio 6
function highestCount(myList) {
  
  let theBiggest = -1;
  let howMany = 0
  
  for (let index = 0; index < myList.length; index += 1) {
    if (myList[index] > theBiggest) { 
      // se o meu valor nessa posição for maior que zero
      theBiggest = myList[index];
    }
  }
  // return theBiggest;

  for (let i= 0; i < myList.length; i += 1) {
    if ( theBiggest === myList[i]) howMany += 1;
  }
  return howMany;

}

// let meu = [-2, -2, -1];
// console.log (highestCount (meu) );




// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz(inputArray) {
  let returnArray = [];

  for (let i = 0; i < inputArray.length; i+= 1) {
    if ( inputArray[i] % 2 === 0) {
      returnArray.push ('bug!');
    } else if (inputArray[i] % 3 === 0 && inputArray[i] % 5 ===0) {
      returnArray.push('fizzBuzz');
    } else if ( inputArray[i] % 3 === 0 ) {
      returnArray.push('fizz');
    } else if ( iputArray[i] % 5 === 0) {
      returnArray.push('buzz');
    } else {
      returnArray.push('bug!'); // o numero 7 nao passa aqui
    }
  }

  return returnArray;
}
let meuTeste = [2, 15, 7, 9, 45];
console.log(fizzBuzz (meuTeste));


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
