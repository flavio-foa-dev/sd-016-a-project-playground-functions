// Desafio 10
function techList(list, names) {

  if (list.length === 0) {
    return 'Vazio!';
  }

  list = list.sort();
  for (let cont = 0; cont < list.length; cont += 1) {
    let object = {
    }

    object['tech'] = list[cont];
    object['name'] = names;

    console.log(object);
  }
}


// Desafio 11
function generatePhoneNumber(array) {
  // Retorne a string "Array com tamanho incorreto." caso o array tenha o tamanho diferente de 11.
  if (array.length != 11) {
    return "Array com tamanho incorreto.";
  }

  //Retorne a string "não é possível gerar um número de telefone com esses valores" caso algum dos números do array seja menor que 0 ou maior do que 9.
  for (let cont = 0; cont < array.length; cont += 1) {
    if (array[cont] < 0 || array[cont] > 9) {
      return "não é possível gerar um número de telefone com esses valores";
    } 
  }

  // Retorne a string "não é possível gerar um número de telefone com esses valores" caso algum número do array se repetir 3 vezes ou mais.
  for (let cont = 0; cont < array.length; cont += 1) {
    let number = array[cont];
    let repetition = 0;
    for (let index = 0; index < array.length; index += 1) {
      if (number === array[index]) {
        repetition += 1;
      }
    
    if (repetition >= 3) {
      return "não é possível gerar um número de telefone com esses valores";
    }
    }
  }

  for (let cont = 0; cont < array.length; cont += 1) {
    let telephoneNumber = "(";
    
    for (cont = 0; cont < 2; cont += 1) {
      telephoneNumber = telephoneNumber + array[cont];
    }

    telephoneNumber = telephoneNumber + ")" + " ";

    for (cont = 2; cont <= 6 ; cont += 1) {
      telephoneNumber = telephoneNumber + array[cont];
    }

    telephoneNumber = telephoneNumber + "-";
    
    for (cont = 7; cont < array.length ; cont += 1) {
      telephoneNumber = telephoneNumber + array[cont];
    }
  
    return telephoneNumber;
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
