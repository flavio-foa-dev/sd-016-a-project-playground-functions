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
  let concatenacao =  param3[0]
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
  let maiornumero = 0
  let repeticoes = 0
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
function encode(codificacao) {
  for (index = 0; index > codificacao.length; index +=1){
    if (codificacao[index] ==="a" ){
      codificacao[index] = 1;
    } else if ( codificacao[index] === "e" ){
      codificacao[index] = 2;
    } else if ( codificacao[index] === "i" ){
      codificacao[index] = 3;
    } else if ( codificacao[index] === "o"){
      codificação[index] = 4;
    } else if (codificacao[index] === "u"){
      codificacao[index] = 5;
    }return console.log(codificacao)
}
function decode(decodificacao) {
  for (index = 0; index > decodificacao.length; index +=1){
    if (decodificacao[index] ==="1" ){
      codificacao[index] = "a";
    } else if ( decodificacao[index] === "2" ){
      decodificacao[index] = "e";
    } else if ( decodificacao[index] === "3" ){
      decodificacao[index] = "i";
    } else if ( decodificacao[index] === "4"){
      decodificação[index] = "o";
    } else if (decodificacao[index] === "5"){
      decodificacao[index] = "u";
    }return console.log(decodificacao)
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
