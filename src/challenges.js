// Desafio 1
function compareTrue(a, b) {
  if (a === true && b === true) {
    return true;
  } else {
    return false;
  }
}
// Se A e B forem verdadeiros, retorna verdadeiro.
// Se A ou B não forem verdadeiros, retorna falso.

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}
// Quando chamarmos a função, passaremos os valores de base e altura para que ele retorne o valor da área.

// Desafio 3
function splitSentence(frase) {
  return frase.split(' ');
}
// A função splitSentence recebe um valor, sendo este a frase que queremos dividir e transformar em array, para isso usamos o metodo split, que em JavaScript
// nos possibilita dividir strings.

console.log(splitSentence('go Trybe'));

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
