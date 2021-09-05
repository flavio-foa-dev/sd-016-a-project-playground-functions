// Desafio 10
function techList(techArray, name) {
  let objectArray = [];
  techArray.sort();

  if (techArray.length === 0) {
    return "Vazio!";
  }

  for (let key in techArray) {
    let techs = {
      tech: techArray[key],
      name: name
    }
    objectArray.push(techs);
  }
  
  return objectArray
} 
console.log(techList(["React", "Jest", "HTML", "CSS", "JavaScript"], "João"))
// Desafio 11
function generatePhoneNumber(array) {
}
console.log(generatePhoneNumber([8,1,9,7,1,2,1,2,7,3,3]))
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
