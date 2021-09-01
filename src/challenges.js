// Desafio 1
function compareTrue(a, b) {
  if (a === true && b === true) {
	// && = ambos necessariamente são true
    return true;
	// true e false, false e true, false e false -> outras possibilidades para ser false
  } 
  return false;
}
const c = true;
const d = false;
const e = true;
const f = false;
console.log(compareTrue(d, c));
console.log(compareTrue(c, f));
console.log(compareTrue(c, e));

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
	return area;  
}
console.log(calcArea(10, 50));
console.log(calcArea(5, 2));
console.log(calcArea(51, 1));

// Desafio 3

var palavra ='go Trybe'
var palavra2 = 'vamo que vamo';
var palavra3 = 'foguete'

function splitSentence(string) {
  // criar um array vazio para receber as letras
  // let resultado = [];
  // tentativa de separar usando split (como no exercicio -- ok) e dando push (fail) disso no array;
  let separado = string.split(' ');
  // com [string] fica um array dentro de array
  return separado;
}

console.log(splitSentence(palavra));
console.log(splitSentence(palavra2));
console.log(splitSentence(palavra3));

// Desafio 4
function concatName(array) {
// aplicar o for para percorrer os elementos do array
   for (let i = 0; i <= array.length; i+=1){
// criar variavel que recebe último e primeiro item === array.lenght -1 e array[0];
    let primeiraVar = array[0];
    let ultimaVar = array[array.length-1]
    let resultado = ultimaVar + ", " + primeiraVar
    return resultado
// 
  }
}

let array1 = ['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']
console.log(concatName(array1))
let array2 = ['foguete', 'não', 'tem', 'ré'];
console.log(concatName(array2));
let array3 = ['captain', 'my', 'captain'];
console.log(concatName(array3));


// Desafio 5
function footballPoints(wins,ties) {
  let vitoria = wins;
  let empate = ties;
  let pontuacao = (vitoria * 3) + (empate * 1);
  return pontuacao
}

wins = 14;
ties = 8;
console.log(footballPoints(14,8))
wins = 1;
ties = 2;
console.log(footballPoints(1,2));
wins = 0;
ties = 0;
console.log(footballPoints(0,0))

// Desafio 6
function highestCount(array) {
  let numeroMax = array[0]   
  for (let index = 0; index <= array.length; index +=1){
    if (array[index] > numeroMax){
    numeroMax = array[index];
  } 
}  let contador =0;
  for (let i = 0; i <= array.legnth -1; i +=1){
  if (numeroMax === array[i]){
      contador = contador + 1;
  }
  }
  return contador;
}

let array4 = [9,1,2,3,9,5,7];
console.log(highestCount(array4));

// Desafio 7
function catAndMouse(rato, gato1, gato2) {
  let resultado = [" "];
  // animais em linha -> pensar num eixo X e distancia de pontos
	let distanciaRatoGato1 = rato - gato1;
	let distanciaRatoGato2 = rato - gato2;
	if (distanciaRatoGato1 > distanciaRatoGato2){
		resultado = resultado.push('cat2')
	} else if ( distanciaRatoGato2 > distanciaRatoGato1){
    resultado = resultado.push('cat1');
  } else {
    resultado = resultado.push('os gatos trombam e o rato foge')
  }
	return resultado
}

console.log(catAndMouse(14,5,111))


// Desafio 8
function fizzBuzz(array) {
  for (let i=0; i <= array.length; array+=1){
    // variavel array para receber as respostas
    let resposta = []
    if (array[i] % 3 === 0 && array[i] % 5 === 0) {
      let resposta1 = 'fizzBuzz';
    } else if (array[i] % 3 === 0){
      let resposta2 = 'fizz';
    resposta.push('fizz');
    } else if (array[i] % 5=== 0){
      let resposta3 = 'buzz'
    } else {
      let resposta4 = 'bug!' 
    }
  }
  let respostafinal = [resposta1 + resposta2 + resposta3 + resposta4]
  return respostafinal
}

let array5 = [2, 15, 7, 9, 45];
console.log(fizzBuzz(array5));

// Desafio 9
function encode(string) {
	let separacao = string.split(' ');
	let arrayVazio = [" "]
	for (let i= 0; i >= separacao.length; i +=1 ){
		if ( separacao[i] === 'a'){
		arrayVazio.push('1');	
	} else if ( separacao[i] === 'e'){
		arrayVazio.push('2');
	} else if ( separacao[i] === 'i'){
		arrayVazio.push('3');
	} else if ( separacao[i] === "o"){
		arrayVazio.push('4');
	} else if ( separacao[i] === 'u'){
		arrayVazio.push('5');
	} else {
		arrayVazio.push(separacao[i])
	} return arrayVazio.join(' ')
	}
}
let teste = 'oi'
console.log(encode(teste))



function decode() {
  
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
