// Desafio 1
function compareTrue(value1, value2) {
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
function calcArea(base, height) {
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

  let lastName = names[names.length - 1];
  let firstName = names[0];
  return newNames = lastName + ", " + firstName
}

// Desafio 5
function footballPoints(wins, ties) {
  // Criar uma função que receba o número de vitórias (wins) e empates (ties).
  // Irá RETORNAR o número de pontos que o time fez no campeonato.
  // Cada vitória vale 3 pontos e cada empate vale 1 ponto.

  let winsPoints = wins * 3;
  let endGame = winsPoints + ties;
  return endGame
}

// Desafio 6
function highestCount(numbers) {
  // Temos um array de números (numbers)
  // RETONARÁ a quantidade de VEZES que o MAIOR número do array irá se repetir.

  let highestNumber = numbers[0]
  let sum = 1

  for (let index = 1; index < numbers.length; index += 1) {
    if (numbers[index] > highestNumber) {
      highestNumber = numbers[index]
      sum = 1
    } else if (numbers[index] === highestNumber) {
      sum += 1
    }
  }
  return sum

}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // Temos dois gatos e um rato na mesma reta, cada um representado por um número.
  // Nessa mesma reta o RATO está na frente.
  // CALCULAR qual a distância dos gatos até o rato e RETORNAR qual irá chegar nele primeiro.
  // Se os dois chegarem juntos RETORNAR a string "os gatos trombam e o rato foge".

  let distance1 = Math.abs(cat1 - mouse);
  let distance2 = Math.abs(cat2 - mouse);

    if (distance1 < distance2) {
      return "cat1"
  } else if (distance1 > distance2) {
      return "cat2"
  } else if (distance1 === distance2) {
      return "os gatos trombam e o rato foge"
}
}


// Desafio 8
function fizzBuzz(numbers) {
  // Irá receber um ARRAY de números e RETORNARÁ um novo array.
  // Para cada número de array que seja divisível por somente 3 retornará um novo array "fizz".
  // Para cada número de array que seja divisível por somente 5 retornará um novo array "buzz".
  // Caso seja divisível por 3 E 5 retornará "fizzBuzz".
  // Se não for divisível por 3 nem por 5 retornará "bug!"
   
  let newNumbers = [];

  for (let index = 0 ; index < numbers.length; index += 1) {
    if (numbers[index] % 3 === 0 && numbers[index] % 5 !== 0) {
    newNumbers.push("fizz");
  } else if (numbers[index] % 5 === 0 && numbers[index] % 3 !== 0) {
    newNumbers.push("buzz");
  } else if (numbers[index] % 3 === 0 && numbers[index] % 5 === 0) {
    newNumbers.push("fizzBuzz");
  } else {
    newNumbers.push("bug!");
  }
}
return newNumbers
}

// Desafio 9
function encode(arr) {
  // Ao receber uma STRING como parâmetro deverá trocar todas as vogais minúsculas por números.
  // De acordo com o formato à seguir:
  // a - 1
  // e - 2
  // i - 3
  // o - 4
  // u - 5

  const newArr = arr.split('');
  for (let index = 0; index < arr.length; index += 1) {
    if (newArr[index] === 'a') {
      newArr.splice(index, 1, '1')
    } else if (newArr[index] === 'e') {
      newArr.splice(index, 1, '2')
    } else if (newArr[index] === 'i') {
      newArr.splice(index, 1, '3')
    } else if (newArr[index] === 'o') {
      newArr.splice(index, 1, '4')
    } else if (newArr[index] === 'u') {
      newArr.splice(index, 1, '5')
    }
  }
  return newArr.join('')
} 
function decode(arr) {
  // Ao receber uma STRING como parâmetro deverá trocar todos números por vogais minúsculas.
  // De acordo com o formato à seguir:
  // 1 - a
  // 2 - e
  // 3 - i
  // 4 - o
  // 5 - u

  const newArr = arr.split('');
  for (let index = 0; index < arr.length; index += 1) {
    if (newArr[index] === '1') {
      newArr.splice(index, 1, 'a')
    } else if (newArr[index] === '2') {
      newArr.splice(index, 1, 'e')
    } else if (newArr[index] === '3') {
      newArr.splice(index, 1, 'i')
    } else if (newArr[index] === '4') {
      newArr.splice(index, 1, 'o')
    } else if (newArr[index] === '5') {
      newArr.splice(index, 1, 'u')
    }
  }
  return newArr.join('')
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
