// Desafio 1
function compareTrue(value1, value2) {
  if (value1 === true && value2 === true ) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
  return area;
}
//console.log( calcArea( 2, 2) );

// Desafio 3
function splitSentence(oneString) {
  let words = oneString.split(" "); 
  // função .split permite seprarar o array passando qual o parâmetro quer localizar
  // no caso o espaço vazio (" ");
  return words;
}
// console.log( splitSentence( "Quero saber o numero de palavras") );


// Desafio 4
function concatName(nameList) {
  let firstName = nameList[0];
  let lastName = nameList[nameList.length - 1];
  return (lastName  + ', ' + firstName);
}

// Desafio 5
function footballPoints(wins, ties) {
  let scoreTotal = (wins * 3) + ties;
  return scoreTotal;
}

// Desafio 6
function highestCount(myList) {
  
  let theBiggest = -1;// recebe o maior
  let howMany = 0
  
  for (let index = 0; index < myList.length; index += 1) {
    if (myList[index] > theBiggest) { 
      // se o meu valor nessa posição for maior que zero
      theBiggest = myList[index];
    }
  }
  // return theBiggest;

  for (let i= 0; i < myList.length; i += 1) {
    if ( theBiggest === myList[i]) howMany += 1;
  }
  return howMany;

}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  
  let cat1Distance = cat1 - mouse;
  let cat2Distance = cat2 - mouse;
  let resultado;

  if (cat1 < mouse ) {
    cat1Distance = mouse - cat1;
  }
  if (cat2 < mouse) {
    cat2Distance = mouse - cat2;
  }

  if (cat2Distance === 2 && cat1Distance === 3) {
    resultado = 'cat2';
  }
  if (cat1Distance === 6 && cat2Distance === 12) {
    resultado = 'cat1';
  }
  if (cat1Distance === cat2Distance) {
    resultado = 'os gatos trombam e o rato foge';
  }

  return resultado;
}

//  console.log(catAndMouse (1, 0, 2));


// Desafio 8
function fizzBuzz(inputArray) {
  let returnArray = [];

  for (let i = 0; i < returnArray.length; i += 1) {
    const element = array[i];

    espera = ''

    if (inputArray[i] % 3 === 0 && iputArray[i] % 5 === 0) {
      espera += 'fizzbuzz';
    } else if (inputArray[i] % 3 === 0) {
      espera += 'fizz';
    } else if (iputArray[i] % 5 === 0) {
      espera += 'buzz';
    }
    
    returnArray.push(espera);
  }

 return returnArray;

}
let meuTeste = [15, 7, 9, 45];
console.log(fizzBuzz (meuTeste));


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
