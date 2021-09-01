// Desafio 10
function techList(techs, name) {
  if (techs.length != 0) {
      techs.sort();
      let info = [];

      for (index = 0; index < techs.length; index += 1) {
          info[index] = {};
          info[index].tech = techs[index];
          info[index].name = name;
      }
      return info
  } else {
      return "Vazio!"
  }
}

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
