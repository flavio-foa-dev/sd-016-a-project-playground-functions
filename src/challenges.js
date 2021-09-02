// Desafio 1
function compareTrue(valor1, valor2) {
  return valor1 === true && valor2 === true;
}

// Desafio 2
function calcArea(base, height) {
  let calculo = (base * height) / 2;
  return calculo;
}

// Desafio 3
function splitSentence(stringSplit) {
  let arr = stringSplit.split(' ');
  return arr;
}

// Desafio 4
function concatName(array) {
  let string = array[array.length -1] + ', ' + array[0];
  return string;
}

// Desafio 5
function footballPoints(wins, ties) {
  let calc = (wins * 3) + (ties * 1);
  return calc;
}

// Desafio 6
function highestCount(arr) {
  let highestNumber = arr[0];
  let sum = 1;
  for (let index = 1; index < arr.length; index += 1) {
    if (arr[index] > highestNumber) {
      highestNumber = arr[index];
      sum = 1;
    } else if (arr[index] === highestNumber) {
      sum += 1;
    }
  }
  return sum;
}
// [ 2, 3 , 5 ,2 4]

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
    distanceCat1 = mouse - cat1;
    distanceCat2 = mouse - cat2;
    console.log(distanceCat1 , distanceCat2);
    if ( distanceCat1 < 0){
      distanceCat1 = distanceCat1 * (-1);
    }
    if (distanceCat2 < 0) {
      distanceCat2 = distanceCat2 * (-1);
    }
    console.log(distanceCat1 , distanceCat2);
    if ( distanceCat2 === distanceCat1) {
      return 'os gatos trombam e o rato foge';
    } else if (distanceCat1 < distanceCat2) {
      return 'cat1';
    } else if (distanceCat2 < distanceCat1) {
    return 'cat2';
    }
}

// Desafio 8
function fizzBuzz(arr) {
  let array = [];
  for (let index = 0; index < arr.length; index += 1) {
    if (arr[index] % 3 === 0 && arr[index] % 5 === 0) {
      array.push('fizzBuzz');
    } else if (arr[index] % 5 === 0) {
      array.push('buzz');
    } else if (arr[index] % 3 === 0) {
      array.push('fizz');
    } else {
      array.push('bug!');
    }
  }
  return array;
}

// Desafio 9
function encode(string) {
  let arr = string.split('');
  for (let index = 0; index < string.length; index += 1) {
    if (arr[index] === 'a') {
      arr.splice(index, 1, '1');
    } if (arr[index] === 'e') {
      arr.splice(index, 1, '2');
    } if (arr[index] === 'i') {
      arr.splice(index, 1, '3');
    } if (arr[index] === 'o') {
      arr.splice(index, 1, '4');
    } if (arr[index] === 'u') {
      arr.splice(index, 1, '5');
    }
  }
  return arr.join('');
}
function decode(string) {
  let arr = string.split('');
  for (let index = 0; index < string.length; index += 1) {
    if (arr[index] === '1') {
      arr.splice(index, 1, 'a');
    } if (arr[index] === '2') {
      arr.splice(index, 1, 'e');
    } if (arr[index] === '3') {
      arr.splice(index, 1, 'i');
    } if (arr[index] === '4'){
      arr.splice(index, 1, 'o');
    } if (arr[index] === '5') {
      arr.splice(index, 1, 'u');
    }
  }
  return arr.join('');
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
