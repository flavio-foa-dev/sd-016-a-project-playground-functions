// Desafio 1
function compareTrue(input1, input2) {
  if(input1==true && input2=== true){
    return true
  } else {
    return false
  }
}

// Desafio 2
function calcArea(base, height) {
  let areaTriangulo = (base*height)/2;
  return areaTriangulo
}

// Desafio 3
function splitSentence(string) {
  // seu código aqui
  let resultado = string.split(" ");

  return resultado

}

// Desafio 4
function concatName(array) {
  // seu código aqui
  let resultado = array[(array.length-1)]+ ", "  + array[0];
  console.log(resultado);
  return resultado


}
 

// Desafio 5
function footballPoints(wins,ties) {
  let counterwins = wins*3;
  let counterties = ties;
  let resultado = counterties+counterwins;
  return resultado
}

// Desafio 6
function highestCount(array) {
  let counter = 0;
  let maxvalue = Math.max(...array);
  for(let i = 0; i < array.length; i=i+1) {
     if(array[i]===maxvalue) {
    counter = counter+1;
     };
  }
  return counter
}


// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  if(Math.abs(mouse-cat1)>Math.abs(mouse-cat2)) {
    return "cat2"    
  }
  if(Math.abs(mouse-cat2)>Math.abs(mouse-cat1)) {
    return "cat1"
  }
  if(Math.abs(mouse-cat2)==Math.abs(mouse-cat1)){
    let resultado = "os gatos trombam e o rato foge"
    return resultado
  }     
}
console.log(catAndMouse(5,3,3))

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
}

