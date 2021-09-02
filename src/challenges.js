// Desafio 1
function compareTrue(number1, number2) {
  // Compara dois valores se ambos são true;
  // Retorna com true se caso ambos sejam true e false para qualquer valor # true
  if (number1 === true && number2 === true) {
    return true
  } else {
    return false
  }
}

// Desafio 2
function calcArea(base, height) {
  // função recebe valor base(base) e altura(height) de um triângulo
  // retorna o cálculo da sua área
  // fórmula da área de um triângulo (base * altura) / 2
  let areaTriangle = (base * height) / 2;
  return areaTriangle
}

// Desafio 3
function splitSentence(stringSplit) {
  // função recebe uma string
  // retorna uma array de strings separadas por cada espaço na string original.
  // let space = ' ';
  let arrayString = stringSplit.split(space);
  return arrayString
}

// Desafio 4
function concatName(stringArray) {
  // função receber uma array de strings
  // retorna uma string com o formato `'ÚLTIMO ITEM, PRIMEIRO ITEM'`
  // independente do tamanho da array
  let lastIndex = stringArray.length - 1;
  let stringConcat = stringArray[lastIndex] + ' '+ stringArray[0];
  return stringConcat
}

// Desafio 5
function footballPoints(wins,ties) {
  // função recebe o número de vitórias(chamar `wins`)
  // e o número de empates( chamar `ties`)
  // retorna a quantidade de pontos que o time marcou em um campeonato.
  let spotsTime = (wins * 3) + ties;
  return spotsTime
}

// Desafio 6
function highestCount(numbersArray) {
  // função recebe uma array de números
  // retorna a quantidade de vezes que o maior deles se repete.
  // let numbersArray = [0, 0, 0, 1, 1, 1, 1]; //[9, 1, 2, 3, 9, 5, 7] ; //[0, 4, 4, 4, 9, 2, 1]
  let higherAtual  = 0;
  let sumhigherNumber = 0;
  let number1 = 0;
  let number2 = 0;
  let sumhigherNumber = 0;

  for (let index=0; index <numbersArray.length; index+=1){ 
    let number1 = numbersArray[index];
    let number2 = numbersArray[index+1];
    if ((number1 > number2) && (number1 > higherAtual)){
      let higherAtual = number1;
    }
    if ((number2 > number1) && (number2 > higherAtual)){
      let higherAtual = number2;
    }
  }
  for (let higherIndex=0; higherIndex <numbersArray.length; higherIndex+=1){
    if (numbersArray[higherIndex] === higherAtual) {
      let sumhigherNumber = sumhigherNumber + 1;
    }
  }
   return sumhigherNumber
 }

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  /* let cat2 = 2; */
  /* let cat1 = 3; */
  /* let mouse = 5; */
  let positionCat1 = (mouse - cat1);
  let positionCat2 = (mouse - cat2);
  if (mouse < cat1) {
    positionCat1 = (cat1 - mouse);
    //console.log(positionCat1)
  }
  if (mouse < cat2) {
    positionCat2 = (cat2 - mouse);
    //console.log(positionCat2);
  }
  if (positionCat1===positionCat2) {
    //console.log('os gatos trombam e o rato foge')
    return 'os gatos trombam e o rato foge';
  }else if (positionCat1 < positionCat2) {
    //console.log('cat1')
    return 'cat1';
  }else if (positionCat2 < positionCat1) {
    //console.log('cat2')
    return 'cat2';
  }
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
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
