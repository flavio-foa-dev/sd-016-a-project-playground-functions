// Desafio 1
function compareTrue(a, b) {
  // seu código aqui
  return a && b;
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  return (base * height) / 2;
}


// Desafio 3
function splitSentence(frase) {
  return frase.split(" ")
}

// Desafio 4
function concatName(palavras) {
  // seu código aqui
  return palavras[palavras.length - 1] + ", " + palavras[0];
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  return (wins * 3) + ties;
}



// Desafio 6
function highestCount(numeros) {
  // seu código aqui
  let maiorNumero = numeros[0];
  let repeticoes = 1;

  for (let indice = 1; indice < numeros.length; indice += 1) {
    if (maiorNumero < numeros[indice]) {
      maiorNumero = numeros[indice];
      repeticoes = 1;
    }
    else if (maiorNumero === numeros[indice]) {
      repeticoes += 1;
    }
  }
  return repeticoes;
}

//
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  let distanciaCat1 = mouse - cat1;
  let distanciaCat2 = mouse - cat2;
  if (distanciaCat1 < 0){
      distanciaCat1 = distanciaCat1 * (-1)
  } 
  if (distanciaCat2 < 0) {
      distanciaCat2 = distanciaCat2 * (-1)
  }
  if (distanciaCat2 < distanciaCat1) {
    return "cat2"
  } else if (distanciaCat1 < distanciaCat2) {
      return "cat1"
} else if (distanciaCat1 === distanciaCat2 ) {
      return "os gatos trombam e o rato foge"
    }
} 

// Desafio 8
function fizzBuzz(numeros) {
  // seu código aqui
let stringsArray = [];
for(let indice = 0; indice < numeros.length; indice += 1) {
if (numeros[indice] % 3 === 0 && numeros[indice] % 5 !== 0) {
stringsArray.push("fizz");
}
else if (numeros[indice] % 5 === 0 && numeros[indice] % 3 !== 0) {
  stringsArray.push("buzz");
}
else if (numeros[indice] % 3 ===0 && numeros[indice] % 5 === 0) {
  stringsArray.push("fizzBuzz");
}else {
  stringsArray.push("bug!");
}
 }
 return stringsArray
}


// Desafio 9
function encode() {
  // seu código aqui
}[]
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

