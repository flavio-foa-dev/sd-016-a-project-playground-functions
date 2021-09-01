// Desafio 10
function techList(techList, name) {
  let exitValue = [];
  if (techList[0] == undefined) {
    return 'Vazio!';
  }
  techList.sort()
  for (let i = 0; i < techList.length; i += 1) {
    exitValue.push({
      'tech': techList[i],
      'name': name
    })
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
