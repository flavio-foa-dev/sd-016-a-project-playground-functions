// Desafio 1
function compareTrue(parm1, parm2) {
  if (parm1 === true && parm2 === true) {
    return true;
  } return false;
}

// Desafio 2
function calcArea(base, height) {
  return ((base * height) / 2);
}

// Desafio 3
function splitSentence(phrase) {
  return phrase.split(' ');
}

// Desafio 4
function concatName(phrase) {
  return `${phrase[phrase.length - 1]}, ${phrase[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  return 3 * wins + ties;
}

// Desafio 6
function highestCount(numbers) {
  numbers.sort((a, b) => a - b).reverse();
  let count = 0;
  for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[0] === numbers[i]) {
      count += 1;
    }
  }
  return count;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let catM1 = Math.abs(cat1 - mouse);
  let catM2 = Math.abs(cat2 - mouse);
  let menor = '';
  if (catM2 > catM1) {
    menor = 'cat1';
  } else if (catM2 < catM1) {
    menor = 'cat2';
  } else {
    menor = 'os gatos trombam e o rato foge';
  }
  return menor;
}

// Desafio 8
function fizzBuzz(parm) {
  let string = [];
  for (let i in parm) {
    if (parm[i] % 3 === 0 && parm[i] % 5 === 0) {
      string.push('fizzBuzz');
    } else if (parm[i] % 3 === 0) {
      string.push('fizz');
    } else if (parm[i] % 5 === 0) {
      string.push('buzz');
    } else {
      string.push('bug!');
    }
  }
  return string;
}

// Desafio 9
function encode(phrase) {
  let phrase2 = phrase.split('');
  for (let i in phrase2) {
    switch (phrase2[i]) {
    case 'a': phrase2[i] = 1;
      break;
    case 'e': phrase2[i] = 2;
      break;
    case 'i': phrase2[i] = 3;
      break;
    case 'o': phrase2[i] = 4;
      break;
    case 'u': phrase2[i] = 5;
      break;
    default:
      break;
    }
  }
  return phrase2.join('');
}

function decode(phrase) {
  let phrase2 = phrase.split('');
  for (let j in phrase2) {
    switch (phrase2[j]) {
    case '1':
      phrase2[j] = 'a';
      break;
    case '2':
      phrase2[j] = 'e';
      break;
    case '3':
      phrase2[j] = 'i';
      break;
    case '4':
      phrase2[j] = 'o';
      break;
    case '5':
      phrase2[j] = 'u';
      break;
    default:
      break;
    }
  }
  return phrase2.join('');
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
