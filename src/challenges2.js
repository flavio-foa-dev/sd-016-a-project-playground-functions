// Desafio 10
function techList(techArray, yourName) {
  techArray.sort();
  let newTechArray = [];
  if (techArray.length === 0) {
    return 'Vazio!'
  } else {
    for (let i = 0; i < techArray.length; i += 1) {
      let profile = {
        tech: techArray[i],
        name: yourName,
      }
      newTechArray.push(profile);
    }
    return newTechArray;
  }
}

// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let AB = Math.abs(lineA - lineB);
  let AC = Math.abs(lineA - lineC);
  let BA = Math.abs(lineB - lineA);
  let BC = Math.abs(lineB - lineC);
  let CA = Math.abs(lineC - lineA);
  let CB = Math.abs(lineC - lineB);

  if (lineA < (lineB + lineC) && lineA > BC && lineA > CB && lineB < (lineA + lineC) && lineB > AC && lineB > CA && lineC < (lineA + lineB) && lineC > AB && lineC > BA) {
    return true;
  } else {
    return false;
  }
}

// Desafio 13. Código do Humberto Castro
function hydrate(txt) {
  let fraseDeNumeros = txt.match(/\d/g);
  let total = 0;
  let frase = '';
  for (let i = 0; i < fraseDeNumeros.length; i += 1) {
    total += parseInt(fraseDeNumeros[i]);
  }
  if (total === 1) {
    frase = total;
    frase += ' copo de água';
  } else {
    frase = total;
    frase += ' copos de água';
  }
  return frase;
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
