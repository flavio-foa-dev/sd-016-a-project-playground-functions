// Desafio 10
function techList(nomesTech, nome) {
  if (nomesTech.length === 0) {
    return 'Vazio!';
  }
  nomesTech.sort();
  let objTech = [];
  for (let index in nomesTech ) {
    objTech.push({
        tech: nomesTech[index],
        name: nome
      })
  }
  return objTech;
}
console.log(techList(["React", "Jest", "HTML", "CSS", "JavaScript"], 'Lucas'))


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
