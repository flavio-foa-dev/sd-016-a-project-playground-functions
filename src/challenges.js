// Desafio 1
function compareTrue(value1, value2) {
  // seu código aqui  Iniciando projeto
  if (value1 === true && value2 === true){
    return(true);
  } else {
    return(false);
  }
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  area = (base*height)/2;
  return(area);
}

// Desafio 3
function splitSentence(string) {
  // seu código aqui
  let splits = string.split(" ");
  return(splits)
}

// Desafio 4
function concatName(names) {
  // seu código aqui
  
  lastName = names[names.length - 1];
  firstName = names[0];

  let lastAndFirstNames = [lastName , firstName];

  return(lastAndFirstNames[0] + ', ' + lastAndFirstNames[1]);
}

// Desafio 5
function footballPoints(wins,ties) {
  // seu código aqui

  pointWin = wins*3
  pointTie = ties*1

  sum = pointWin + pointTie

  return(sum)
  
}

// Desafio 6
function highestCount(list) {
  // seu código aqui
  let addValue = 0;
  let cont = 0;
  let add = 0;
  let maxValue = Math.max.apply(null, list);
  /*
  Explicação de como funciona e de onde foi retirado o metodo da var 'addValue' no link abaixo
  https://pt.stackoverflow.com/questions/35202/como-saber-o-maior-valor-de-um-array  
  */ 

  for (let i = 0; i < list.length; i++){
    cont = cont + 1;
  }
 
  for (let index = 0; index < list.length; index +=1){
  
    if (list[index] === 0){
      add = add + 1;
    }

    else if (list[index] === maxValue){  
      addValue = addValue + 1;
    }

  }

  if (add === list.length){ 
    return(add);
  }

  else {
    return(addValue);
  }
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  let distanceMouseForCat1 = 0;
  let distanceMouseForCat2 = 0;
  let distanceCat1ForCat2 = 0;

  distanceMouseForCat1 =  (mouse - cat1);
  distanceMouseForCat2 = (mouse - cat2);
  distanceCat1ForCat2 = (cat1 - cat2);

  if (distanceMouseForCat1 < 0){
    distanceMouseForCat1 = distanceMouseForCat1 * -1
  }
  else if(distanceMouseForCat2 < 0){
    distanceMouseForCat2 = distanceMouseForCat2 * -1
  }
  
  if (distanceMouseForCat1 > distanceMouseForCat2){
    return('cat2');
  }

  else if (distanceMouseForCat1 < distanceMouseForCat2){
    return('cat1');
  }

  else if (distanceMouseForCat1 === distanceMouseForCat2){
    return('os gatos trombam e o rato foge');
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
