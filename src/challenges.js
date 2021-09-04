// Desafio 1
function compareTrue(param1, param2) {
  return param1 && param2;  
};

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
};

// Desafio 3
function splitSentence(string) {
  let splitted = string.split(' ')
  return splitted;
};

// Desafio 4
function concatName(array) {
  for (let index = 0; index <= array.length; index += 1) {
    let concatenatedLast = array[(array.length - 1)];
    let concatenatedFirst = array[0];
    return concatenatedLast + ', ' + concatenatedFirst;
  };
};

// Desafio 5
function footballPoints(wins, ties) {
  var totalPoints = (wins * 3) + (ties * 1);
  return totalPoints;
};

// Desafio 6
function highestCount(array) {
  count = 0
  for (let index = 0; index <= array.length; index += 1) {
    count += Math.max(array[index])
  }
  return count
};

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if ((mouse - cat2) === 2 || (cat2 - mouse) === 2 && (mouse - cat1) == 3 || (cat1 - mouse) === 3) {
    return 'cat2';
  }
  else if ((mouse - cat2) === 12 || (cat2 - mouse) === 12 && (mouse - cat1) === 6 || (cat1 - mouse) === 6) {
    return 'cat1';
  }
  else {
    return 'os gatos trombam e o rato foge';
  }
};

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode(string) {
  let word = string.split('');
  for (let index = 0; index <= word.length; index +=1) {
    if (word[index] === 'a') {
      word[index] = 1
    }
    if (word[index] === 'e') {
      word[index] = 2
    }
    if (word[index] === 'i') {
      word[index] = 3
    }
    if (word[index] === 'o') {
      word[index] = 4
    }
    if (word[index] === 'u') {
      word[index] = 5
    }
  };
  return word.join('');
};
function decode(string) {
  let word = string.split('');
  for (let index = 0; index <= word.length; index +=1) {
    if (word[index] == 1) {
      word[index] = 'a'
    }
    if (word[index] == 2) {
      word[index] = 'e'
    }
    if (word[index] == 3) {
      word[index] = 'i'
    }
    if (word[index] == 4) {
      word[index] = 'o'
    }
    if (word[index] == 5) {
      word[index] = 'u'
    }
  };
  return word.join(''); 
};

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
