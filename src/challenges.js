// Desafio 1
function compareTrue(valor1, valor2) {
  if(valor1 === true && valor2 === true){
    return true
  }
  else{
    return false
  }
}

// Desafio 2
function calcArea(base, height) {
  let area = base * height / 2
  return area;
}

// Desafio 3
function splitSentence(string) {
    let array = string.split([' '])
  return array;
}
console.log(splitSentence('go trybe'))

// Desafio 4
function concatName(array) {
  let concat = "'" + array[array.length-1] + ', ' + array[0]+"'";
  return concat;
}
console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']))
// Desafio 5
function footballPoints(wins, ties) {
  let pointWins = 3*wins
  let pointTies = 1*ties
  let points = pointWins + pointTies;
  return points
}
// Desafio 6
function highestCount(array) {
  let countRepeat = 0;
  let indiceMaior = -1;
    for (let indice in array) {
      if (indiceMaior < array[indice]) {
        indiceMaior = array[indice];
      }
  }
  for (let index2 in array){
    if (indiceMaior === array[index2]){
      countRepeat += 1
    }
  }
  return countRepeat
}
// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
let distCat1Mouse = cat1 - mouse +1;
let distCat2Mouse = cat2 - mouse +1;
if (distCat1Mouse < distCat2Mouse && distCat1Mouse !== 0){
  return 'cat1'
}else if (distCat2Mouse < distCat1Mouse && distCat2Mouse !== 0){
  return 'cat2'
}
else if (distCat1Mouse +1 === distCat2Mouse -1){
  return "os gatos trombam e o rato foge"
}
}
// Desafio 8
function fizzBuzz(numbers) {
  let array = [];
  for (let index in numbers){
    if (numbers[index]%3 === 0 && numbers[index]%5 === 0){
      array.push('fizzBuzz')
    }else if (numbers[index]%5 === 0){
      array.push('buzz')
    }
    else if (numbers[index]%3 === 0){
      array.push('fizz')
    }
    else{
      array.push('bug!')
    }
  }
  return array
}
// Desafio 9
function encode(string) {
  let a ='a';
  let e ='e';
  let i ='i';
  let o ='o';
  let u ='u';

  for (let index in string){
    if (string[index] === a){
      string = string.replace(string[index], '1')
    }
    else if (string[index] === e){
      string = string.replace(string[index], '2')
    }
    else if (string[index] === i){
      string = string.replace(string[index], '3')
    }
    else if (string[index] === o){
      string = string.replace(string[index], '4')
    }
    else if (string[index] === u){
      string = string.replace(string[index], '5')
    }

  }
  let newString = string;
  return newString
}

function decode(newString) {
  let um ='1';
  let dois ='2';
  let tres ='3';
  let quatro ='4';
  let cinco ='5';
    
  for (let index in newString){
    if (newString[index] === um){
      newString = newString.replace(newString[index], 'a')
    }
    else if (newString[index] === dois){
      newString = newString.replace(newString[index], 'e')
    }
    else if (newString[index] === tres){
      newString = newString.replace(newString[index], 'i')
    }
    else if (newString[index] === quatro){
      newString = newString.replace(newString[index], 'o')
    }
    else if (newString[index] === cinco){
      newString = newString.replace(newString[index], 'u')
    }
  
  }
  let stringDecoded = newString;
  return stringDecoded
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
