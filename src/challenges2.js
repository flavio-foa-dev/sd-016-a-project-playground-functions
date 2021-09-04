// Desafio 10
function techList(arrayTechNames, name) {
  // seu código aqui
  let arrayTech = [];
  if (arrayTechNames.length === 0) {
    return 'Vazio!';
  } 
  for (let index in arrayTechNames.sort()) {
    let technologies = {
      tech: arrayTechNames[index],
      name: name,
    }
      arrayTech.push(technologies);
  }
  return arrayTech;
}

// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  // seu código aqui
  let compareC = Math.abs(lineA - lineB);
  if (lineC < lineA + lineB && lineC > compareC) {
    return true;
  }
  return false;  
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
