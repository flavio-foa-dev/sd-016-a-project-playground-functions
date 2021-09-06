// Desafio 1
function compareTrue(um, dois) {
  let result = false;
  if (um === true && dois === true) {
    result = true;
  }
  return result;
}

// Desafio 2
function calcArea(base, altura) {
  let calculo = (base * altura) / 2;

  return calculo;
}

// Desafio 3
function splitSentence(text) {
  let palavras = text.split(' ');
  return palavras;
}

// Desafio 4
function concatName(nomes) {
  let nomes2 = nomes[nomes.length - 1] + ', ' + nomes[0];
  return nomes2;
}

// Desafio 5
function footballPoints(wins, ties) {
  let pontuação = (wins * 3) + (ties * 1);
  return pontuação;
}

// Desafio 6
function highestCount(conjunto) {
  let contagem = 1;
  let maiorNumero = -100;
  for (let index = 0; index < conjunto.length; index += 1) {
    if (conjunto[index] > maiorNumero) {
      maiorNumero = conjunto[index];
      contagem = 1;
    } else if (maiorNumero === conjunto[index]) {
      contagem += 1;
    }
  }
  return contagem;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let discat1 = mouse - cat1;
  let discat2 = mouse - cat2;

  if (Math.abs(discat1) === Math.abs(discat2)) {
    return 'os gatos trombam e o rato foge';
  } else if (Math.abs(discat1) < Math.abs(discat2)) {
    return 'cat1';
  } else if (Math.abs(discat2) < Math.abs(discat1)) {
    return 'cat2';
  }
}

// Desafio 8
function fizzBuzz(numeros) {
  let result = [];
  for (let index = 0; index < numeros.length; index += 1) {
    if (numeros[index] % 3 === 0 && numeros[index] % 5 === 0) {
      result.push('fizzBu  zz');
    } else if (numeros[index] % 5 === 0) {
      result.push('buzz');
    } else if (numeros[index] % 3 === 0) {
      result.push('fizz');
    } else {
      result.push('bug!');
    }
  }
  return result;
}

// Desafio 9
function encode(palavra) {
  let lucas = palavra;
    
  lucas = lucas.replaceAll("a","1");
  lucas = lucas.replaceAll("e","2");
  lucas = lucas.replaceAll("i","3");
  lucas = lucas.replaceAll("o","4");
  lucas = lucas.replaceAll("u","5");
  console.log (lucas);
}
function decode(palavra) {
  let lucas = palavra;
    
  lucas = lucas.replaceAll("1","a");
  lucas = lucas.replaceAll("2","e");
  lucas = lucas.replaceAll("3","i");
  lucas = lucas.replaceAll("4","o");
  lucas = lucas.replaceAll("5","u");
  console.log (lucas);
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
