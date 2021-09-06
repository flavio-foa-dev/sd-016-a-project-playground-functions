// Desafio 1
function compareTrue(value1, value2) {
  // seu código aqui
  if (value1 === true && value2 === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(sentence) {
  // seu código aqui
  let words = sentence.split(' ');
  return words;
}

// Desafio 4
function concatName(names) {
  // seu código aqui
  let lastIndex = names.length - 1;
  return `${names[lastIndex]}, ${names[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  let eachWin = 3;
  let eachTie = 1;

  return ((wins * eachWin) + (ties * eachTie));
}

// Desafio 6
function highestCount(numbers) {
  // seu código aqui
  let highestNumber = numbers[0];
  let counter = 0;

  for (let i = 0; i <= numbers.length - 1; i += 1) {
    if (numbers[i] > highestNumber) {
      highestNumber = numbers[i];
    }
  }
  for (let j = 0; j <= numbers.length - 1; j += 1) {
    if (highestNumber === numbers[j]) {
      counter += 1;
    }
  }
  return counter;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  let cat1Distance = mouse - cat1;
  let cat2Distance = mouse - cat2;

  if (cat1Distance < 0) cat1Distance *= -1;
  if (cat2Distance < 0) cat2Distance *= -1;

  if (cat1Distance < cat2Distance) {
    return 'cat1';
  }
  if (cat1Distance > cat2Distance) {
    return 'cat2';
  }
  return 'os gatos trombam e o rato foge';
}

catAndMouse(1, 0, 2);

// Desafio 8
function fizzBuzz(numbers) {
  // seu código aqui
  let array = [];

  for (let i = 0; i <= numbers.length - 1; i += 1) {
    if (numbers[i] % 3 === 0 && numbers[i] % 5 === 0) {
      array.push('fizzBuzz');
    } else if (numbers[i] % 3 === 0) {
      array.push('fizz');
    } else if (numbers[i] % 5 === 0) {
      array.push('buzz');
    } else {
      array.push('bug!');
    }
  }
  return array;
}

// Desafio 9
function encode(string) {
  // seu código aqui
  let fixedSring = string.toLowerCase();
  let newString = '';
  let array = [];

  for (let key in fixedSring) {
    if (fixedSring[key] === 'a') {
      array.push('1');
    } else if (fixedSring[key] === 'e') {
      array.push('2');
    } else if (fixedSring[key] === 'i') {
      array.push('3');
    } else if (fixedSring[key] === 'o') {
      array.push('4');
    } else if (fixedSring[key] === 'u') {
      array.push('5');
    } else {
      array.push(fixedSring[key]);
    }
  }

  newString = array.join('');
  return newString;
}

function decode(string) {
  // seu código aqui
  let fixedSring = string.toLowerCase();
  let newString = '';
  let array = [];

  for (let key in fixedSring) {
    if (fixedSring[key] === '1') {
      array.push('a');
    } else if (fixedSring[key] === '2') {
      array.push('e');
    } else if (fixedSring[key] === '3') {
      array.push('i');
    } else if (fixedSring[key] === '4') {
      array.push('o');
    } else if (fixedSring[key] === '5') {
      array.push('u');
    } else {
      array.push(fixedSring[key]);
    }
  }

  newString = array.join('');
  return newString;
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
