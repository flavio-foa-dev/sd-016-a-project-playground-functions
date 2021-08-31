// Desafio 10
function techList(techs, name) {
  let arrayOfTechs = [];
  let sortedTechs = techs.sort();
  if (techs.length === 0) {
    arrayOfTechs = 'Vazio!';
  } else {
    for (let i = 0; i < techs.length; i += 1) {
      arrayOfTechs.push({
        tech: sortedTechs[i],
        name,
      });
    }
  }
  return arrayOfTechs;
}

// Desafio 11
function generatePhoneNumber() {

}

// Desafio 12
function checkCondition1(lineA, lineB, lineC) {
  let condition1 = false;
  if (lineA < lineB + lineC && lineA > Math.abs(lineB - lineC)) {
    condition1 = true;
  }
  return condition1;
}

function checkCondition2(lineA, lineB, lineC) {
  let condition2 = false;
  if (lineB < lineA + lineC && lineB > Math.abs(lineA - lineC)) {
    condition2 = true;
  }
  return condition2;
}

function checkCondition3(lineA, lineB, lineC) {
  let condition3 = false;
  if (lineC < lineA + lineB && lineC > Math.abs(lineA - lineB)) {
    condition3 = true;
  }
  return condition3;
}

function triangleCheck(lineA, lineB, lineC) {
  let answer1 = checkCondition1(lineA, lineB, lineC);
  let answer2 = checkCondition2(lineA, lineB, lineC);
  let answer3 = checkCondition3(lineA, lineB, lineC);
  let result = false;

  if (answer1 === true && answer2 === true && answer3 === true) {
    result = true;
  }

  return result;
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
