// Desafio 1 bora!
function compareTrue(value1, value2) {
  if (value1 === true && value2 === true) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {

 return((base * height)/2);

}

// Desafio 3
function splitSentence(Array) {
  let array01 = Array;
  let splitSentence = array01.split(/[\s,]+/);
  
  return splitSentence;

}

// Desafio 4
function concatName(nameConcat) {
  let firstItem = nameConcat.shift();
  let lastItem = nameConcat.pop();
  let resultContat = lastItem + ', ' + firstItem;

  return resultContat;

}

// Desafio 5
function footballPoints(wins, ties) {
  let winPoints = wins * 3;
  let totalPoints = winPoints + ties;

  return totalPoints;

}

// Desafio 6
function highestCount(numberArray) {
  let higherNumber = numberArray[0];
  let higherNumberIndex = 0;

  for (indexHC = 0; indexHC < numberArray.length ; indexHC += 1) {
    if (higherNumber < numberArray[indexHC]) {
      higherNumber = numberArray[indexHC];
    }
  }
  for (indexHI = 0; indexHI < numberArray.length ; indexHI += 1) {
    if (higherNumber === numberArray[indexHI]) {
      higherNumberIndex += 1;
    }
  
  }
  return higherNumberIndex;
}


// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let initialPositionCat1 = cat1 - mouse;
  let initialPositionCat2 = cat2 - mouse;
  let geralPosCat1 = Math.abs(initialPositionCat1);
  let geralPosCat2 = Math.abs(initialPositionCat2);

  if (geralPosCat1 > geralPosCat2) {
    return "cat2";
  } else if (geralPosCat1 === geralPosCat2) {
    return "os gatos trombam e o rato foge";
  }  else {
    return "cat1";
  }

}

// Desafio 8
function fizzBuzz(arrayFB) {
  let fizzBuzzResult = [];

  for (indexFB = 0; indexFB < arrayFB.length ; indexFB += 1) {
      if ((arrayFB[indexFB] % 3) === 0 && (arrayFB[indexFB] % 5) === 0) {
      fizzBuzzResult.push("fizzBuzz");
    } else if ((arrayFB[indexFB] % 3) === 0) {
      fizzBuzzResult.push("fizz");
    } else if ((arrayFB[indexFB] % 5) === 0) {
      fizzBuzzResult.push("buzz");
    } else {
      fizzBuzzResult.push("bug!");
    }
  }
return (fizzBuzzResult);

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
