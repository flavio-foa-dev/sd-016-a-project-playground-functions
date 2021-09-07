// Desafio 10
function techList() {
  let arr = ["React", "Jest", "HTML", "CSS", "JavaScript"];

  let nome = "Lucas"
  
  function techList(arrayTechs, name) {
  let arrayTechsSort = [];
  let arrayTechsObject = [];
  let techs;
  if (arrayTechs === [{}]) {
  return "Vazio!"
  } else {
  arrayTechsSort = arrayTechs.sort();
  for (index = 0; index < arrayTechs.length; index += 1){
  techs = {
  tech: (arrayTechsSort[index]), }
  name : name
  }
  arrayTechsObject.push(techs); 
  }
  return arrayTechsObject;
  }
  }

// Desafio 11
function generatePhoneNumber() {
  
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
