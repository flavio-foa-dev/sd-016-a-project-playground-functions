// Desafio 1
function compareTrue(value1, value2) {

  if (value1 === true && value2 === true) {
return true;
  } else {
    return false;
}
}
console.log(compareTrue(true, true));




// Desafio 2
function calcArea(base, heigth) {
  return base*heigth/2;


}
console.log(calcArea(10, 50))
console.log(calcArea(5, 2))
console.log(calcArea(51, 1))


// Desafio 3
function splitSentence(str) {
 let array = str.split(" ");
 return array;
}


// Desafio 4
function concatName(names) {

  let lastName = names[names.length-1];
  let firstName = names[0];
  return newNames = lastName + ", " + firstName

  console.log(lastName);
}

// Desafio 5
function footballPoints(wins, ties) {
 pontos = (wins * 3) + (ties * 1)
  return pontos;
  
}

// Desafio 6
function highestCount(arr) {
  let highest = arr[0];
  let times = 1;
  for (let i = 1; i < arr.length; i += 1) {
    if (arr[i] > highest) {
      highest = arr[i];
      times = 1;
    }else if (highest === arr[i]) { 
      times += 1; 
    }
  }
  return times;
}
// Desafio 7
function catAndMouse() {
  // seu código aqui
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
