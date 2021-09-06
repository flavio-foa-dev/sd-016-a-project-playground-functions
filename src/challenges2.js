// Desafio 10
function techList(technologies, name) {
  let techName = technologies;
  techName.sort();
  let objName = name;
  let listArray = [];

  if (techName.length > 0) {
    for (let index = 0; index < techName.length; index += 1) {
      let objeto = {
        tech: techName[index],
        name: objName,
      };
      listArray.push(objeto);
    }
    return (listArray);
  } else {
    return 'Vazio!';
  }
}

// Desafio 11
function generatePhoneNumber(phoneNumber) {
  let phone = phoneNumber;
  // os unicos numeros possíveis no array *Phone* //
  let possibleNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  // o formato de numero de celular no final. Ex: (11) 98948-3530 //
  let numberCel = '(' + phone[0] + phone[1] + ') ' + phone[2] + phone[3] + phone[4] + phone[5] + phone[6] + '-' + phone[7] + phone[8] + phone[9] + phone[10];
  // Verificar quantas vezes um número se repete no array Phone //
  let repetition = 0;
  let repetitionArray = [];
  // Para verificar se existe mais de 3 digitos no array //
  for (let test = 0; test < possibleNumbers.length; test += 1) {
    let positionPossible = possibleNumbers[test];
    if (repetition > 0) {
      repetition = 0;
    }
    for (let index = 0; index < phone.length; index += 1) {
      let positionNumero = phone[index];
      if (positionPossible === positionNumero) {
        repetition += 1;
      }
    }
    repetitionArray.push(repetition);
  }
  // Resultado de 3 numeros se repetindo no array *Phone*. O Resultado esperado para que não haja mais do que três digitos para essa formula é -1 //
  let repetitionIndexOf = repetitionArray.indexOf(3);
  // Verificar se existe numero < 0 ou > 9 no array //
  let verifyPhone = true;
  for (let index = 0; index < phone.length; index += 1) {
    if (phone[index] >= 0 && phone[index] <= 9) {
      verifyPhone = verifyPhone;
    } else {
      verifyPhone = false;
    }
  }
  // IF final para verificar condições e retornar resultado //
  if (phone.length > 11 || phone.length < 11) {
    return ('Array com tamanho incorreto.');
  } else if (repetitionIndexOf > -1) {
    return ('não é possível gerar um número de telefone com esses valores');
  } else if (verifyPhone === false) {
    return ('não é possível gerar um número de telefone com esses valores');
  } else {
    return (numberCel);
  }
}

// Desafio 12
function triangleCheck(side01, side02, side03) {
  if (side01 < (side02 + side03) && side01 > (Math.abs(side02 - side03))) {
    return true;
  } else {
    return false;
  }
}

// Desafio 13
function hydrate(mainString) {
  // Utilizando regular expressions (REGEX), é possível criar uma variável que procure por dígitos numa string. No caso abaixo, a intenção é que dentro da pesquisa >> /   / << , seja procurado todas as ocorrências com pelo menos um dígito >> \d+ << , e que retorne de uma maneira global todos os resultados encontrados >> g << . Referência para criação da variável : https://www.mundojs.com.br/2018/06/14/como-usar-o-regex-no-javascript/ e https://www.codegrepper.com/code-examples/javascript/get+only+numbers+from+string+js //
  let regex = /\d+/g;
  let mainArray = mainString.match(regex);
  let mainsArraySum = 0;

  for (let index = 0; index < mainArray.length; index += 1) {
    mainsArraySum += parseInt(mainArray[index], 10);
  }
  if (mainsArraySum > 1) {
    return (mainsArraySum + ' copos de água');
  } else {
    return (mainsArraySum + ' copo de água');
  }
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
