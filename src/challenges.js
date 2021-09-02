// Desafio 1
function compareTrue(valor1, valor2) {
  return valor1 && valor2;
}
// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
  return area;
}
// Desafio 3n
function splitSentence(string) {
 arr = string.split(" ");
  return arr;
}

// Desafio 4
function concatName(array) {
  let first = array.shift();
  let last = array.pop();
  let newArr = last + ', ' + first;
  return newArr;
}


// Desafio 5
function footballPoints(wins, ties) {
  let points = (wins * 3) + ties;
  return points;
}

// Desafio 6
function highestCount(array) {
  let repeat = 0;
  for (let index = 0; index < array.length; index += 1) {
    let max = Math.max(...array);
    if (max === array[index]) {
      repeat += 1;
    }
  }
  return repeat;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let cat1Dist = Math.abs(cat1 - mouse);
  let cat2Dist = Math.abs(cat2 - mouse);
  if(cat1Dist === cat2Dist){
    return 'os gatos trombam e o rato foge';
  } else if (cat1Dist > cat2Dist){
    return "cat2";
  } else if (cat1Dist < cat2Dist){
    return "cat1";
  }
}
// Desafio 8
function fizzBuzz(array) {
  for (index = 0; index < array.length; index += 1){
    if(array[index]%3 === 0 && array[index]%5 === 0){
      array[index] = "fizzBuzz"
    } else if (array[index]%3 === 0){
      array[index] = "fizz"
    } else if (array[index]%5 === 0){
      array[index] = "buzz"
    } else {
      array[index] = "bug!"
    }
  }
  return array
}


// Desafio 9
function encode(str) {
  let letras = ["a", "e", "i", "o", "u"];
  for(let strIndex = 0; strIndex < str.length; strIndex +=1){
    for(let letrasIndex = 0; letrasIndex < letras.length; letrasIndex += 1){
      str = str.replace(letras[letrasIndex],  letrasIndex + 1)
    }
  }
  return str
}



function decode(str) {
  let letras = ["a", "e", "i", "o", "u"];
  for(let strIndex = 0; strIndex < str.length; strIndex +=1){
    for(let letrasIndex = 0; letrasIndex < letras.length; letrasIndex += 1){
      str = str.replace(letrasIndex + 1,letras[letrasIndex])
    }
  }
  return str
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
