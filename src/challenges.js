// Desafio 1
function compareTrue(param1, param2) {
  if ( param1 && param2 === true){
    return true;
  } return false;
  }

// Desafio 2
function calcArea(base, height) {
  return ( base * height)/2
}

// Desafio 3
// ref: https://www.w3schools.com/jsref/jsref_split.asp (pesquisa para o uso do split)
function splitSentence(frase) {
  resultado = frase.split(" ");
  return resultado;
}

// Desafio 4
function concatName(frase) {
  resultado = frase[frase.length -1] + ", " + frase[0];
  return resultado;
}

// Desafio 5
function footballPoints(wins, ties) {
  pontos = (wins * 3) + (ties * 1)
  return pontos;
}

// Desafio 6
function highestCount(numbers) {
  let highestNumber = numbers[0]
  let counter = 0;
   for (let i = 0; i < numbers.length; i += 1){
     if (numbers[i] > highestNumber ){
       highestNumber = numbers[i];
       counter = 1;
     } else if (highestNumber === numbers[i]) {
       counter += 1;
     }
   }
    return counter
   }

// Desafio 7
// ref: Lógica implementada com auxilio das respostas do Pedro na tread do slack feita pela Rafaela Camargos;
function catAndMouse(mouse ,cat1, cat2) {
  // seu código aqui
  let d1 = Math.abs(cat1 - mouse);
  let d2 = Math.abs(cat2 - mouse);
  if (d1 < d2){
    return "cat1";
  } else if( d2 < d1){
     return "cat2";
  } else if (d1 === d2){
    return "os gatos trombam e o rato foge";
  } 
  }


// Desafio 8
function fizzBuzz(numbers) {
  let array1 = numbers[0];
  let result = array2[0]
  for (i = 0; i < array1.length; i += 1){
    if (array1[i] % 3 === 0){
       array2.push('fizz');
    } else if (array1[i] % 5 === 0){
      array2.push('buzz');
    } else if (array1[i] % 3 === 0 && array1[i] % 5 === 0){
      array2.push('fizzBuzz')
    } else {
      array2.push('bug!');
    }
    return result;
  }
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
