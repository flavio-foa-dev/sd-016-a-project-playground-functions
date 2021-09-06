// Desafio 10
function techList(tecnologias, name) {
  if (tecnologias.length === 0) {
    return ('Vazio!');
  }

  let newTech = tecnologias.sort();

  let tec = [];

  for (let i = 0; i < newTech.length; i += 1) 
    tec.push({tech : newTech[i], name : name});

  return tec;
}

// Desafio 11
function generatePhoneNumber(phoneNumber) {
  if(phoneNumber.length !== 11) {
    return("Array com tamanho incorreto.");
  }
  let formatedNumber = '(';
  for (let index = 0; index < phoneNumber.length; index += 1) {
    if (phoneNumber[index] > 9 || phoneNumber[index] < 0) {
      return ("não é possível gerar um número de telefone com esses valores");
    }
    let aux = phoneNumber[index];
    let count = 0;
    for (let subIndex = 0; subIndex < phoneNumber.length; subIndex += 1) {
      if (aux === phoneNumber[subIndex]) {
        count += 1;
      }
    } 
    if (count >= 3) {
      return ("não é possível gerar um número de telefone com esses valores");
    }
    formatedNumber += phoneNumber[index];
    if (index === 1) {
      formatedNumber += ') ';
    } else if (index === 6){
      formatedNumber += '-';
    }
  }
  return formatedNumber;
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
