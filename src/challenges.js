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
console.log(catAndMouse(2,8,3))
// Desafio 8
function fizzBuzz(array) {
  const fizzBuzz = [];
          /* crieia funçao com o parametro "array", criei uma constante 
          chamada fizzBuzz com valor de um array vazio "[]" */
  for (let index of array) {
            /* inicio do laco de repetição começando 
           com o indice valendo o primeiro valor do array */
    if (index % 5 === 0 && index % 3 === 0){
      fizzBuzz.push('fizzBuzz');/* se o resto '%' da divisao
          do index ="2" por 5 for === igual a 0, '&&' 'e' o resto da do index = 2 por 3 for 
          igual === 0; o fizzbuzz.push ira inserir a string  'fizzbuzz' dentro do array fizzBuzz[]*/
    } else if (index % 3 === 0){
      fizzBuzz.push('fizz');/* senao se o resto da % divisao do index =2 por 3 === 0; 
                              o fizzBuzz.push ira inserir a string "fizz" no array "fizzBuzz[]" */
    } else if (index % 5 === 0){
      fizzBuzz.push('buzz');/* senao se o resto % da divisao do index =2 por 5 === 0; 
                               o fizzBuzz.push ira inserir a string "buzz" no array "fizzBuzz[]" */
    } else {
      fizzBuzz.push('bug!');/* se nao for nenhumas das altenativas acima significa
                             que o numero nao é divisivel po 3 ou 5 e entao o fizzBuzz.push ira inserir "bug" no array "fizzBuzz" */
    }
  }
  return fizzBuzz;/* no final retornar o que aconteceu para dentro do array fizzBuzz */
}
console.log(fizzBuzz([2, 15, 7, 9, 45]));/* aqui esta o parametro que é um array */

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
