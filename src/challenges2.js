// Desafio 10
function techList(array, string) {
  // seu código aqui
  let orderedArray = array.sort();
  let newArray = [];
  
  if (array.length > 0) {
    for (let key in orderedArray) {
      let object = {
        tech: orderedArray[key],
        name: string
      }
      newArray.push(object);
    }
    return newArray;
  } else {
    return 'Vazio!';
  }
}

// Desafio 11
function generatePhoneNumber(numbers) {
  // seu código aqui
  if (numbers.length != 11) {
    return 'Array com tamanho incorreto.';
  }

  let isInvalid = false;
  let repeatedCount = 0;
  let mask = '(xx) xxxxx-xxxx';

  for (let number of numbers) {
    if (number < 0 || number > 9) {
      isInvalid = true;
    } else {
      for (let number2 of numbers) {
        if (number === number2) {
          repeatedCount += 1;
          if (repeatedCount >= 3) {
            isInvalid = true;
          }
        }
      }
      repeatedCount = 0;  
    }
    
  }
  
  numbers.forEach(item => {
    if (item < 0 || item > 9) {
      isInvalid = true;
    }
    mask = mask.replace('x', item);
    
  })

  if (!isInvalid) {
    return mask;
  }
  else {
    return 'não é possível gerar um número de telefone com esses valores';
  }
}

// Desafio 12
function triangleCheck() {
  // seu código aqui
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
