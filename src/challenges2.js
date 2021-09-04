// Desafio 10
function techList(tech, name) { // Ajuda do Leandro Leão turma 16 tribo A
  let ordenada = tech.sort();
  let arr = [];
  
  if (tech.length > 0){
    for (key in ordenada){
      let objeto = {
        tech: ordenada[key],
        name: name,
      } 
     arr.push(objeto) 
    }
    return arr;
  }
  
  else {
    return "Vazio!"
  }
  
}

// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let linhaA = (lineB - lineC);
  let linhaB = (lineA - lineC);
  let linhaC = (lineA - lineB);

  if ((lineA < lineB + lineC) && (lineA > Math.abs(linhaA))){
    return true;
  } else if ((lineB < lineA + lineC) && (lineB > Math.abs(linhaB))){
    return true;
  } else if ((lineC < lineA + lineB) && (lineC > Math.abs(linhaC))){
    return true;
  } else {
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
