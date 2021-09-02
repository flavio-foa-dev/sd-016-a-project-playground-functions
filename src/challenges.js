// Desafio 1
function compareTrue(a, b) {
  if (a === true && b === true) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(str) {
  // seu código aqui
  return str.split(' ');
}

// Desafio 4
function concatName(str) {
  // seu código aqui
  return str[str.length -1] + ', ' + str[0]
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  wins = wins * 3;
  ties = ties * 1;
  return wins + ties;
}

// Desafio 6
function highestCount(numbers) {
  // seu código aqui
  //Achar numero maior
  //criar array vezesRepetidas
  //Percorrer a array pra saber se o valor se repete, se repetir, guardar na array: vezesRepetidas
  let maiorNum = numbers[0];
  let vezesRepete = 0;
  for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] >= maiorNum) {
      maiorNum = numbers[index];
    } 
  } 
  for (let index1 = 0; index1 < numbers.length; index1 += 1) {
    if( numbers[index1] === maiorNum) {
      vezesRepete +=1;
      }
  }
  return vezesRepete;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let rcat1 = mouse - cat1;
  let rcat2 = mouse - cat2;

  if(rcat1 === rcat2 || rcat1 * (-1) === rcat2 || rcat1 === rcat2 * (-1)) {
    return "os gatos trombam e o rato foge"
  } else if (rcat2 < rcat1 ) {
    return 'cat1'
  } else if (rcat1 < rcat2) {
    return 'cat2'
  }
}

// Desafio 8
function fizzBuzz(a) {
  // seu código aqui
  // percorrer array com o for
  //divisivel apenas por 3, retorne 'fizz'
  //divisivel apenas por 5, retorne 'buzz'
  //por 3 e por 5, 'fizzBuzz'
  //nem por 3 nem por 5, 'bug!'
  let mensagem = [];
  for (let index = 0; index < a.length; index += 1) {
    
    if (a[index] % 3 === 0 && a[index] % 5 === 0){
      mensagem.push('fizzBuzz');

    } else if (a[index] % 3 === 0 && a[index] % 5 !== 0) {
      mensagem.push('fizz');

    } else if (a[index] % 3 !== 0 && a[index] % 5 === 0) {
      mensagem.push('buzz');

    } else {
      mensagem.push('bug!');
    }
   }
   return mensagem;
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
