//Exercicio 1--- funçao usando operador &&
function compareTrue(bolean1,bolean2){
  if(bolean1 && bolean2){
      return true;
  }else{
      return false;
  }
}
//Exericico 2--- Funçao area de triangulo
function calcArea(base,altura){
  return (base*altura)/2;
}
//Exercicio 3--- Dividir frase
function splitSentence(frase){
  let frases = [];
  let letras = "";
  let sentença = frase;
  for(i=0;i<sentença.length+1;i++){
      if(frase[i]=== " " || i == sentença.length){
          frases.push(letras);
          letras = "";
      }else{
          letras += frase[i];
      }
  }
  return frases
}
//Exercicio 4 concatenaçao de strings
function concatName(frases){
  return Concatenados = ""+[frases[frases.length-1]+", "+ frases[0]];
}
//Exercicio 5 quantidades de pontos
function footballPoints(wins,ties){
  return (wins*3 + ties);
}
//Exercicio 6 repetiçao do maior numero
function highestCount(numeros){
  let vezesqaparece;
  let maiornumero = -1000;
  for(i=0;i< numeros.length+1;i++){
      if(numeros[i] > maiornumero){
          maiornumero = numeros[i]
          vezesqaparece = 1;
      }
      else if(numeros[i] == maiornumero){
          vezesqaparece++;
      }
  }
  return vezesqaparece;
}
//Exercicio 7 caça rato
function catAndMouse(mouse,cat1,cat2){
  if(Math.abs(mouse - cat1) > Math.abs(mouse - cat2)){
      return "cat2";
  }
  else if(Math.abs(mouse - cat2) > Math.abs(mouse - cat1)){
      return "cat1";
  }
  else{
      return "os gatos trombam e o rato foge";
  }
}
//Exericico 8 fizzbuzz
function fizzBuzz(numeros){
  let respostas = [];
  for(i=0;i<numeros.length;i++){
      if(numeros[i]%3 == 0){
          if(numeros[i]%5 == 0){
              respostas.push("fizzBuzz");
          }else{
              respostas.push("fizz")
          }
      }else if(numeros[i]%5 == 0){
          respostas.push("buzz")
      }else{
          respostas.push("bug!");
      }
  }
  return respostas;
}
//Exerciico 9 codifique e descodigique
function encode(frase){
  let newfrase = "";
  for(i=0;i<frase.length;i++){
      if(frase[i] == "a"){
          newfrase += "1";
      }else if(frase[i] == "e"){
          newfrase += "2";
      }else if(frase[i] == "i"){
          newfrase += "3";
      }else if(frase[i] == "o"){
          newfrase += "4";
      }else if(frase[i] == "u"){
          newfrase += "5";
      }else{
          newfrase += frase[i];
      }
  }
  return newfrase;
}
function decode(frase){
  console.log("FOI CHAMAD");
  let newfrase = "";
  for(i=0;i<frase.length;i++){
      if(frase[i] == "1"){
          newfrase += "a";
      }else if(frase[i] == "2"){
          newfrase += "e";
      }else if(frase[i] == "3"){
          newfrase += "i";
      }else if(frase[i] == "4"){
          newfrase += "o";
      }else if(frase[i] == "5"){
          newfrase += "u";
      }else{
          newfrase += frase[i];
      }
  }
  return newfrase;    
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
