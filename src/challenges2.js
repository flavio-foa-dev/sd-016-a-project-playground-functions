// Desafio 10
function techList(arrayTechs, name) {
// Criar uma função que receba um ARRAY com nomes de tecnologias que quero aprender.
// A função também deve receber um novo pârametro chamado "name" com um nome.
// Para cada tecnologia no array crie um OBJETO com a seguinte estrutura: 
//{
// tech: "NomeTech",
// name: name
//}
// Os novos objetos devem ser incluídos em ordem CRESCENTE.
// Retornar no final da função a lista de objetos.

  let arrayTechsSort = [];
  let arrayTechsObject = [];
  let techs;
  if (arrayTechs == 0) {
    return "Vazio!"
  } else {
    arrayTechsSort = arrayTechs.sort();
    for (index = 0; index < arrayTechs.length; index += 1) {
      techs = {
        tech: arrayTechsSort[index],
        name: name
      }
      arrayTechsObject.push(techs);
    }
    return arrayTechsObject;
  }
}
// Desafio 10 feito com a ajuda da Fumagalli, Julia Barcelos e Brunão da Turma 16 - Tribo A.

// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
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
