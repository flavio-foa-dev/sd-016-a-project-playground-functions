// Desafio 1
function compareTrue(x, y) {
  if (x === true && y === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(text) {
  return text.split(' ');
}

// Desafio 4
function concatName(text) {
  return `${text[text.length - 1]}, ${text[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + ties;
}

// Desafio 6
function highestCount(numbers) {
  let count = 0;
  let highestNumber = Math.max(...numbers);
  for (let x in numbers) {
    if (numbers[x] === highestNumber) count += 1;
  }
  return count;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanceCat1;
  let distanceCat2;

  distanceCat1 = cat1 - mouse;
  if (mouse > cat1) distanceCat1 = mouse - cat1;

  distanceCat2 = cat2 - mouse;
  if (mouse > cat2) distanceCat2 = mouse - cat2;

  if (distanceCat1 > distanceCat2) return 'cat2';
  if (distanceCat2 > distanceCat1) return 'cat1';
  return 'os gatos trombam e o rato foge';
}

// Desafio 8

function testValue(element) {
  if (element % 3 === 0 && element % 5 === 0) return 'fizzBuzz';
  if (element % 3 === 0) return 'fizz';
  if (element % 5 === 0) return 'buzz';
  return 'bug!';
}

function fizzBuzz(numbers) {
  let text = [];
  for (let element of numbers) {
    text.push(testValue(element));
  }
  return text;
}

// Desafio 9

function isVowel(letter) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  return vowels.includes(letter);
}

function isNumber(char) {
  const numbers = ['1', '2', '3', '4', '5'];
  return numbers.includes(char);
}

function changeVowels(letter) {
  const dictionary = {
    a: '1',
    e: '2',
    i: '3',
    o: '4',
    u: '5',
  };

  return dictionary[letter];
}

function changeNumbers(char) {
  const dictionary = {
    1: 'a',
    2: 'e',
    3: 'i',
    4: 'o',
    5: 'u',
  };

  return dictionary[char];
}

function encode(text) {
  for (let i = 0; i < text.length; i += 1) {
    if (isVowel(text.charAt(i)) === true) {
      text = text.replace(text.charAt(i), changeVowels(text.charAt(i)));
    }
  }

  return text;
}
function decode(text) {
  for (let i = 0; i < text.length; i += 1) {
    if (isNumber(text.charAt(i)) === true) {
      text = text.replace(text.charAt(i), changeNumbers(text.charAt(i)));
    }
  }

  return text;
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
