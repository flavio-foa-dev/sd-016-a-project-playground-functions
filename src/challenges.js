// Desafio 1
function compareTrue(a, b) {
  if (a && b) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(string) {
  let space = ' ';
  let array = string.split(space);
  return array;
}

// Desafio 4
function concatName(array) {
  let string = ' ';
  for (let i = array.length - 1; i >= 0; i -= 1) {
    string = array[array.length - 1] + ", " + array[0];
  }
  return string;
}

// Desafio 5
function footballPoints(wins, ties) {
  wins = wins * 3;
  ties = ties * 1;
  return wins + ties;
}

// Desafio 6
function highestCount(inteiros) {
  let maior = inteiros[0];
  let indice = [];
  for (let i = inteiros[0]; i < inteiros.length; i += 1) {
    if (inteiros[i] > maior) {
      maior = inteiros[i];
    } 
  } 
  for (let i = inteiros[0]; i < inteiros.length; i += 1) {
    if (inteiros[i] === maior) {
      indice.push(maior);
    }
  }
  return indice.length; 
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanciaCat1 = cat1 - mouse; 
  let distanciaCat2 = cat2 - mouse;
  if (Math.abs(distanciaCat1) < Math.abs(distanciaCat2)) {
    return 'cat1';
  } else if (Math.abs(distanciaCat2) < Math.abs(distanciaCat1)) {
    return 'cat2';
  } else {
    return 'os gatos trombam e o rato foge';
  }
}

// Desafio 8
function fizzBuzz(array) {
  let resultFizzBuzz = [];
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] % 3 === 0 && array[i] % 5 === 0) {
      resultFizzBuzz.push('fizzBuzz');  
    } else if (array[i] % 5 === 0) {
      resultFizzBuzz.push('buzz');
    } else if (array[i] % 3 === 0) {
      resultFizzBuzz.push('fizz');
    } else {
      resultFizzBuzz.push('bug!');
    }
  }
return resultFizzBuzz;
}
// Desafio 9
function encode(string) {
  let stringEncode = [];
  for (let i = 0; i < string.length; i += 1) {
    switch (string[i]) {
    case 'a':
      stringEncode.push(1);
      break;
    case 'e':
      stringEncode.push(2);
      break;
    case 'i':
      stringEncode.push(3);
      break;
    case 'o':
      stringEncode.push(4);
      break;
    case 'u':
      stringEncode.push(5);
      break;
    default:
      stringEncode.push(string[i]);
    }
  }
  return stringEncode.join('');
}
function decode(string) {
  let stringDecode = [];
  for (let i = 0; i < string.length; i += 1) {
    switch (string[i]) {
    case '1':
      stringDecode.push('a');
      break;
    case '2':
      stringDecode.push('e');
      break;
    case '3':
      stringDecode.push('i');
      break;
    case '4':
      stringDecode.push('o');
      break;
    case '5':
      stringDecode.push('u');
      break;
    default:
      stringDecode.push(string[i]);
    }
  }
  return stringDecode.join('');
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
