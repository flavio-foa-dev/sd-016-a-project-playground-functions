// Desafio 10
function techList(techN, pName) {
  if (techN.length !== 0) {
    let techO = techN.sort();
    for (let i = 0; i < techO.length; i += 1) {
      techO[i] = {
        tech: techO[i],
        name: pName,
      };
    } return techN;
  } return 'Vazio!';
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
