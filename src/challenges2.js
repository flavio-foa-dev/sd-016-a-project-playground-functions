// Desafio 10
function techList(technology, name) {
  technology = technology.sort();
  let list = [];
  if (technology === 0) return 'Vazio!';
  if (technology.length === 0) return 'Vazio!';
  for (let index = 0; index < technology.length; index += 1) {
    list[index] = { tech: technology[index], name };
  }
  return list;
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
function hydrate(drinkqtd) {
  let show = 0;
  for (let index of drinkqtd) {
    if (index.match(/\d/) != null) {
      show += parseInt(index, drinkqtd);
    }
  }
  if (show === 1) {
    show = `${show} copo de água`;
  } else {
    show = `${show} copos de água`;
  }
  return show;
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
