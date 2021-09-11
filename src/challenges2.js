// Desafio 10
function techList(list, name) {
  let learnList = [];
  let learn = new Object();
  if (list.length === 0) {
    learnList = 'vazio';
  } else {
    list.sort();
    for (let i = 0; i < list.length; i += 1) {
      let learnlst = {
        tech: list[i],
        name: name
      }
      learnList.push(learn)
    }
  }
  return learnList;
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
