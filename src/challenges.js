// Desafio 1
function compareTrue(a, b) {
  // seu código aqui
  if ( a && b === true)
  { return true;
  } else {return false;}
  }

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  return base*height/2;
}

// Desafio 3
function splitSentence(string) {
  // seu código aqui
  return string.split(' ');
}

// Desafio 4
function concatName(array) {
  // seu código aqui
  return array[array.length-1]+ ", "+ array[0];
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  return wins*3 +ties;
}

// Desafio 6
function highestCount(array) {
  // seu código aqui
  let maior= array[0];
  for( let i=0; i<= array.length;i++){
    if(array[i] > maior)
      {maior = array[i];}
    } 
   let contador = 0;
   for ( let I=0 ;I<=array.length;I++){
     if (maior === array[I]){
       contador ++};
     }
     return contador;
   }


// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui

     if (Math.abs(cat1 - mouse) < Math.abs(cat2 - mouse)) {
      return 'cat1';
    } else if (Math.abs(cat1 - mouse) > Math.abs(cat2 - mouse)) {
      return 'cat2';
    } else {
      return "os gatos trombam e o rato foge";
    }
  }

// Desafio 8
function fizzBuzz(array) {
  // seu código aqui
  let arrayNovo = [];
  for(let i=0;i<=array.length;i++){
    if (array[i] %3 === 0 && array[i] %5 !== 0){
      arrayNovo.push ("fizz");
    }
    else if (array[i] %3 !== 0  && array[i]%5 === 0){
      arrayNovo.push("buzz");
    }
    else if ( array[i] %3 === 0 &&  array[i] %5 === 0){
      arrayNovo.push("fizzBuzz");
    } 
    else {arrayNovo.push("bug!");
  }}
    return arrayNovo;
  }
  


// Desafio 9
function encode(string) {
  // seu código aqui
  
  let stringNova = string.split('');
    for (let i=0; i <= stringNova.length; i++){
    if (stringNova[i]=== "a"){stringNova[i] ="1";} 
     else if(stringNova[i]==="e") {stringNova[i]="2";}
     else if(stringNova[i]==="i") {stringNova[i]="3";}
     else if(stringNova[i]==="o") {stringNova[i]="4";}
     else if(stringNova[i] ==="u") {stringNova[i]="5";}
    } 
    return stringNova.join('');
}
function decode(string) {
  // seu código aqui
  novaString = string.split('');
for (let i=0; i <= novaString.length; i++){
  if (novaString[i]=== "1"){novaString[i] ="a";} 
   else if(novaString[i]==="2") {novaString[i]="e";}
   else if(novaString[i]==="3") {novaString[i]="i";}
   else if(novaString[i]==="4") {novaString[i]="o";}
   else if(novaString[i] ==="5") {novaString[i]="u";}
  } 
  return novaString.join('');
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
