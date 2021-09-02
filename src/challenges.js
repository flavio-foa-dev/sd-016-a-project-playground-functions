// Desafio 1
function compareTrue(a,b) {
  if(a === true && b === true) {
    return true;
  }else{
    return false;
  }
}

// Desafio 2
function calcArea(base,heigth) {
  let area = (base * heigth) /2;
  return area;
}

// Desafio 3
function splitSentence(sentence) {
  return sentence.split(' ');
}

// Desafio 4
function concatName(words) {
  let last = words[(words.length -1)]
  let first = words[0];
  return last + ", " + first;
}

// Desafio 5
function footballPoints(wins,ties) {
  return (wins * 3) + ties
}

// Desafio 6
function highestCount(numbers) {
  let maior = numbers[0];
  let soma = 0;
  for(let index = 0;index < numbers.length;index += 1){
    if(maior < numbers[index]) {
      maior = numbers[index];
      soma = 1
    }else if (maior === numbers[index]){
      soma += 1;
    }
  }
  return soma;
}

// Desafio 7
function catAndMouse(mouse,cat1,cat2) {
  let distCat1 = Math.abs(mouse - cat1);
  let distCat2 = Math.abs(mouse - cat2);
  if(distCat1 < distCat2){
    return 'cat1';
  } else if(distCat1 > distCat2){
    return 'cat2';
  } else {
    return 'os gatos trombam e o rato foge';
  }  
}

// Desafio 8
function fizzBuzz(numbers) {
  let result = [];
  for (let index = 0;index < numbers.length;index += 1){
    if ((numbers[index] % 3 === 0) && (numbers[index] % 5 != 0)){
      result.push("fizz");
    }else if((numbers[index] % 5 === 0) && (numbers[index] % 3 != 0)){
      result.push("buzz");
    }else if((numbers[index] % 3 === 0) && (numbers[index] % 5 === 0)){
      result.push("fizzBuzz");
    }else{
      result.push("bug!");
    }
  }
  return result;
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
