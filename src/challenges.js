// Desafio 1
function compareTrue(param1, param2) {
  if (param1 === true && param2 === true) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, altura) {
  let area = (base * altura) / 2;
  return area;
}

// Desafio 3
function splitSentence(string) {
 let split = string.split(' ');
  return console.log(split);
}

// Desafio 4
function concatName(param3) {
  let concatenacao =  param3[-1] + param3[0]
  return concatenacao
}

// Desafio 5
function footballPoints(wins,ties) {
  let pontos = 0
    if (wins && ties > 0 ) {
      pontos = (wins * 3) + ties
      return pontos;
    }else if (wins && ties === 0){
      return pontos;
    }
}

// Desafio 6
function highestCount(array) {
  maiornumero = 0
  repeticoes = 0
  for (index = 0; index <= array.length;index +=1){
    if ( array[index] > maiornumero ) {
      maiornumero = array[index]
      repeticoes + 1
    } else if (array[index] = maiornumero ){
      repeticoes += 1
    } return maiornumero , repeticoes;
  }


// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distancia1 = cat1 - mouse
  let distancia2 = cat2 - mouse
  if (distancia1 > distancia2){
    return console.log("cat1");
  } else if (distancia2 > distancia1){
    return console.log("cat2");
  }else if (distancia1 === distancia2){
    return console.log ("os gatos trombam e o rato foge");
  }
}

// Desafio 8
function fizzBuzz(numeros) {
  for (index = 0; index > numeros.length; index +=1){
    if (numeros[index] % 3 === 0){
      return console.log("fizz");
    }else if (numeros[index] % 5 === 0){
      return console.log("buzz");
    }else if (numeros[index] % 3 === 0 && numeros[index] % 5 === 0){
      return console.log ("fizzBuzz");
    }else{
      return console.log ("bug!")
    }
      }

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
