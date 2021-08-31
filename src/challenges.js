// Desafio 1
function compareTrue(valor1, valor2) {
  // função que recebe dois valores
  // se ambos os valores forem verdadeiros, retorna true
  // se não, retorna false
  if (valor1 === true && valor2 === true) {
    return true;
  }
  return false;
}
// Desafio 2
function calcArea(base, height) {
  // reeber um valor chamado base e outro valor chamado height
  // receber o calculo da area do triangulo
  // área do triângulo = (base*altura)/2
  let areaTriangulo;
  areaTriangulo = (base * height) / 2;
  return areaTriangulo;
}

// Desafio 3
function splitSentence(string) {
  // função irá receber uma string
  // função retornará um array de strings, separados por cada espaço
  // definir a variavel que irá separar
  // retornar a variável
  let splitStr;
  splitStr = string.split(' ');
  return splitStr;
}

// Desafio 4
function concatName(arrayStrings) {
  // função recebe um array de string
  // retornar do array o último item e o primeiro, nesta ordem
  // definir uma variavel que pecorre o ultimo e o primeiro item da lista
  let firstString = arrayStrings[0];
  let lastString = [...arrayStrings].pop();
  // let concatenado = lastString + ', ' + firstString;
  let concatenado = `${lastString}, ${firstString}`;
  return concatenado;
}

// Desafio 5
function footballPoints(wins, ties) {
  // função que recebe o número de vitórias, chamado wins
  // função que recebe o número de empates, chamado ties
  // retornar a quantidade de pontos do time
  // criar variavel com as pontuações de vitória e empate.
  // criar variavel com a pontuação
  let win = 3;
  let tie = 1;
  let pontuacao;
  pontuacao = (win * wins) + (tie * ties);
  return pontuacao;
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
