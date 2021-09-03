// Desafio 10
//10.Crie uma função que recebe um array de nomes de tecnologias que você quer aprender. 
//Essa função deve receber também um segundo parâmetro chamado name com um nome.
// Exercicio feito em conjunto com Fumagalli, Priscila, Brunão, Julia e Fabiana

let arrayTechs = ["React", "Jest", "HTML", "CSS", "JavaScript"];
let nome = "Cris"
function techList(arrayTechs, name) {
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
techList(arrayTechs, nome);

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
