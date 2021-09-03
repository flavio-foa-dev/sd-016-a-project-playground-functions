// Desafio 1
function compareTrue(a, b) {
  if (a === true && b === true) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, heigth) {
  let area = (base * heigth) / 2;
  return area;
}

// Desafio 3
function splitSentence(str) {
  let arr = str.split(' ');
  return arr;
}

// Desafio 4
function concatName(arr) {
  let conc = `${arr[arr.length - 1]}, ${arr[0]}`;
  return conc;
}

// Desafio 5
function footballPoints(wins, ties) {
  let pontos = (wins * 3) + ties;
  return pontos;
}

// Desafio 6
function highestCount(arr) {
  let maiorNumero = arr[0];
  let maxRepeat = 0;
  for (let index = 1; index < arr.length; index += 1) {
    if (maiorNumero < arr[index]) {
      maiorNumero = arr[index];
    }
  }
  for (let index = 0; index < arr.length; index += 1) {
    if (maiorNumero === arr[index]) {
      maxRepeat += 1;
    }
  }
  return maxRepeat;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let dist1 = cat1 - mouse;
  let dist2 = cat2 - mouse;
  let comp1 = Math.abs(dist1);
  let comp2 = Math.abs(dist2);
  if (comp1 < comp2) {
    return 'cat1';
  } else if (comp2 < comp1) {
    return 'cat2';
  } else {
    return 'os gatos trombam e o rato foge';
  }
}

// Desafio 8
function fizzBuzz(arr) {
  let arrFB = [];
  for (let index = 0; index < arr.length; index += 1) {
    if (arr[index] % 3 === 0 && arr[index] % 5 !== 0) {
      arrFB.push('fizz');
    } else if (arr[index] % 3 !== 0 && arr[index] % 5 === 0) {
      arrFB.push('buzz');
    } else if (arr[index] % 3 === 0 && arr[index] % 5 === 0) {
      arrFB.push('fizzBuzz');
    } else {
      arrFB.push('bug!');
    }
  }
  return arrFB;
}

// Desafio 9
function encode(str) {
  let stra = str.replace(/a/gi, '1');
  let stre = stra.replace(/e/gi, '2');
  let stri = stre.replace(/i/gi, '3');
  let stro = stri.replace(/o/gi, '4');
  let stru = stro.replace(/u/gi, '5');
  return stru;
}   
function decode(str) {
  let str1 = str.replace(/1/gi, 'a');
  let str2 = str1.replace(/2/gi, 'e');
  let str3 = str2.replace(/3/gi, 'i');
  let str4 = str3.replace(/4/gi, 'o');
  let str5 = str4.replace(/5/gi, 'u');
  return str5;
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
