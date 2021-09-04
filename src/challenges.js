// Desafio 1
function compareTrue(param1, param2) {
  // seu código aqui
  if(param1 === true && param2 === true){
    return true;
  } else if(param2 === false && param2 === false)
  return false;
}

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2
  return area;
}
//Desafio 3
function splitSentence(word) {
  let string = word
  string = string.split(" ")
  return string;
}

// Desafio 4
function concatName(listName) {    
}

// Desafio 5
function footballPoints(wins,ties) {
  let allWins = 0;  
  let allTies = 0
  for (let cont = 1; cont <= wins; cont += 1){
      allWins += 3
  }
  for(let i = 1; i <= ties; i +=1){
    allTies += 1
  }  
    return allWins + allTies
}
     
console.log(footballPoints(14,8))
// Desafio 6
function highestCount() {
  // seu código aqui
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
