// Desafio 10
function techList(array, name) {

  if (array.length == 0) {
    return 'Vazio!';
  }

  array = array.sort();
  let returnArray = [];
  for (let i = 0; i < array.length; i += 1) {
    let info = {
      tech: array[i],
      name: name,
    }
    returnArray.push(info)
  }
  return returnArray;
}

// Desafio 11
function generatePhoneNumber(array) {

  let phoneNumber = [];
  let count = 0;

  

  if (array.length != 11) {
    return 'Array com tamanho incorreto.';
  } else {
    phoneNumber;

    for (let i = 0; i < array.length; i += 1) {
      if (i == 0) {
        phoneNumber.push('(');
        phoneNumber.push(array[i]);
      } else if (i == 2) {
        phoneNumber.push(') ');
        phoneNumber.push(array[i]);
      } else if (i == 7) {
        phoneNumber.push('-');
        phoneNumber.push(array[i]);
      } else {
        phoneNumber.push(array[i]);
      }
    }
  }

  for(let i = 0; i < array.length; i += 1){
    for(let j = 0; j < array.length; j += 1){
      if(array[i] == array[j]){
        count += 1;
      }
    }
    if(count >= 3){
      return "não é possível gerar um número de telefone com esses valores";
    }else{
      count = 0;
    }

    if (array[i] < 0 || array[i] > 9) {
      return "não é possível gerar um número de telefone com esses valores";
    }
  }


  return phoneNumber.join('');
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if(((lineA < lineB+lineC) && (lineB < lineA + lineC) && (lineC < lineA + lineB)) && ((lineA > Math.abs(lineB - lineC) && (lineB > Math.abs(lineA - lineC) && (lineC > Math.abs(lineA - lineB)))))){
    return true;
  }else{
    return false;
  }
}

// Desafio 13
function hydrate(string) {

  string = string.split('');

  //cria uma array com todos os numeros encontrados -> numeros estarão no tipo string
  let sum = 0;

  let matches = [];

  for(let i = 0; i < string.length; i += 1){
      if(string[i] == '1' || string[i] == '2' || string[i] == '3' || string[i] == '4' || string[i] == '5' || string[i] == '6' || string[i] == '7' || string[i] == '8' || string[i] == '9'){
          matches.push(string[i]);
      }
  }

  for (let i = 0; i < matches.length; i += 1) {
      sum += parseInt(matches[i]);  // passa de string para number -> https://www.alura.com.br/artigos/convertendo-string-para-numero-em-javascript?gclid=Cj0KCQjwpreJBhDvARIsAF1_BU2BKYU6f6ReQl7b1z1TH6HDzqJ7xsHremu8uaTEcvL1hkzuWM9gOjYaAh1DEALw_wcB
  }

  if (sum == 1) {
      return sum + ' copo de água'
  } else {
      return sum + ' copos de água'
  }

}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
