// Desafio 1
function compareTrue(a, b) {
  if (a === true && b === true) {
    return true;
  } if (a === false || b === false) {
    return false;
  }
}
// Se A e B forem verdadeiros, retorna verdadeiro.
// Se A ou B forem falsos, retorna falso.

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
// nos possibilita dividir strings e transformar em array.

// Desafio 4
function concatName(listaDeNomes) {
  let firstName = listaDeNomes[0]; // índice do primeiro elemento do array.
  let lastName = listaDeNomes[listaDeNomes.length - 1]; // pega o tamanho do array e subtrai um para pegar índice do último item. REFERENCIA: https://medium.com/@rodrigoum/3-maneiras-de-pegar-o-primeiro-e-%C3%BAltimo-elemento-de-um-array-com-javascript-56e92e6bf3f4
  let concatenacao = [lastName + ', ' + firstName]; // juntando o primeiro e o ultimo.
  concatenacao = concatenacao.toString(''); // retorna como uma string.
  return concatenacao;
}

// Desafio 5
function footballPoints(wins, ties) {
  let calculoPontuacao = (wins * 3) + (ties * 1); // calcula o numero de vitorias vezes a pontuacao (3) mais numero de empates vezes a pontuacao (1).
  return calculoPontuacao;
}

// Desafio 6
function highestCount(numbers) {
  let biggestNumber = numbers[0];
  let count = 1;
  for (let index = 1; index < numbers.length; index += 1) {
    if (numbers[index] > biggestNumber) {
      biggestNumber = numbers[index];
      count = 1;
    } else if (numbers[index] === biggestNumber) {
      count += 1;
    }
  }
  return count;
}
// A cada repetição do Loop, irá verificar se o número percorrido no array e maior que o maior numero inicializado, se verdadeiro ele armazena na variável count.

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let resultado = 0;
  if (Math.abs(cat1 - mouse) < Math.abs(cat2 - mouse)) {
    resultado = 'cat1';
  } else if (Math.abs(cat2 - mouse) < Math.abs(cat1 - mouse)) {
    resultado = 'cat2';
  } else if (Math.abs(cat2 - mouse) === Math.abs(cat1 - mouse)) {
    resultado = 'os gatos trombam e o rato foge';
  }
  return resultado;
}
// utilizacao do Math.abs para obter o numero absoluto das operacoes dentro do if.(Dica Slack)

// Desafio 8
function fizzBuzz(numbers) {
  let output = [];
  for (let count = 0; count < numbers.length; count += 1) {
    if (numbers[count] % 3 === 0 && numbers[count] % 5 !== 0) {
      output.push('fizz');
    } else if (numbers[count] % 5 === 0 && numbers[count] % 3 !== 0) {
      output.push('buzz');
    } else if (numbers[count] % 15 === 0) {
      output.push('fizzBuzz');
    } else {
      output.push('bug!');
    }
  }
  return output;
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
