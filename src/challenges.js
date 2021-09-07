// Desafio 1 -
// Professor Bernardo me auxiliou com essa questão
function compareTrue(value1, value2) {
  if (value1 === true && value2 === true) {
        return true;
  } else {
    return false;
    }
}
console.log(compareTrue(true, true));

// Desafio 2
function calcArea(base, heigth) {
  return base * heigth / 2;



}
console.log(calcArea(10, 50));
console.log(calcArea(5, 2));
console.log(calcArea(51, 1));


// Desafio 3
function splitSentence(umafrase) {
 let array = umafrase.split(" ");
 return array;
}


// Desafio 4
function concatName(nome) {

  let ultimoNome = nome[nome.length - 1];
  let primeiroNome = nome[0];
  return Names = ultimoNome + ", " + primeiroNome

  console.log(ultimoNome);
}

// Desafio 5 - 
function footballPoints(wins, ties) {
 pontos = (wins * 3) + (ties * 1)
  return pontos;
  
}

// Desafio 6 - 
// Cristiane Souza - Turma 16, Tribo A - Me auxiliou com essa questão.
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
  gato1 = mouse - cat1;
  gato2 = mouse - cat2;
  
  if (gato1 < 0) {
    gato1 = gato1 * (-1);
  } else if (gato2 < 0) {
    gato2 = gato2 * (-1)
  } 
  
  if (gato2 < gato1) { 
  return "cat2"; 
  }else if (gato1 < gato2) { 
    return "cat1";
  } else if (gato2 === gato1) {
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
