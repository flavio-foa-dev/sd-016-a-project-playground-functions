// Desafio 10
function techList(tecnologias, name) {
  let newTech = tecnologias.sort();

  if (tecnologias.length === 0) {
    return ('Vazio!');
  }

  let tec = {
    tech: newTech[0],
    name: name,
  };
  //console.table(tec);

  for (let i = 1; i < newTech.length; i += 1) {
    tec.tech = newTech[i];
    tec.name = name;
  }
  //console.table(tec);
  return tec;
}
techList(["React", "Jest", "HTML", "CSS", "JavaScript"], 'Lucas');
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
