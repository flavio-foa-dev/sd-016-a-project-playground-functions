// Desafio 1
function compareTrue(valor1,valor2) {
  // seu código aqui
  if(valor1 == true && valor2 == true){
    return true
  } 
  else{
    return false;
  }  
}

console.log(compareTrue(true,true));

// Desafio 2
function calcArea(base,altura) {
  // seu código aqui
  let result = (base * altura)/2;
  console.log ('Á Área do Triângulo é: ' + (base * altura)/2);
  return result;

}

console.log(calcArea(4,8));

// Desafio 3
function splitSentence(texto) {
  // seu código aqui
  let result = texto.split(" ");
  return result;

}

console.log(splitSentence('go trybe'));

// Desafio 4
function concatName(word) {
  // seu código aqui
 result = word[word.length - 1] + ", " + word [0];
 return result

}

console.log(concatName(['Tomar café', 'Reunião', 'Brincar com o cachorro']));

// Desafio 5
function footballPoints(wins,ties) {
  // seu código aqui
  result = (wins*3)+(ties)
  return result

}

console.log(footballPoints(14,8));

// Desafio 6
function highestCount(numeros) {
  // seu código aqui
  let count2 = 0;
  let maiornum = numeros[0];
  for (let index = 1; index < numeros.length; index += 1) {
    if (numeros[index] > maiornum) {
      maiornum = numeros[index];
    }
  }
  // console.log ('O maior número é: ' + maiornum);
  for (index = 0; index < numeros.length; index += 1) {
    if (numeros[index] === maiornum) {
      count2 += 1;
    }
  }
  return count2;

}

console.log(highestCount([60, 60, 60, 33, 60, 1]));

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {

  let Cat1dist = cat1 - mouse;
  if (mouse > cat1) Cat1dist = mouse - cat1;

  let Cat2dist = cat2 - mouse;
  if (mouse > cat2) Cat2dist = mouse - cat2;

  if (Cat1dist > Cat2dist) return 'cat2';
  if (Cat2dist > Cat1dist) return 'cat1';
  return 'os gatos trombam e o rato foge';
 
}

console.log(catAndMouse(5, 4, 6));


// Desafio 8
function fizzBuzz(number) {
  let num=[];
  /*
  for (index = 0; index < number.length; index += 1) {
    switch(number) {
      case ((number[index] % 3) === 0 && (number[index] % 5) === 0):
        num.push('fizzBuzz');
        break;
      case ((number[index] % 3) === 0):
        num.push('fizz');
        break;
      case ((number[index] % 5) === 0):
        num.push('buzz');
        break;
      default:
        num.push('bug!');
        break;
    }
  }
  */

  for (index = 0; index < number.length; index += 1) {
    if ((number[index] % 3) === 0 && (number[index] % 5) === 0) {
      num.push('fizzBuzz');
    } else if ((number[index] % 3) === 0) {
      num.push('fizz');
    } else if ((number[index] % 5) === 0) {
      num.push('buzz');
    } else {
      num.push('bug!');
    }
  }
 
  return num;
}
  console.log(fizzBuzz([2, 15, 7, 9, 45]));
  
  



function encode(palavra) {
  let splitvar = palavra.split('');
  for (let index = 0; index < splitvar.length; index += 1) {
      if (splitvar[index] === 'a') {
      splitvar[index] = '1';	
    } else if (splitvar[index] === 'e') {
      splitvar[index] = '2';
    } else if (splitvar[index] === 'i') {
      splitvar[index] = '3';
    } else if (splitvar[index] === "o") {
      splitvar[index] = '4';
    } else if (splitvar[index] === 'u') {
      splitvar[index] = '5';
    } else {
      splitvar[index] = splitvar[index];
    }
  } 
  let newword = splitvar.join('');
  return newword; 
} 

function decode(palavra) {
  let splitvar = palavra.split('');
  for (let index = 0; index < splitvar.length; index += 1) {
      if (splitvar[index] === '1') {
      splitvar[index] = 'a';	
    } else if (splitvar[index] === '2') {
      splitvar[index] = 'e';
    } else if (splitvar[index] === '3') {
      splitvar[index] = 'i';
    } else if (splitvar[index] === "4") {
      splitvar[index] = 'o';
    } else if (splitvar[index] === '5') {
      splitvar[index] = 'u';
    } else {
      splitvar[index] = splitvar[index];
    }
  }
  let newword = splitvar.join('');
  return newword; 
}

let testando = 'hi there!';
console.log(encode(testando));
console.log(decode(testando));

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
