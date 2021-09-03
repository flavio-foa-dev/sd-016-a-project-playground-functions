// Desafio 10
function techList(techs, nome) {
  techs = techs.sort();
  let array = [];
  if (techs.length === 0) {
    return 'Vazio!';
  }
  for (let i = 0; i < techs.length; i += 1) {
    let Object = {};
    Object['name'] = nome;
    Object['tech'] = techs[i];
    array.push(Object);
  }
  return array;
}

// Desafio 11
function generatePhoneNumber(numbers) {

}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if (lineA < lineB + lineC && lineA > Math.abs(lineB - lineC) && lineB < lineA + lineC && lineB > Math.abs(lineA - lineC) && lineC < lineA + lineB && lineC > Math.abs(lineA - lineB)) {
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
