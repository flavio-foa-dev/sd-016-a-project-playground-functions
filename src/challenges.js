// Desafio 1

function compareTrue (x, y) {
  if (x === true && y === true) {
      return true;
  } else if (x === true && y === false || x === false && y === true) {
      return false;        
  } else if (x === false && y === false) {
    return false;
  }
}


// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
  return area;
}


// Desafio 3
function splitSentence(str) {
  let array = str.split(" ");
  return array;
}

// Desafio 4
function concatName(arr) {
  let first = arr[0];
  let last = arr[arr.length - 1];
  let result = last + ", " + first;
  return result; 
}

// Desafio 5
function footballPoints(wins, ties) {
  let winsPoints = wins * 3;
  let finalPoints = winsPoints + ties;
  return finalPoints;
}

// Desafio 6
function highestCount(arr) {
  let maior = -100;
  for (let cont = 0; cont < arr.length; cont += 1){
    if (arr[cont] > maior) {
      maior = arr[cont]; 
    }
  }
  
  let contMaior = 0;

  for (let cont = 0; cont < arr.length; cont += 1) {
    if (arr[cont] === maior){
      contMaior += 1;
    }
  }

  return contMaior;
}


// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanceCat1;
  if (mouse < cat1) {
    distanceCat1 = cat1 - mouse;
  } else if (cat1 < mouse) {
    distanceCat1 = mouse - cat1;
  }

  let distanceCat2;
  if (mouse < cat2) {
    distanceCat2 = cat2 - mouse;
  } else if (cat2 < mouse) {
    distanceCat2 = mouse - cat2;
  }

  if (distanceCat1 > distanceCat2) {
    return 'cat2';
  } else if (distanceCat1 < distanceCat2) {
    return 'cat1';
  } else if (distanceCat1 === distanceCat2) {
    return 'os gatos trombam e o rato foge';
}
}

// Desafio 8
function fizzBuzz(numbers) {
  for (let cont = 0; cont < numbers.length; cont += 1) {
    if (numbers[cont] % 3 === 0 && numbers[cont] % 5 != 0) {
      numbers[cont] = 'fizz';
    } else if (numbers[cont] % 5 === 0 && numbers[cont] % 3 != 0) {
      numbers[cont] = 'buzz';
    } else if (numbers[cont] % 3 === 0 && numbers[cont] % 5 === 0) {
      numbers[cont] = 'fizzBuzz';
    } else {
      numbers[cont] = "bug!";
    }
  }

  return numbers;
}


// Desafio 9
function encode(string) {
let str = string.split('');

  for (let char in str) {
    if (str[char] === 'a') {
      str[char] = '1';
    } else if (str[char] === 'e') {
      str[char] = '2';
    } else if (str[char] === 'i') {
      str[char] = '3';
    } else if (str[char] === 'o') {
      str[char] = '4';
    } else if (str[char] === 'u') {
      str[char] = '5';
    }
  }
  string = str.join('');

  return string;
}


function decode(string) {
  let str = string.split('');

  for (let char in str) {
    if (str[char] === '1') {
      str[char] = 'a';
    } else if (str[char] === '2') {
      str[char] = 'e';
    } else if (str[char] === '3') {
      str[char] = 'i';
    } else if (str[char] === '4') {
      str[char] = 'o';
    } else if (str[char] === '5') {
      str[char] = 'u';
    }
  }

  string = str.join('');

  return string;
}

string = 'hi, there!';
console.log(encode(string));
console.log(decode(string));

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
