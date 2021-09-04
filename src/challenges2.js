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
  let compareA = Math.abs(lineB - lineC);
  let compareB = Math.abs(lineA - lineC);
  let compareC = Math.abs(lineA - lineB);
  if (lineA < lineB + lineC && lineA > compareA || lineB < lineA + lineC && lineB > compareB || lineC < lineA + lineB && lineC > compareC) {
    return true;
  }
  else {
    return false;
  }
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
