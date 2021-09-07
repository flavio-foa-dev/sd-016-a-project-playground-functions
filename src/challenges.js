// Desafio 1
function compareTrue(value1, value2) {
  return (value1 === true && value2 === true);
}// Refactory By ViniciusTnK

// Desafio 2
function calcArea(base, height) {
  return base * height * 0.5;
}

// Desafio 3
function splitSentence(word) {
  let str = '';
  let splited = [];
  for (let i = 0; i < word.length; i += 1) {
    if (word[i] === ' ') {
      splited.push(str);
      str = '';
    } else {
      str += word[i];
    }
  }
  splited.push(str);
  return splited;
}

// Desafio 4
function concatName(array) {
  let virgula = ', ';
  return array[array.length - 1] + virgula + array[0];
}// Refactory By ViniciusTnK

// Desafio 5
function footballPoints(wins, ties) {
  return wins * 3 + ties;
}

// Desafio 6
function highestCount(arrayNum) {
  let maior = arrayNum[0];
  let contador = 0;
  for (let i = 0; i < arrayNum.length; i += 1) {
    if (arrayNum[i] > maior) {
      maior = arrayNum[i];
      contador = 1;
    } else if (arrayNum[i] === maior) {
      contador += 1;
    }
  }
  return contador;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if (cat1 === 0) {
    return 'os gatos trombam e o rato foge';
  } if (cat2 === 0) {
    return 'os gatos trombam e o rato foge';
  } if (cat1 > cat2) {
    return 'cat2';
  } if (cat1 < cat2) {
    return 'cat1';
  }
}

// Desafio 8
function fizzBuzz(array) {
  let array2=[];
    for (let i=0; i < array.length; i += 1) {
      if(array[i] % 3 === 0 & array[i] % 5 === 0){
        array2.push('fizzBuzz');
      }else if(array[i] % 3 === 0){
        array2.push('fizz');
      } else if(array[i] % 5 === 0){
          array2.push('buzz');
      }else if(array[i] % 3,5){
        array2.push('bug!')
      }
  }
    return array2;
}
// [2, 15, 7, 9, 45] : ['bug!', 'fizzBuzz', 'bug!', 'fizz', 'fizzBuzz']
//            [7, 9] : ['bug!', 'fizz']
//           [9, 25] : ['fizz', 'buzz']

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
