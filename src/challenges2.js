// Desafio 10
function techList(lessons) {
  // seu código aqui
}

// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if (lineA < (lineB + lineC) && lineA > Math.abs(lineB - lineC)) {
    if (lineB < (lineA + lineC) && lineB > Math.abs(lineA - lineC)) {
      if (lineC < (lineB + lineA) && lineC > Math.abs(lineB - lineA)) {
        return true;
      } else {
      return false; }
    } else {
    return false; }
  } else {
  return false; }
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
