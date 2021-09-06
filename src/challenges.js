// Desafio 1
function compareTrue(value1, value2) {
  if(value1 === true && value2 === true){
    return true;
  }else{
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  return (base*height)/2
}
calcArea(10, 50);
calcArea(5, 2);
calcArea(51, 1);

// Desafio 3
function splitSentence(sentence) {
  return sentence.split(" ");
}
splitSentence('go Trybe');
splitSentence('vamo que vamo');
splitSentence('foguete');

// Desafio 4
function concatName(arr) {
let first;
let last;
let firstLast;

first = arr[0];
last  = arr[arr.length -1];
firstLast = last.concat (", " + first);

return firstLast;
}
concatName(['Lucas','Cassiano','Ferraz','Paolillo']);
concatName(['foguete','não','tem','ré']);
concatName(['captain','my','captain']);

// Desafio 5
function footballPoints(wins, ties) {
  let pointsWins = 3;
  let pointsTies = 1;
  let resultado =  wins*pointsWins + ties*pointsTies
   return resultado
  }

footballPoints(14, 8);
footballPoints(1, 2);
footballPoints(0, 0);

// Desafio 6
function highestCount(array) {
  let count= 0;
  let max = -9;
  for(let i = 0; i < array.length; i++){
    if(array[i] > max){
      max = array[i]
      count = 0;
    }
    if(array[i] == max){
      count ++;  
    }
  } 
  return count;
}
highestCount([9, 1, 2, 3, 9, 5, 7]);
highestCount([0, 4, 4, 4, 9, 2, 1]);
highestCount([-2, -2, -1]);
highestCount([0, 0, 0]);
// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
let distance1 = Math.abs (mouse - cat1);
let distance2= Math.abs (mouse - cat2);
if (distance1 < distance2){
  return "cat1"
}else if(distance2 < distance1){
  return "cat2"
}else if (distance1 === distance2){
  return "os gatos trombam e o rato foge"
}
}
catAndMouse(1, 3, 2);
catAndMouse(1, 6, 12);
catAndMouse(1, 1, 1);
// Desafio 8
function fizzBuzz(numbers){ 
let arr = [];    
for(let i = 0; i < numbers.length; i += 1){
  if( numbers[i] % 3 === 0 && numbers[i] % 5 === 0){
    arr.push("fizzBuzz")
  }else if(numbers[i] % 5 === 0) {
    arr.push("buzz")
    }else if(numbers[i] % 3 === 0 ) {
      arr.push("fizz")  
  }else{
    arr.push("bug!")
  } 
}return arr
}
fizzBuzz([2, 15, 7, 9, 45]);
fizzBuzz([7, 9]);
fizzBuzz([9, 25]);
// Desafio 9
function encode(phrase) {
let a = '1';
let e = '2';
let letraI = '3';
let o = '4';
let u = '5';
let arr = phrase.split("");
for(let i = 0; i < arr.length; i += 1){
if(arr[i] === 'i'){
arr[i]= letraI
}else if(arr[i] === 'e'){
  arr[i] = e
}else if(arr[i] === 'a'){
  arr[i] = a
}else if(arr[i] === 'o'){
  arr[i] = o
}else if(arr[i] === 'u'){
  arr[i] = u
}
}
return arr.join('');
}

encode('hi,there!');

function decode(phrase) {
  let n1 = 'a';
  let n2 = 'e';
  let n3 = 'i';
  let n4 = 'o';
  let n5 = 'u';
  let arr = phrase.split("");
  for(let i = 0; i < arr.length; i += 1){
  if(arr[i] === '3'){
  arr[i]= n3
  }else if(arr[i] === '2'){
    arr[i] = n2
  }else if(arr[i] === '1'){
    arr[i] = n1
  }else if(arr[i] === '4'){
    arr[i] = n4
  }else if(arr[i] === '5'){
    arr[i] = n5
  }
  }
  return arr.join('');
  }
  
  decode('h3,th2r2!');

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
