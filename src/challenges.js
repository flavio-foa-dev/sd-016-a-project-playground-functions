// Desafio 1
function compareTrue(a, b) {
  if(a === true && b === true){
    return true;
  }else {
    return false;
  }
}


// Desafio 2
function calcArea(base, height){
  return (base * height)/2
}

// Desafio 3
function splitSentence(str) {
  return newStr = str.split(' ');
}

// Desafio 4
function concatName(arr) {
  let lastLetter = arr.slice(-1);
  let newLetter = arr.slice(0, 1);
  let result = lastLetter.concat(newLetter);
   return result.join(', ');
}
// Desafio 5
function footballPoints(wins, ties) {

  let resultWins = 0;
  let resultTies = 0;

  if(wins === 0 & ties === 0){
    return 0
  }
  if(wins > 0){
    for(let index = 0; index < wins; index+=1){
      resultWins += 3;
    }
  }
  if(ties > 0){
    for(let index = 0; index < ties; index+=1){
      resultTies += 1;
    }
  }

  return resultWins + resultTies; 
}
// Desafio 6
function highestCount(arr) {
  let maxNumber = 0;
  let counter = 0;

  for(let index in arr) {
    if(arr[index] > maxNumber){
      maxNumber = arr[index];
    }
    if(arr[index] < 0){
      maxNumber = arr[index];
    }
  }
  for(let index in arr){
    if(maxNumber === arr[index]){
      counter += 1;
    }
  }
  return counter;
}
// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distac1 = mouse - cat1;
  let distac2 = mouse - cat2;
  if(cat1 > mouse){
    distac1 = cat1 - mouse;
  }else{
    distac1 = mouse - cat1;
  }
  if(cat2 > mouse){
    distac2 = cat2 - mouse;
  }else{
    distac1 = mouse - cat2;
  }
  if(distac1 < distac2){
    return "cat1";
  }else if(distac1 > distac2){
    return "cat2";
  }else{
    return "os gatos trombam e o rato foge"
  }
}

// Desafio 8
function fizzBuzz(arr) {
  let newArr = [];
  for(let index = 0; index < arr.length; index+=1){
    if(arr[index] % 3 === 0){
      if(arr[index] % 5 === 0){
        newArr.push('fizzBuzz');
      }else{
        newArr.push('fizz');
      }
    }else if(arr[index] % 5 === 0){
      newArr.push('buzz');
    }else{
      newArr.push('bug!');
    }
  }
  return newArr;
}

// Desafio 9
function encode(str) {  
  let newString = str.split("");

    for(let index = 0; index < newString.length; index++) {
      if(newString[index] === 'a'){
        newString[index] = 1;
      }else if(newString[index] === 'e'){
        newString[index] = 2;
      }else if(newString[index] === 'i'){
        newString[index] = 3;
      }else if(newString[index] === 'o'){
        newString[index] = 4;
      }else if(newString[index] === 'u'){
        newString[index] = 5;
      }

    }
     return newString.join('');
}


function decode(newString) {
  let str = newString.split("");

    for(let index = 0; index < str.length; index++) {
      if(str[index] === '1'){
        str[index] = 'a';
      }else if(str[index] === '2'){
        str[index] = 'e';
      }else if(str[index] === '3'){
        str[index] = 'i';
      }else if(str[index] === '4'){
        str[index] = 'o';
      }else if(str[index] === '5'){
        str[index] = 'u';
      }

    }
     return str.join('');
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
