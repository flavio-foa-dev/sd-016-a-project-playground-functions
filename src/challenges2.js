// Desafio 10
function techList(tech, name) {
  let dev = {
    tech : "",
    name : "" 
  }

  let result = [];

  for (let index = 0; index < tech.length; index += 1) {
    let objeto = dev[tech[index], name];
    console.log(objeto.tech);
    result.push(objeto);
  }
  return result;
}

console.log(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas'));


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
