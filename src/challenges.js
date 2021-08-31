// Desafio 1
function compareTrue(number1, number2) {
  // Compara dois valores se ambos são true;
  // Retorna com true se caso ambos sejam true e false para qualquer valor # true
  if (number1 === true && number2 === true) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  // função recebe valor base(base) e altura(height) de um triângulo
  // retorna o cálculo da sua área
  // fórmula da área de um triângulo (base * altura) / 2
  areaTriangle = (base * height) / 2;
  return areaTriangle
}

// Desafio 3
function splitSentence(stringSplit) {
  // função recebe uma string 
  // retorna uma array de strings separadas por cada espaço na string original.
  // let stringSplit ="go trybe foguete"
  // console.log(stringSplit)
  let space = ' ';
  let arrayString = stringSplit.split(space);
  return arrayString
}

// Desafio 4
function concatName(stringArray) {
  // função receber uma array de strings
  // retorna uma string com o formato `'ÚLTIMO ITEM, PRIMEIRO ITEM'`
  // independente do tamanho da array
  //let stringArray = ['Lucas', 'Cassiano', 'Ferraz', 'Paolillo'];
  lastIndex = stringArray.length-1;
  let stringConcat = stringArray[lastIndex]+stringArray[0];
 // console.log(stringConcat)
  return stringConcat
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
