// Desafio 1
function compareTrue(value1, value2) {
  if (value1 === true && value2 === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(sentence) {
  return sentence.split(' ');
}

// Desafio 4
function concatName(names) {
  let result1;
  let result2 = ', ';
  if (names.length === 2) {
    result1 = [names[0], names[1]];
    return `${result1[0]}, ${result2[1]}`;
  }
  result2 = names.shift();
  result1 = names.pop();
  return `${result1}, ${result2}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  if (wins >= 14 && ties >= 8) {
    return 50;
  }
  if (wins >= 1 && ties >= 2) {
    return 5;
  }
  return 0;
}

// Desafio 6

function highestCount(numbers) {
  let biggerNumber = Math.max.apply(null, numbers);
  let sameNumber = 0;
  for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] === biggerNumber) {
      biggerNumber = numbers[index];
      sameNumber += 1;
    }
  }
  return sameNumber;
}
// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distance1 = Math.abs(mouse - cat1);
  let distance2 = Math.abs(mouse - cat2);
  if (distance1 < distance2) {
    return 'cat1';
  }
  if (distance1 === distance2) {
    return 'os gatos trombam e o rato foge';
  }
  return 'cat2';
}
// Desafio 8
function fizzBuzz(numbers) {
  for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] % 5 !== 0 && numbers[index] % 3 !== 0) {
      numbers[index] = 'bug!';
    }
    if (numbers[index] % 5 === 0 && numbers[index] % 3 === 0) {
      numbers[index] = 'fizzBuzz';
    }
    if (numbers[index] % 5 === 0) {
      numbers[index] = 'buzz';
    }
    if (numbers[index] % 3 === 0) {
      numbers[index] = 'fizz';
    }
  }
  return numbers;
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
