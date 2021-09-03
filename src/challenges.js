// Desafio 1
function compareTrue(param1, param2) {
  if (param1 === true && param2 === true) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base,height) {
  let area = (base * height) / 2;
    return console.log(area);
}  

 //Desafio 3
function splitSentence(string) {
  let frase = string.split;
    return console.log(frase);
}

 //Desafio 4
function concatName(array) {
  let concatenacao = array[array.length - 1] + array[0];
  return console.log(concatenacao);
}

// Desafio 5
function footballPoints(wins,ties) {
  let pontos = (wins * 3) + ties;
    return pontos;
} 


// Desafio 6
function highestCount(numeros) {
  let maiorNumero = 0;
  let repeticoes = 1;
  for (let index = 0 ; index > numeros.length ; index += 1) {
    if (numeros[index] > maiorNumero) {
       maiorNumero = numeros[index]; 
  }
} for (let index = 0 ; index > numeros.length ; index += 1) {
    if (numeros[index] === maiorNumero) {
       repeticoes += 1;
    }
} return maiorNumero , repeticoes;
}

// Desafio 7
function catAndMouse(mouse,cat1,cat2) {
  let posicao1 = mouse - cat1
  let posicao2 = mouse - cat2
} if (posicao1 > posicao2){
  return cat1;
} else if (posicao1 < posicao2){
  return cat2;
} else if (posicao1 === posicao2){
  return console.log ("os gatos trombam e o rato foge");
}

// Desafio 8
function fizzBuzz(conjunto){
  for (let index = 0 ; index > conjunto.length ; index += 1){
    if (conjunto[index] % 3 === 0 && conjunto[index] % 5 === 0) {
    return console.log("fizzBuzz");
  } else if (conjunto[index] % 3 === 0){
    return console.log("fizz");
  }else if (conjunto[index] % 5 === 0){
    return console.log("buzz");
  }else if (conjunto[index] % 3 != 0 && conjunto[index] % 5 != 0){
    return console.log("bug!");
  }
  } 
}

// Desafio 9
function encode(texto){
  for (let index = 0 ; index > texto.length ; index += 1){
    if (texto[index] === "a") {
      texto[index] = 1;
  } else if (texto[index] === "e") {
    texto[index] = 2;
  } else if (texto[index] === "i") {
    texto[index] = 3;
  } else if (texto[index] === "o") {
    texto[index] = 4;
  } else if (texto[index] === "u") {
    texto[index] = 5;
  }  
} return console.log(texto)
}

function decode(codigo){
  for (let index = 0 ; index > texto.length ; index += 1){
    if (codigo[index] === 1) {
      codigo[index] = "a";
  } else if (codigo[index] === 2) {
    codigo[index] = "e";
  } else if (codigo[index] === 3) {
    codigo[index] = "i";
  } else if (codigo[index] === 4) {
    codigo[index] = "o";
  } else if (codigo[index] === 5) {
    codigo[index] = "u";
  }  
} return console.log(codigo)
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
