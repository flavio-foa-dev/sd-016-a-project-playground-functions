// Desafio 1
function compareTrue(value1, value2) {
  if (value1 === true && value2 === true) {
return true;
  } else {
    return false;
}
}
console.log(compareTrue(true, true));

 /*// Desafio 2
function calcArea(base, heigth) {
  return base*heigth/2;


}
console.log(calcArea(10, 50))
console.log(calcArea(5, 2))
console.log(calcArea(51, 1))


// Desafio 3
function splitSentence(str) {
 let array = str.split(" ");
 return array;
}


// Desafio 4
function concatName(names) {

  let lastName = names[names.length-1];
  let firstName = names[0];
  return newNames = lastName + ", " + firstName

  console.log(lastName);
}

// Desafio 5
function footballPoints(wins, ties) {
 pontos = (wins * 3) + (ties * 1)
  return pontos;
  
}

// Desafio 6
function highestCount(arr) {
  let highest = arr[0];
  let times = 1;
  for (let i = 1; i < arr.length; i += 1) {
    if (arr[i] > highest) {
      highest = arr[i];
      times = 1;
    }else if (highest === arr[i]) { 
      times += 1; 
    }
  }
  return times;
}
// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  distanciagato1 = mouse - cat1;
  distanciagato2 = mouse - cat2;
  
  if (distanciagato1 < 0) {
    distanciagato1 = distanciagato1 * (-1);
  } else if (distanciagato2 < 0) {
    distanciagato2 = distanciagato2 * (-1)
  } 
  
  if (distanciagato2 < distanciagato1) { 
  return "cat2"; 
  }else if (distanciagato1 < distanciagato2) { 
    return "cat1";
  } else if (distanciagato2 === distanciagato1) {
    return "os gatos trombam e o rato foge"
  }
}


// Desafio 8
function fizzBuzz(arr) {
  let array = [];
  for (let index = 0; index < arr.length; index +=1) {
    if (arr[index] % 3 === 0 && arr[index] % 5 === 0) {
        array.push('fizzBuzz');
    }else if (arr[index] % 5 === 0) {
        array.push ('buzz');
    } else if (arr[index] % 3 === 0) {
        array.push ('fizz');
    } else {
        array.push ('bug!')
  }
}
    return array;
}
// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
} */

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
