// Desafio 1
function compareTrue(param1, param2) {
  if (param1 === true && param2 === true){
    return true;
  }else{
    return false;
  }
}
// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  return (base*height)/2;
}

// Desafio 3
function splitSentence(frase) {
  // seu código aqui
  let separador = /\s* \s*/;
  let divideFrase = frase.split(separador);
  return divideFrase;
}

// Desafio 4
function concatName(arrayFrase) {
  // seu código aqui
  let arrayUltimate = [];
  let maior = 0;
  arrayUltimate.push(arrayFrase[arrayFrase.length-1]);
  arrayUltimate.push(arrayFrase[0]);
  let stringJoin = arrayUltimate.join(", ");
  return stringJoin;
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  let pontswins = wins * 3;
  let pontsties = ties * 1;
  return pontsties + pontswins;
}

// Desafio 6
function highestCount(arrayNumbers) {
  // seu código aqui
  let maiorNum = -10, somaMaior = 0;
  for (let index = 0; index<=arrayNumbers.length; index+=1){
    if (arrayNumbers[index]>maiorNum){
      maiorNum = arrayNumbers[index]; 
    }
  }
  for (let cont = 0; cont<=arrayNumbers.length; cont+=1){
    if (arrayNumbers[cont] === maiorNum){
      somaMaior+=1;
    }
  }
  return somaMaior;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  let subcat1 = mouse - cat1;
  let subcat2 = mouse - cat2;
  var abscat1 = Math.abs(subcat1);
  var abscat2 = Math.abs(subcat2);
  if (abscat1<abscat2){
    return 'cat1';
  }
  else if (abscat2<abscat1){
    return 'cat2';
  }
  else if (abscat1 === abscat2){
    return 'os gatos trombam e o rato foge';
  }
}
console.log(catAndMouse(1, 0, 2));
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
