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
  let repeticao = 0;
  let highestNumber = Math.max.apply(null, numbers)
  for(i =0; i < numbers.length; i += 1){
    if(highestNumber === numbers[i]){
      repeticao += 1;
    }
    return repeticao
     }
   }

console.log(highestCount([9, 1, 2, 3, 9, 5, 7]))

// Desafio 7
function catAndMouse(mouse ,cat1, cat2) {
  // seu código aqui
  let d1 = cat1;
  let d2 = cat2;

  if (d1 > mouse && d1 < d2){
    return "cat1"
  } else if( d2 > mouse && d2 < d1){
     return "cat2"
  } else if(d1 > mouse && d1 === d2){
    return 'os gatos trombam e o rato foge'
  }
  }

// Desafio 8
function fizzBuzz(numbers) {
  // seu código aqui


}
console.log(fizzBuzz([2, 15, 7, 9, 45]))

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
