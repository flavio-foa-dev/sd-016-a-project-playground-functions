// Desafio 1
function compareTrue(num1, num2) {
 if(num1 === true && num2 === true) {
   return true;
  }
   else {
     return false;
   }
}

// Desafio 2
function calcArea(base, height) {
 return (base * height)/2
}

// Desafio 3
function splitSentence(frase) {
const resultado =(frase.split(' '));
return resultado;
}

// Desafio 4
function concatName(concatName) {
  let i = concatName.length;
 return (concatName[i-1] + (", ") + concatName[0]);
}

// Desafio 5
function footballPoints(wins, ties) {
 return (wins*3 + ties);
}

// Desafio 6
function highestCount(array1){
  let maiorNumero = array1[0];
  let contador = 0;
  for(let i = 0; i < array1.length; i+=1){
    if(maiorNumero < array1[i]){
      maiorNumero = array1[i];
      contador = 1;
    }
    else if (maiorNumero === array1[i]){
      contador +=1;
    }
  }
  return contador;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if (cat1 === cat2) {
    return ("os gatos trombam e o rato foge");
  }
  else if (mouse > cat1 && mouse > cat2) {
    if (cat1 > cat2){
      return ("cat1")
    }
    else return("cat2")
  }
  else if (mouse < cat1 && mouse < cat2){
    if (cat1 < cat2){
      return ("cat1")
    }
    else return("cat2")
  }
  else if(mouse > cat1){
    if ((mouse - cat1) < (cat2 - mouse)){
      return ("cat1")
    }
    else if ((mouse - cat1) === (cat2 - mouse)){
      return ("os gatos trombam e o rato foge");
    }
    else return("cat2")
  }
  else if (mouse < cat1){
    if ((cat1 - mouse) < (mouse - cat2)){
      return ("cat1")
    }
    else if ((cat1 - mouse) === (mouse - cat2)){
      return ("os gatos trombam e o rato foge")
    }
    else return ("cat2")
  }
  else return ("os gatos trombam e o rato foge");
}

// Desafio 8
function fizzBuzz(array1) {
  let resultado = [];
 for(let i = 0; i < array1.length; i+=1){
   if (array1[i] % 3 === 0 && array1[i] % 5 === 0){
resultado[i] = "fizzBuzz";
   }
   else if (array1[i] % 3 === 0){
     resultado[i] = "fizz";
   }
   else if(array1[i] % 5 === 0){
     resultado[i] = "buzz";
   }
   else resultado[i] = "bug!";
 }
 return resultado
}
console.log(fizzBuzz([2, 15, 7, 9, 45]));
// Desafio 9
function encode(string) {
  let resultado = "";
  for (let i = 0; i < string.length; i+=1){
    if (string[i] === "a"){
      resultado += "1";
    }
    else if (string[i] === "e"){
     resultado += "2";
   }
   else if (string[i] === "i"){
     resultado += "3";
   }
   else if (string[i] === "o"){
     resultado += "4";
   }
   else if (string[i] === "u"){
     resultado += "5";
   }
   else resultado += string[i];
  }
  return resultado;
}
function decode(string) {
  let resultado = "";
 for (let i = 0; i < string.length; i+=1){
   if (string[i] === "1"){
     resultado += "a";
   }
   else if (string[i] === "2"){
    resultado += "e";
  }
  else if (string[i] === "3"){
    resultado += "i";
  }
  else if (string[i] === "4"){
    resultado += "o";
  }
  else if (string[i] === "5"){
    resultado += "u";
  }
  else resultado += string[i];
 }
 return resultado;
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
