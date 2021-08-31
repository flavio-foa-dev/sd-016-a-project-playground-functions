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
function highestCount(numeros) {
  // função recebe um array de numeros
  // retorna a quantidade de vezes que o maior numero aparece
  // pecorrer o array e contar o maior numero em um laço de repetição
  // definir que o primeiro indice é o maior número e definir uma variável para a quantidade de vezes que aparece: repetido
  let maiorNumero = numeros[0];
  let repetido = 1;
  for (let contador = 1; contador < numeros.length; contador += 1) {
    // se o numero posição contador(1) for maior que o maior numero(numero no primeiro indice)
    if (numeros[contador] > maiorNumero) {
      maiorNumero = numeros[contador];
      repetido = 1;
    } else if (numeros[contador] === maiorNumero) {
      repetido += 1;
    }
  }
  return repetido;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // calcular a distância dos gatos em comparação ao rato
  // informar qual está mais próximo ao rato
  // informar, caso ambos os estejam na mesma posição, se batem
  let distancia1 = Math.abs(mouse - cat1);
  let distancia2 = Math.abs(mouse - cat2);
  if (distancia1 < distancia2) {
    return 'cat1';
  } if (distancia1 > distancia2) {
    return 'cat2';
  } if (distancia1 === distancia2) {
    return 'os gatos trombam e o rato foge';
  }
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
