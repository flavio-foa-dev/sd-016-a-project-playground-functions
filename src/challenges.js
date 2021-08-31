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
console.log(concatName(1, 2, 3, 4))
// Desafio 5
function footballPoints() {
 
}

// Desafio 6
function highestCount() {
 
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
