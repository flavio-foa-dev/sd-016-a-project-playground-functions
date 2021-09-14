// Desafio 10
function techList() {
  function techList(arrayTech, name) {
    if (arrayTech.length === 0) {
      return "Vazio!"
    }
    arrayTech = arrayTech.sort()
    let array = [];
    for (let i = 0; i < arrayTech.length; i += 1) {
      let obj = {
        tech: arrayTech[i],
        name: name,
      }
      array.push(obj);
    }
    return array;
  }
}

// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if (lineA + lineB < lineC || Math.abs(lineA - lineB) > lineC) {
    return false;
  }
  return true;
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
