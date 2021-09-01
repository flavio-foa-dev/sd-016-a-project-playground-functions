// Desafio 1
function compareTrue(a, b) {
  if (a === true && b === true){
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  let resultado = (base*height/2);
  return resultado;
}

// Desafio 3
function splitSentence(frase) {
  let retorno = frase.split(" "); // https://blog.betrybe.com/javascript/javascript-split/ varrerá a string em busca de caractere de espaço. - Fernando Mós Turma 16 tribo A
  return retorno;
}

// Desafio 4
function concatName(arr) {
  let primeiro = arr.shift();
  let ultimo = arr.pop();

  return (ultimo + ", " + primeiro);
}

// Desafio 5
function footballPoints(wins, ties) {
  let totalPontos = ((3 * wins) + (1 * ties));

  return totalPontos;
}

// Desafio 6
function highestCount(numbers) {
  let maiorValor = numbers[0];
  let qtd = 0;
  for (let key in numbers){
    if (numbers[key] > maiorValor){
      maiorValor = numbers[key];
    }
  }
  for (let key in numbers){
    if (maiorValor === numbers[key]){
      qtd += 1
    }
  }
  return qtd;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanciaCat1 = (mouse - cat1);
  let distanciaCat2 = mouse - cat2;

 if (distanciaCat1 < 0){
   distanciaCat1 = distanciaCat1 * (-1);
 }

 if (distanciaCat2 < 0){
  distanciaCat2 = distanciaCat2 * (-1);
}

  if (distanciaCat1 < distanciaCat2){
    return "cat1"
  } else if ( distanciaCat1 > distanciaCat2){
    return "cat2"
  } else {
    return "os gatos trombam e o rato foge"
  } 
}

// Desafio 8
function fizzBuzz(matriz) {
  let resposta = [];
  for (let key in matriz){
    if ((matriz[key] % 3 === 0) && (matriz[key] % 5 === 0)){
      resposta.push ("fizzBuzz");
    } else if (matriz[key] % 3 === 0){
      resposta.push ("fizz");
    } else if (matriz[key] % 5 === 0){
      resposta.push ("buzz")
    } else {
      resposta.push ("bug!")
    }
  }

  return resposta
}

// Desafio 9
function encode(str) {
  let letras = str.split("");
  for (let key in letras){
    if (letras[key] === "a"){
      letras[key] = 1;
    } else if (letras[key] === "e"){
      letras[key] = 2;
    } else if (letras[key] === "i"){
      letras[key] = 3;
    } else if (letras[key] === "o"){
      letras[key] = 4;
    } else if (letras[key] === "u"){
      letras[key] = 5;
    }
  }

  return letras.join('');
};

function decode(inverso) {
  let newInverso = inverso.split("");
  for (let key in newInverso){
    if (newInverso[key] === "1"){
      newInverso[key] = "a";
    } else if (newInverso[key] === "2"){
      newInverso[key] = "e";
    } else if (newInverso[key] === "3"){
      newInverso[key] = "i";
    } else if (newInverso[key] === "4"){
      newInverso[key] = "o";
    } else if (newInverso[key] === "5"){
      newInverso[key] = "u";
    }
  }

  return newInverso.join('');
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
