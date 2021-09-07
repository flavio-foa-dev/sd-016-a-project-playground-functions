// Desafio 1

function compareTrue (a , b) {
  if (a === true && b === true) {
  return true;
  }
  return false;
};
  
// Desafio 2
function calcArea( base , height) {
  return (base * height) / 2;
};

// Desafio 3
function splitSentence(phrase) {
  return phrase.split (' ');
};

// Desafio 4
function concatName(arrayStrings) {
  let first = arrayStrings[0];
  let last = arrayStrings[arrayStrings.length -1]
  return (last + ',' + ' ' + first);
};

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + ties;
}

// Desafio 6
function highestCount(numbers) {
  let higherNumber = numbers[0];
  let sum = 1;
  for (let index = 1; index < numbers.length; index += 1) {
    if (higherNumber < numbers[index] ) {
      higherNumber = numbers[index];
      sum = 1;
    } else if
      (higherNumber === numbers[index]) {
      sum += 1;
    }
  }
  return sum;
}

// Desafio 7
function catAndMouse (mouse , cat1 , cat2) {
  
  let positionCat1 = Math.abs(mouse - cat1);
  let positionCat2 = Math.abs(mouse - cat2);
  
  if (positionCat1 < positionCat2) {
    return 'cat1';
  } else if (positionCat2 < positionCat1) {
    return 'cat2';
  } else {
    return 'os gatos trombam e o rato foge';
  }
  };
  
  
// Desafio 8
function fizzBuzz(arrayNumbers) {
  let number = [];
  for (index = 0; index < arrayNumbers.length; index +=1) {
    if(arrayNumbers[index] % 3 === 0 && arrayNumbers[index] % 5 !== 0){
      number.push("fizz");
    }else if(arrayNumbers[index] % 5 === 0 && arrayNumbers[index] % 3 !== 0){
      number.push("buzz");
    }else if(arrayNumbers[index] % 3 === 0 && arrayNumbers[index] % 5 === 0){
      number.push("fizzBuzz");
    }else{
      number.push("bug!")
    }
  }
    return number;
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
}