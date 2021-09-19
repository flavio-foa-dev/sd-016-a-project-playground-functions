// Desafio 1
function compareTrue(param1, param2) {
  // seu código aqui
  if(param1 === true && param2 === true){
    return true;
  } else {
    return false;
  }
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
  let firstName = listName[0]
  let lastName = listName[listName.length - 1]
  let fullName = lastName + ", " + firstName
  return fullName;
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
// Desafio 6
function highestCount(numeros) {
let maiores = []
maior = Math.max.apply(Math, numeros)
  for(let key of numeros){
    if(key === maior){
      maiores.push(key)
    } 
    }
    return maiores.length
     }  
// Desafio 7
function catAndMouse(mouse,cat1,cat2) {
  let cat1Distance = cat1 - mouse;
  let cat2Distance = cat2 - mouse;

  if(Math.abs(cat1Distance) < Math.abs(cat2Distance)){
    return "cat1"
  } else if (Math.abs(cat2Distance) < Math.abs(cat1Distance)){
  return "cat2"
  } else if(Math.abs(cat1Distance) === Math.abs(cat2Distance)){
    return "os gatos trombam e o rato foge"
  }
  return gatos;
}
// Desafio 8
function fizzBuzz(param) {

  let auxiliar = [];
  for(let key of param){
    if(key % 3 === 0 && key % 5 === 0){
      auxiliar.push("fizzBuzz")
    } else if (key % 3 === 0){
      auxiliar.push("fizz")
    } else if (key % 5 === 0){
      auxiliar.push("buzz")
    } else if (key % 5 !== 0 && key % 3 !== 0){
      auxiliar.push("bug!")
    } else {
      param
    }
  }
  return auxiliar;
}
// Desafio 9
function encode(fraseCode) {
  fraseCode = fraseCode.replace(/a/g, '1');
  fraseCode = fraseCode.replace(/e/g, '2');
  fraseCode = fraseCode.replace(/i/g, '3');
  fraseCode = fraseCode.replace(/o/g, '4');
  fraseCode = fraseCode.replace(/u/g, '5');
  return fraseCode
}
function decode(fraseDecode) {
  // seu código aqui
  fraseDecode = fraseDecode.replace(/1/g, "a")
  fraseDecode = fraseDecode.replace(/2/g, "e")
  fraseDecode = fraseDecode.replace(/3/g, "i")
  fraseDecode = fraseDecode.replace(/4/g, "o")
  fraseDecode = fraseDecode.replace(/5/g, "u")
  return fraseDecode;
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
