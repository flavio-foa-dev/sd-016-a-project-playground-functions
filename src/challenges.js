// Desafio 1
function compareTrue() {
  // seu código aqui
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
 console.log(base*height/2);
}

// Desafio 3
function splitSentence(string) {
  string = "go trybo";
  console.log(string.split(" "));
  return string.split(" ")
 
}

// Desafio 4
function concatName(array) {
  // seu código aqui
array = ["lucas","joao ","carlos "];
console.log(array[array.length-1] +"  " + array[0]);
return array[array.length-1] + " " + array[0]
}


// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  wins = 14;
  ties = 8;
  console.log(wins*3 + ties);
  return wins*3 + ties
}

// Desafio 6
function highestCount(array) {
  // seu código aqui
array = [9, 1, 9, 9, 2, 3, 9, 5, 7];
 let maior= 0 ;
 for( let i=0; i <= array.length; i++){
  if (array[i] > maior)
  {maior = array[i];}
}
  let contador= 0;
 for (let I=0; I <= array.length; I++){
   if (maior === array[I]) {contador++};
}
console.log(maior);
console.log(contador);
return contador;
}


// Desafio 7
function catAndMouse(cat1, cat2, mouse) {
  // seu código aqui
let cat1 = 4;
let cat2 = 5;
let mouse = 0;
if (cat1 < cat2){
  console.log("cat1");
}
 else if (cat2 < cat1){
console.log("cat2"); 
  }
else 
console.log("os gatos trombam e o rato foge");

}

// Desafio 8
function fizzBuzz(array) {
  // seu código aqui
  array = [2, 15, 7, 9, 45];
  let arrayNovo;
  for(let i=0; i <= array.length; i++){
  if (array[i] %3 === 0 && array[i] %6 !== 0){
    arrayNovo.push ("fizz");
  }
  else if (array[i]%3 !== 0  && array[i]%6 === 0){
    arrayNovo.push("buzz");
  }
  else if ( array[i] %3 === 0 &&  array[i] %5 === 0){
    arrayNovo.push("fizzBuzz");
  } 
  else arrayNovo.push("bug!");
}
  console.log(arrayNovo);
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
