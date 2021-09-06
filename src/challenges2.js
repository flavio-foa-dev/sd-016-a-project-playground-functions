// Desafio 10
function techList(tech, name) {
  // seu código aqui
}

// Desafio 11
function generatePhoneNumber(numbers) {
  let result = '(' + numbers[0] + numbers[1] + ')' + numbers[2] + numbers[3] + numbers[4] + numbers[5] + ' - ' + numbers[6] + numbers[7] + numbers[8] + numbers[9];
  for (let index = 0; index < numbers.length; index += 1) {
    
  }
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let result = false;
  let lA = Math.abs(lineB - lineC);
  let lB = Math.abs(lineA - lineC);
  let lC = Math.abs(lineA - lineB);

  if ((lineA < lineB + lineC) && (lineA > lA)) {
    result = true;
  } else if ((lineB < lineA + lineC) && (lineB > lB)) {
    result = true;
  } else if ((lineC < lineA + lineB) && (lineC > lC)) {
    result = true;
  }
  return result;
}

console.log(triangleCheck(10, 14, 8));

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
