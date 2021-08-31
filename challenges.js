// Desafio 1
function compareTrue(value1,value2) {

  if (value1 == true && value2 == true) {
    return true;
  } else {
    return false;
  }
}
compareTrue(false,true);
compareTrue(false,false);
compareTrue(true,true);

// Desafio 2
function calcArea(base,height) {
  return (base*height)/2;

}
calcArea(10,50);
calcArea(5,2);
calcArea(51,1);

// Desafio 3
function splitSentence(texto) {
  return texto.split(' ');

}
splitSentence('go Trybe');
splitSentence('vamo que vamo');
splitSentence('foguete');

// Desafio 4
function concatName(array) {
  let length = array.length
  let texto = array[length -1] + ", " + array[0];
  return texto;
}
concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']);
concatName(['foguete', 'não', 'tem', 'ré']);
concatName(['captain', 'my', 'captain']);

// Desafio 5
function footballPoints(wins,ties) {
  let pointsWin = wins*3;
  let pointTies = ties;
  return pointTies + pointsWin;

}
footballPoints(14,8);
footballPoints(1,2);
footballPoints(0,0);

// Desafio 6
function highestCount(array) {
  let count = 0;

  for (let indexCount = 0 ; indexCount < array.length ; indexCount++) {

    for (let indexCurrent = 0 ; indexCurrent < array.length ; indexCurrent++) {
    
      if (array[indexCount] > array[indexCurrent]) {

        let currentIndex = array[indexCount];
        array[indexCount] = array[indexCurrent];
        array[indexCurrent] = currentIndex;    
    }
  }
}
  for (let repCount = 0 ; repCount < array.length ; repCount++) {

    if (array[0] == array[repCount]) {
      count++;
    }
  }

  return count;
  
}
highestCount([9, 1, 2, 3, 9, 5, 7]);
highestCount([0, 4, 4, 4, 9, 2, 1]);
highestCount([0, 0, 0]);

// Desafio 7
function catAndMouse(mouse,cat1,cat2) {
  if (cat1 - mouse > cat2 - mouse) {
    return "cat1";

  } else if (cat2 - mouse > cat1 - mouse) {
    return "cat2";

  } else {
    return "os gatos trombam e o rato foge";

  }
}
catAndMouse(1,3,2);
catAndMouse(1,6,12);
catAndMouse(1,10,10);

// Desafio 8
function fizzBuzz(array) {
  let arrayResposta = [];

  for (let count = 0 ; count < array.length ; count++) {
    if (array[count]%3 == 0 && array[count]%5 != 0) {
      arrayResposta.push('fizz');
    } else if (array[count]%5 == 0 && array[count]%3 != 0) {
      arrayResposta.push('buzz');
    } else if (array[count]%3 == 0 && array[count]%5 == 0) {
      arrayResposta.push('fizzBuzz');
    } else {
      arrayResposta.push('bug');
    }
  }
  return arrayResposta;
}

fizzBuzz([2, 15, 7, 9, 45]);
fizzBuzz([7, 9]);
fizzBuzz([9, 25]);

// Desafio 9

function encode(texto){
  let textoArray = texto.split('')
  for (index = 0 ; index < textoArray.length ; index++) {
    switch (textoArray[index]) {
      case 'a': 
        textoArray[index] = '1';
        break;
      case 'e': 
        textoArray[index] = '2';
        break;
      case 'i': 
        textoArray[index] = '3';
        break;
      case 'o': 
        textoArray[index] = '4';
        break;
      case 'u': 
        textoArray[index] = '5';
        break;
      }
  }  
  return textoArray.join('');
}
encode("hi there!");

function decode(textocod) {
  let textoArray = textocod.split('')
  for (index = 0 ; index < textoArray.length ; index++) {
    switch (textoArray[index]) {
      case '1': 
        textoArray[index] = 'a';
        break;
      case '2': 
        textoArray[index] = 'e';
        break;
      case '3': 
        textoArray[index] = 'i';
        break;
      case '4': 
        textoArray[index] = 'o';
        break;
      case '5': 
        textoArray[index] = 'u';
        break;
    }
  }
  return textoArray.join('');
}
decode("h3 th2r2!");

// Desafio 10
function ordena(array,name) {
    
  if (array.length === 0) {
    return 'Vazio!';

  } else {
    array.sort();
    let arrayOrdenada = [];
    for (let index = 0 ; index < array.length ; index++) {
      arrayOrdenada.push({'tech':array[index], 'name': name});
    }
    return arrayOrdenada;
  }
}
ordena(["React", "Jest", "HTML", "CSS", "JavaScript"], "Lucas");