// Desafio 1
function compareTrue(value1, value2) {
  if (value1 && value2 === true) {
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
function splitSentence(strings) {
  return strings.split(' ');
}

// Desafio 4
function concatName(array) {
 return array[array.length -1] + ', ' + array[0];
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + (ties * 1);
}

// Desafio 6
function highestCount(array) {
  let bigger = Math.max(...array);
  let times = Number();
  for (let i in array) {
   array[i] === bigger ? times += 1 : '';
  }
  return times;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanceCat1 = Math.abs(mouse - cat1);
  let distanceCat2 = Math.abs(mouse - cat2);
  if (distanceCat1 === distanceCat2){
    return "os gatos trombam e o rato foge";
    } else if (distanceCat1 < distanceCat2) {
    return 'cat1';
    } else {
    return 'cat2';
  }
}

// Desafio 8
function fizzBuzz(array) {
  let array2 = [];
  for (let i = 0; i < array.length; i += 1) {
    if(array[i] % 3 != 0 && array[i] % 5 != 0){
      array2.push('bug!');
    } else if (array[i] % 3 === 0 && array[i] % 5 === 0){
      array2.push('fizzBuzz');
    } else if (array[i] % 3 === 0) {
      array2.push('fizz');
    } else if (array[i] % 5 === 0) {
      array2.push('buzz');
    }
  }
  return array2;
}

// Desafio 9
function encode(string) {
  return string.replace(/a/gi, "1").replace(/e/gi, "2").replace(/i/gi, "3").replace(/o/gi, "4").replace(/u/gi, "5");
}
function decode(string) {
  return string.replace(/1/gi, "a").replace(/2/gi, "e").replace(/3/gi, "i").replace(/4/gi, "o").replace(/5/gi, "u");
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
