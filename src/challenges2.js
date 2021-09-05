// Desafio 10
function techList(arrayTechs, name) {
  let arrayTechSort = [];
  const arrayTechObject = [];
  let techs;
  if (arrayTechs.length === 0) {
    return `Vazio!`;
  } else {
    arrayTechSort = arrayTechs.sort();
    for (let index = 0; index < arrayTechs.length; index += 1) {
      techs = {
        tech: arrayTechSort[index],
        name: name
      };
      arrayTechObject.push(techs);
    }
    return arrayTechObject;
  }
}
// Desafio 11
function generatePhoneNumber(arrPhoneNumber) {
  if (arrPhoneNumber.length >= 11) {
    return `Array com tamanho incorreto.`;
  }
  for (index = 0; arrPhoneNumber.lenght > index; index++) {
    if (arrPhoneNumber[index] < 0 || arrPhoneNumber[index] > 9)) {
      return `não é possível gerar um número de telefone com esses valores`;
    }
  }
  let number
  for (index = 0; arrPhoneNumber.length > index; index++) {
    number = arrPhoneNumber.sort();
    if (arrPhoneNumber[index] >= 10) {}
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
