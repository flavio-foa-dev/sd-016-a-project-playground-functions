// Desafio 1
function compareTrue(num1, num2) {
 if(num1 === true && num2 === true) {
   return true;
  }
   else {
     return false;
   }
}

// Desafio 2
function calcArea(base, height) {
 return (base * height)/2
}

// Desafio 3
function splitSentence() {
 
}

// Desafio 4
function concatName(concatName) {
  let i = concatName.length;
 return (concatName[i-1] + (", ") + concatName[0]);
}

// Desafio 5
function footballPoints(wins, ties) {
 return (wins*3 + ties);
}

// Desafio 6
function highestCount(array1){
  let maiorNumero = array1[0];
  let contador = 0;
  for(let i = 0; i < array1.length; i+=1){
    if(maiorNumero < array1[i]){
      maiorNumero = array1[i];
      contador = 1;
    }
    else if (maiorNumero === array1[i]){
      contador +=1;
    }
  }
  return contador;
}

// Desafio 7
function catAndMouse() {
 
}

// Desafio 8
function fizzBuzz() {
 
}

// Desafio 9
function encode() {
 
}
function decode() {
 
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
