// Desafio 1
function compareTrue(value1, value2) {
  if (value1 === true && value2 === true){
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
function splitSentence(phase) {
  return phase.split(' ');
}

// Desafio 4
function concatName(array) {
  let lastItem = array[array.length - 1] + ', ';
  let firstItem = array[0];
  return lastItem.concat(firstItem);
}

// Desafio 5
function footballPoints(wins, ties) {
  let winsPoints = wins * 3;
  let tiesPoints = ties;
  return winsPoints + tiesPoints;
}

// Desafio 6
function highestCount(arr) {
  let highest = arr[0];
  let times = 0;
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] > highest) {
      highest = arr[i];
    }
  }
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] === highest) {
      times += 1;
    }
  }
  return times;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let mouseCat1Pos = mouse - cat1;
  let mouseCat2Pos = mouse - cat2;
  
  if (mouseCat1Pos < 0) {
    mouseCat1Pos = mouseCat1Pos * -1;
  }
  if (mouseCat2Pos < 0) {
    mouseCat2Pos = mouseCat2Pos * -1;
  } 
  if (mouseCat1Pos < mouseCat2Pos) {
    return 'cat1'
  } else if ( mouseCat1Pos > mouseCat2Pos) {
    return 'cat2'
  } else {
    return 'os gatos trombam e o rato foge'
  }
}
console.log(catAndMouse(1, 0, 2))


// Desafio 8
function fizzBuzz(arrNumber) {
  let arrFB
}

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
