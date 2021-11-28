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
