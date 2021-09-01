// Desafio 1
function compareTrue(value1, value2) {
  if (value1 === true && value2 === true) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  let area = 0;
  area = (base * height) / 2;
  console.log(area);
  return area;
}

// Desafio 3
function splitSentence(string) {
  let array = string.split(" ");
  return array;

}

// Desafio 4
function concatName(names) {
  let firstName = names[0];
  let lastName = names[names.length - 1];
  let newNames = lastName + ", " + firstName;
  return newNames;

}

// Desafio 5
function footballPoints(wins, ties) {

  let winsPoints = wins * 3;
  let tiesPoints = ties * 1;
  let endGame = winsPoints + tiesPoints;
  return endGame;
}

// Desafio 6

function highestCount(numbers) {
  // Declarando variaveis fora do for.
  let array = numbers[0];
  let contador = 0;
  //Abrindo laço de repetição
  for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] > array) {
     array = numbers[index];
    } 
  } 
  for(let i=0; i < numbers.length;i +=1){
    if(numbers[i] === array){
      contador += 1;
    }
  } return contador;
  
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
