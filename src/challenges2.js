// Desafio 10
function techList(techArray, name) {
  let exitValue = [];
  if (techArray[0] === undefined) {
    return 'Vazio!';
  }
  techArray.sort();
  for (let i = 0; i < techArray.length; i += 1) {
    exitValue.push({
      tech: techArray[i],
      name,
    });
  }
  return exitValue;
}

// Desafio 11
const getRepeatedNumbers = (phoneNumber) => (
  phoneNumber.reduce((numbers, number) => {
    numbers[number] = numbers[number] ? numbers[number] + 1 : 1;
    return numbers;
  }, {})
);

const phoneNumberLength = (phoneNumber) => {
  if (phoneNumber.length !== 11) return 'Array com tamanho incorreto.';
};

function cantGeneratePhoneNumber(phoneNumber) {
  const errorGenerateNumber = 'não é possível gerar um número de telefone com esses valores';
  const errorPhoneLength = phoneNumberLength(phoneNumber);
  if (errorPhoneLength) return errorPhoneLength;
  if (phoneNumber.some((number) => (number < 0 || number > 9))) {
    return errorGenerateNumber;
  }
  const repeatedNumbers = getRepeatedNumbers(phoneNumber);
  if (Object.values(repeatedNumbers).some((number) => number >= 3)) {
    return errorGenerateNumber;
  }
  return null;
}

function generatePhoneNumber(phoneNumber) {
  const errorPhoneNumber = cantGeneratePhoneNumber(phoneNumber);
  if (errorPhoneNumber) return errorPhoneNumber;
  return phoneNumber.reduce((acc, number, index) => {
    if (index === 2) acc += ') ';
    if (index === 7) acc += '-';
    acc += number;
    return acc;
  }, '(');
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if ((lineA + lineB) > lineC
  && (lineA + lineC) > lineB
  && (lineB + lineC) > lineA) return true;
  return false;
}

// Desafio 13
function hydrate(drinks) {
  /* Source: https://www.codegrepper.com/code-examples/javascript/get+only+numbers+from+string+js */
  const allNumbers = drinks.replace(/[^0-9]/g, '');
  const total = allNumbers.split('').reduce((acc, number) => (acc + Number(number)), 0);
  if (total === 1) return `${total} copo de água`;
  return `${total} copos de água`;
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
