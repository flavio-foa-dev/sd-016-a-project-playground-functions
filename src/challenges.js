// Desafio 1
function compareTrue(firstBool, secondBool) {
  if (firstBool && secondBool) {
    return true;
  };

  return false;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(string) {
  let array = string.split(" ");
  return array;
}

// Desafio 4
function concatName(arrayOfStrings) {
  let firstElement = arrayOfStrings[0];
  let lastElement = arrayOfStrings[arrayOfStrings.length - 1];
  let newString = lastElement + ', ' + firstElement;

  return newString;
}

// Desafio 5
function footballPoints(wins, ties) {
return (wins * 3) + ties;
}

// Desafio 6
function highestCount(numberArray) {
  let highestNumber = numberArray[0];
  let highestNumberRepetitions = 0;

  for (let number of numberArray) {
    if (highestNumber < number) {
      highestNumber = number;
      highestNumberRepetitions = 1;
    } else if (highestNumber === number) {
      highestNumberRepetitions += 1;
    }
  }

  return highestNumberRepetitions;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  //0, 3, 2
  //10,4,22
  //1,0,2

  let distanciaMouseCat1 = negativeToPositive(mouse, cat1);
  let distanciaMouseCat2 = negativeToPositive(mouse, cat2);

  if (distanciaMouseCat1 < distanciaMouseCat2) {
    return "cat1";
  } else if (distanciaMouseCat2 < distanciaMouseCat1) {
    return "cat2";
  } else {
    return "os gatos trombam e o rato foge"
  }

}

function negativeToPositive(mouse, cat) {
  let distanciaMouse = mouse - cat;

  if (distanciaMouse < 0) {
    distanciaMouse *= -1;
  }

  return distanciaMouse;
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
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
