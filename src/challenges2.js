// Desafio 10
function techList(array, name) {
  array.sort();
  let result = [];

  for (let i of array) {
    result.push({
      tech: i, 
      name: name
    });
  }
  if (array.length === 0) {
    return 'Vazio!';
  } else {
    return result;
  }
}


// Desafio 11
function generatePhoneNumber(array) {
  if(array.length != 11){
    return 'Array com tamanho incorreto.';
  }
  let count = 0;
  let error = false;

  for (let i = 0; i < array.length; i += 1){
    if (array[i] > 9 || array[i] < 0){
      error = true;
      break;
    }
    count = 0;
    for(let numbers in array){
      if(array[numbers] === array[i]){
        count += 1;
      }
    }
    if (count >= 3){
      error = true;
      break;
    }    
  }
  if(error){
    return 'não é possível gerar um número de telefone com esses valores'
  }
  return '('+array[0]+array[1]+') '+array[2]+array[3]+array[4]+array[5]+array[6]+'-'+array[7]+array[8]+array[9]+array[10];
} console.log (generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1]));



// Desafio 12
function triangleCheck(a, b, c) {
  if (a + b < c || Math.abs(a - b) > c) {
    return false;
  } else if (a + c < b || Math.abs(a - c) > b) {
    return false;
  } else if (c + b < a || Math.abs(c - b) > a) {
    return false;
  } else {
    return true;
  }
}


// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
