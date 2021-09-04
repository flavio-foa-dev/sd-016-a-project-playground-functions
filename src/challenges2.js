// Desafio 10
function techList(arrayTechNames, name) {
  // seu código aqui
  let arrayTech = []
  if (arrayTechNames.length === 0) {
    return "Vazio!";
  } else {    
    for (let index in arrayTechNames.sort()) {
      let technologies = {
        tech : arrayTechNames[index],
        name : name,
      }
      arrayTech.push(technologies);
    }
  }
  return arrayTech;
}
let array = ["React", "Jest", "HTML", "CSS", "JavaScript"];
let name = "Lucas";
console.log(techList(array,name))

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
