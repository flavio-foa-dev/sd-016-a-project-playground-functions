// Desafio 1
function compareTrue(a,b) {
    if (a === true && b === true){
// && = ambos necessariamente são true
      return true
// true e false, false e true, false e false -> outras possibilidades para ser false
    } 
    return false
}
const c = true;
const d = false;
const e = true;
const f = false;
console.log(compareTrue(d,c));
console.log(compareTrue(c,f));
console.log(compareTrue(c,e));

// Desafio 2
function calcArea(base, height) {
  let area = (base * height)/2;
  return area;  
}
console.log(calcArea(10,50));
console.log(calcArea(5,2));
console.log(calcArea(51,1));

// Desafio 3
function splitSentence() {
  // seu código aqui
}

// Desafio 4
function concatName() {
  // seu código aqui
}

// Desafio 5
function footballPoints() {
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
