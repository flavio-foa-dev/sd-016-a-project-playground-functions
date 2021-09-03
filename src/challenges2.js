// Desafio 10
function techList(arr = ["React", "Jest", "HTML", "CSS", "JavaScript"], name = "Patrick") {
  obj1 = {
    tech: arr,
    name: name
  }
}

// Desafio 11
function generatePhoneNumber(generate = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1]) {
  let fullNumber = '(' + generate[0] + generate[1] + ')' +' ' + generate[2] + generate[3] + generate[4] + generate[5] + generate[6] +'-'+ generate[7] + generate[8] + generate[9] + generate[10];
  if (generate === generate.length) {
    return fullNumber;
  }
}

// Desafio 12
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
function hydrate() {
  let ceveja = 0;
  let cachaca = 0;
  let vinho = 0;
  let agua = 0;

  if (ceveja === 1) {
    agua = 1;
    return(agua +':'+ "copo de água");
  }
  else if (cachaca === 1 && ceveja === 5 && vinho === 1) {
    agua = 7;
    return(agua +':'+ "copos de água");
  }
  else if (cachaca === 1 && ceveja === 5 && vinho === 1) {
    agua = 7;
    return(agua +':'+ "copos de água");
  }
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
