// Exercicio 1--- funçao usando operador &&
function compareTrue(bolean1, bolean2) {
  let bool = true;
  if (bolean1 && bolean2) {
    bool = true;
  } else {
    bool = false;
  }
  return bool;
}
// Exericico 2--- Funçao area de triangulo
function calcArea(base, altura) {
  return (base * altura) / 2;
}
// Exercicio 3--- Dividir frase
function splitSentence(frase) {
  let frases = [];
  let letras = '';
  let sentença = frase;
  for (let i = 0; i < sentença.length + 1; i += 1) {
    if (frase[i] === ' ' || i === sentença.length) {
      frases.push(letras);
      letras = '';
    } else {
      letras += frase[i];
    }
  }
  return frases;
}
// Exercicio 4 concatenaçao de strings
function concatName(frases) {
  let Concatenados = frases[frases.length - 1];
  Concatenados += ', ';
  Concatenados += frases[0];
  return Concatenados;
}
// Exercicio 5 quantidades de pontos
function footballPoints(wins, ties) {
  return (wins * 3 + ties);
}
// Exercicio 6 repetiçao do maior numero
function highestCount(numeros) {
  let vezesqaparece;
  let maiornumero = -1000;
  for (let i = 0; i < numeros.length + 1; i += 1) {
    if (numeros[i] > maiornumero) {
      maiornumero = numeros[i];
      vezesqaparece = 1;
    } else if (numeros[i] === maiornumero) {
      vezesqaparece += 1;
    }
  }
  return vezesqaparece;
}
// Exercicio 7 caça rato
function catAndMouse(mouse, cat1, cat2) {
  let resultado = '';
  if (Math.abs(mouse - cat1) > Math.abs(mouse - cat2)) {
    resultado = 'cat2';
  } else if (Math.abs(mouse - cat2) > Math.abs(mouse - cat1)) {
    resultado = 'cat1';
  } else {
    resultado = 'os gatos trombam e o rato foge';
  }
  return resultado;
}
// Exericico 8 fizzbuzz
function fizzBuzz(numeros) {
  let respostas = [];
  for (let i = 0; i < numeros.length; i += 1) {
    if (numeros[i] % 3 === 0) {
      if (numeros[i] % 5 === 0) {
        respostas.push('fizzBuzz');
      } else {
        respostas.push('fizz');
      }
    } else if (numeros[i] % 5 === 0) {
      respostas.push('buzz');
    } else {
      respostas.push('bug!');
    }
  }
  return respostas;
}
// Exerciico 9 codifique e descodigique
function encode(frase) {
  let newfrase = '';
  for (let i = 0; i < frase.length; i += 1) {
    switch (frase[i]) {
    case 'a':
      newfrase += '1'; break;
    case 'e':
      newfrase += '2'; break;
    case 'i':
      newfrase += '3'; break;
    case 'o':
      newfrase += '4'; break;
    case 'u':
      newfrase += '5'; break;
    default: newfrase += frase[i];
    }
  } return newfrase;
}
function decode(frase) {
  let newfrase = '';
  for (let i = 0; i < frase.length; i += 1) {
    if (frase[i] === '1') {
      newfrase += 'a';
    } else if (frase[i] === '2') {
      newfrase += 'e';
    } else if (frase[i] === '3') {
      newfrase += 'i';
    } else if (frase[i] === '4') {
      newfrase += 'o';
    } else if (frase[i] === '5') {
      newfrase += 'u';
    } else {
      newfrase += frase[i];
    }
  }
  return newfrase;
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
