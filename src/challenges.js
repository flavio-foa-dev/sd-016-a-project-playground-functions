// Desafio 1
function compareTrue(value1 , value2) {
  // Uma função que possui DOIS valores.
  // Se os dois valores forem verdadeiros retona TRUE.
  // Se algum dos dois NÃO for retornar FALSE.

  if (value1 === true && value2 === true) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base , height) {
  // Uma função, calcArea, que tenha dois valores: base e height e que retorne o CÁLCULO da área.
  // Criar uma variável, area, que contenha o cálculo da (base * altura) / 2.
  // Fórmula da área do triângulo: (base * altura) / 2.
  let area = (base * height) / 2;
  return area
}

// Desafio 3
function splitSentence(sentence) {
  // Cria uma função que DIVIDA a frase (string) contida dentro da variável sentence.
  // Ela irá RETORNAR como um ARRAY de strings.
let newSentence = sentence.split(" ");
return newSentence
}

// Desafio 4
function concatName(names) {
  // A função possui um ARRAY de strings.
  // Ela irá RETORNAR uma nova string com o formato ÚLTIMO ITEM, PRIMEIRO ITEM.
  
  let lastName = names[names.length-1];
  let firstName = names[0];
  return newNames = lastName + ", " + firstName
}

// Desafio 5
function footballPoints(wins, ties) {
  // Criar uma função que receba o número de vitórias (wins) e empates (ties).
  // Irá RETORNAR o número de pontos que o time fez no campeonato.
  // Cada vitória vale 3 pontos e cada empate vale 1 ponto.

  let winsPoints = wins * 3;
  let tiesPoints = ties * 1;
  let endGame = winsPoints + tiesPoints;
  return endGame
}

// Desafio 6

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
