// Desafio 1
function compareTrue(bolean1,bolean2) {
  if(bolean1==true && bolean2==true){
    return true
  }
  
  else{return false}
  // seu código aqui
}

// Desafio 2
function calcArea(base,altura) {
  // seu código aqui
  area=base*altura/2
  return area
}

// Desafio 3
function splitSentence(str) {
  // seu código aqui
  let armazenaIndex=0;
  array=[];
  let addLetraPlavra1="";
  for(contTotal=0;contTotal<=str.length;contTotal+=1){
    for(cont=armazenaIndex;cont<str.length;cont+=1){
      if(str[cont]!=" "){
        addLetraPlavra1+=str[cont]
        array[contTotal]=addLetraPlavra1
        armazenaIndex+=1;
      }
      else{
        armazenaIndex+=1;
        break;
        
      }
      
      
    }
    addLetraPlavra1=""
}

  
  return array
}
console.log(splitSentence("vamos trybe"))
// Desafio 4
function concatName() {
  // seu código aqui
}

// Desafio 5
function footballPoints() {
  // seu código aqui
}

// Desafio 6
function highestCount() {
  // seu código aqui
}

// Desafio 7
function catAndMouse() {
  // seu código aqui
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
