// Desafio 10
function techList() {
  
}

// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let condition = false;
  if (lineA > (lineB + lineC) || lineB > (lineA + lineC) || lineC > (lineA + lineB)) {
    condition = false;
  } else if (lineA < Math.abs(lineB - lineC) || lineB < Math.abs(lineA - lineC) || lineC < Math.abs(lineA - lineB)) {
    condition = false;
  } else if (lineA < (lineB - lineC) || lineB < (lineA - lineC) || lineC < (lineA - lineB) || lineA > Math.abs(lineB - lineC) || lineB > Math.abs(lineA - lineC) || lineC > Math.abs(lineA - lineB)) {
    condition = true;
}
    return condition;
}

console.log(triangleCheck(10, 4, 8));

// Desafio 13
function hydrate(string) {
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
