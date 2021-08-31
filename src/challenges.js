// Desafio 1
function compareTrue(a,b,resultado) {
  if (a===true && b===true) {
  resultado = true;
  }else{
    resultado = false;
  } 
  return resultado
}
console.log(compareTrue(true,true))

// Desafio 2
function calcArea(base,heigth,result) {
   result = (base*heigth)/2;
   return result
}
console.log(calcArea(5,2));  


// Desafio 3
function splitSentence(str) {
 return str.split(' ');
}
console.log(splitSentence("go trybe"));

// Desafio 4
function concatName(frase) {
  
  let nome1 = '';
  let result= '';
   
   nome1 = frase[frase.length-1];
   result = nome1 + ', ' + frase[0];
  return result;
}
  console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']))
// Desafio 5
function footballPoints(wins,ties) {
   wins = wins * 3;
   ties + '';
  return wins + ties; 
  /* return (wins*3)+ties; */
}
console.log(footballPoints(14,8));

// Desafio 6
function highestCount(numeros) {

  let highNumber = numeros[0];
    let repeatNumber = 0;

    for(let cont = 0; cont < numeros.length; cont+= 1){
        if (numeros[cont] > highNumber ){
            highNumber = numeros[cont];
        }
    }

    for (let index = 0; index < numeros.length; index+=1) {
       if (highNumber === numeros[index]) {
          repeatNumber +=1;
       }
    }    

      return repeatNumber;
}

// Desafio 7
function catAndMouse(mouse,cat1,cat2) {
  
  let distCat1 = mouse - cat1;
  let distCat2 = mouse - cat2;

  if (Math.abs(distCat1) === Math.abs(distCat2)){
      return "os gatos trombam e o rato foge"; 
  }
  else if (distCat2 > distCat1){
    return "cat2";
  }
  else if (distCat1 > distCat2){
    return "cat1";
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
