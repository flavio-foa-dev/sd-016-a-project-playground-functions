// Desafio 10
function techList(techArray, name) {
  //let techArray = []
  let arrayTechLearn = [];
  let techLearn = new Object();
  //let techArray = ["React", "Jest", "HTML", "CSS", "JavaScript"];
  //let name = "Lucas"
  //
  if (techArray.length === 0) {
    arrayTechLearn = 'Vazio!';
  } else {
    techArray.sort();
    for (let index = 0; index < techArray.length; index += 1) {
      let techLearn = {
        tech: techArray[index],
        name: name
      }
      arrayTechLearn.push(techLearn)
    }
  }
  console.log(arrayTechLearn);
  return arrayTechLearn
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
