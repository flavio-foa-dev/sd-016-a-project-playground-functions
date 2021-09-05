// Desafio 10
function techList(tech, name) {
// recebe array de nomes de tec e um nome
  tech = tech.sort();
  let ret = {};
  let arr = [];
  if (tech.length <= 0) {
    return "Vazio!"
  } else {
  for (let i in tech) {
    arr[i] = {"tech": tech[i], "name": name}
    }
    return arr
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
