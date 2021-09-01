// Desafio 1
function compareTrue(value1, value2) {
  if(value1 === true && value2 === true){
    return true;
  }else{
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  return ((base * height) / 2);
}

// Desafio 3
function splitSentence(sentence) {
  result = sentence.split(" ");
  return result;
}

// Desafio 4
function concatName(names) {
  return `${names[names.length - 1]}, ${names[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  return wins*3 + ties;
}

// Desafio 6
function highestCount(value) {
  highestValue = value[0];
  counter = 0;
  for(i = 0; i < value.length; i++){
    if(highestValue < value[i]){
      highestValue = value[i];
      counter = 0;
    }
    if(highestValue === value[i]){
      counter++;
    }
  }
  return counter;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if(Math.abs(cat1 - mouse) > Math.abs(cat2 - mouse)){
    return "cat2";
  } else if(Math.abs(cat1 - mouse) < Math.abs(cat2 - mouse)){
    return "cat1";
  }
  if(Math.abs(cat1 - mouse) === Math.abs(cat2 - mouse)){
    return "os gatos trombam e o rato foge";
  }
}

// Desafio 8
function fizzBuzz(values) {
  //Pegando o tamanho do array
  arrayLenght = values.length;

    //correndo todos os numeros do array
    for(i = 0; i < arrayLenght; i++){

      //setando que inicialmente, nada pode se dividiro por 3 nem por 5
      canDivideBy3 = false;
      canDivideBy5 = false;

      //checando para 3
      if(values[i] % 3 === 0){
        canDivideBy3 = true;

        //checando para 5
        if(values[i] % 5 === 0){

          //se valer para os dois printar fizzbuzz
          if(canDivideBy3 === true){
            values[i] = "fizzBuzz";
          }
        } else{ //caso seja so para o 3 imprimir fizz
          values[i] = "fizz";
        }    
      } else if(values[i] % 5 === 0){ // caso seja so para o 5 imprimir buzz
        canDivideBy5 = true;
        values[i] = "buzz";
      }

      //caso nao seja para nenhum dos dois
      if(canDivideBy3 === false && canDivideBy5 === false){
        values[i] = "bug!";
      }
  }
  return values;
}

// Desafio 9
function encode(phrase) {
  let lettersNumbers = ["a","e","i","o","u"];
  result = phrase.split("");
  for(i = 0; i < phrase.length; i++){
    for(x = 0; x < lettersNumbers.length; x++){
      if(result[i] === lettersNumbers[x]){
        result[i] = x+1;
      }
    }
  }

  return result.join("");
}
function decode(phrase) {
  let lettersNumbers = ["1","2","3","4","5"];
  let numbersLetters = ["a","e","i","o","u"];
  result = phrase.split("");
  for(i = 0; i < phrase.length; i++){
    for(x = 0; x < lettersNumbers.length; x++){
      if(result[i] === lettersNumbers[x]){
        result[i] = numbersLetters[x];
      }
    }
  }

  return result.join("");
}

console.log(decode("h3 th2r2!"));
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
