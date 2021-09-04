// Desafio 10
function techList(arr = ["React", "Jest", "HTML", "CSS", "JavaScript"], name = "Patrick") {
  obj1 = {
    tech: arr,
    name: name
  }
}

// Desafio 11
function generatePhoneNumber(generate) {
  let middle = '(' + generate[0] + generate[1] + ') ' + generate[2] + generate[3] + generate[4] + generate[5];
  let rest = generate[6] +'-'+ generate[7] + generate[8] + generate[9] + generate[10];
  let fullNumber = middle + rest;
  if (generate === generate.length) {
    return fullNumber;
  }
}

// Desafio 12
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
function hydrate(cerveja, cachaca, vinho, agua) {
  if (cerveja === 1) {
    agua = 1;
    return agua + "copo de água";
  }
  else if (cachaca === 1 && cerveja === 5 && vinho === 1) {
    agua = 7;
    return agua + "copos de água";
  }
  else if (cachaca === 1 && cerveja === 5 && vinho === 1) {
    agua = 7;
    return agua + "copos de água";
  }
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
