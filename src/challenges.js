// Desafio 1
function compareTrue(value1, value2) {
  if (value1 === true && value2 === true) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  let area = 0;
  area = (base * height) / 2;
  console.log(area);
  return area;
}

// Desafio 3
function splitSentence(string) {
  let array = string.split(" ");
  return array;

}

// Desafio 4
function concatName(names) {
  let firstName = names[0];
  let lastName = names[names.length - 1];
  let newNames = lastName + ", " + firstName;
  return newNames;

}

// Desafio 5
function footballPoints(wins, ties) {

  let winsPoints = wins * 3;
  let tiesPoints = ties * 1;
  let endGame = winsPoints + tiesPoints;
  return endGame;
}

// Desafio 6

function highestCount(numbers) {
  // Declarando variaveis fora do for.
  let array = numbers[0];
  let contador = 0;
  //Abrindo laço de repetição
  for (let index = 0; index < numbers.length; index += 1) {
    //Quando numbers[index] for maior que a variavél array(Que é a primeira posição de numbers[0], o valor de array é atualizado para o valor de numbers[index])
    if (numbers[index] > array) {
     array = numbers[index];
    } 
  } 
  for(let i=0; i < numbers.length;i +=1){
    if(numbers[i] === array){
      contador += 1;
    }
  } return contador;
  
} 


// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let resultado = 0;
  Math.abs(cat1,cat2,mouse);
  if(Math.abs(cat1 - mouse) < Math.abs(cat2 - mouse)){
    resultado = 'cat1';
  }else if (Math.abs(cat1 - mouse )> Math.abs(cat2 - mouse)){
    resultado = 'cat2';
  }else if(Math.abs(cat1 - mouse)  === Math.abs(cat2 - mouse) || cat1 === cat2 === mouse){
    resultado = 'os gatos trombam e o rato foge';
  }
  return resultado;
}

// Desafio 8

function fizzBuzz(numbers) {
 let mensaggem = [];
 for(let index = 0; index < numbers.length ; index += 1){
   if(numbers[index]%3===0 && numbers[index]%5===0){
     mensaggem.push('fizzBuzz');
   }
   else if(numbers[index]%3===0){
     mensaggem.push('fizz');
   }
   else if(numbers[index]%5 ===0){
     mensaggem.push('buzz');
   }
   else {
     mensaggem.push('bug!');
   }
 }
 return mensaggem;
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
