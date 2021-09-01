// Desafio 10
function techList(tech, name) {
  let object = [];
  let ordena = tech.sort();
  if (name.length === 0 || ordena.length === 0) {
    return 'Vazio!';
  }
  // eslint-disable-next-line guard-for-in
  for (const key in ordena) {
    object[key] = {
      tech: ordena[key],
      name,
    };
  }

  return object;
}

// Desafio 11
function generatePhoneNumber(numbers) {
  let repeticao = 0;
  let numeroTelefone = '';
  if (numbers.length < 11 || numbers.length > 11) {
    return 'Array com tamanho incorreto.';
  }
  for (const key in numbers) {
    if (numbers[key] < 0 || numbers[key] > 9) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
    for (const key2 in numbers) {
      if (numbers[key] === numbers[key2]) {
        repeticao += 1;
        if (repeticao >= 3) {
          return 'não é possível gerar um número de telefone com esses valores';
        }
      }
    }
    repeticao = 0;
  }
  return `(${numbers[0]}${numbers[1]}) ${numbers[2]}${numbers[3]}${numbers[4]}${numbers[5]}${numbers[6]}-${numbers[7]}${numbers[8]}${numbers[9]}${numbers[10]}`;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let medida;
  if (lineA + lineB > lineC && Math.abs(lineA - lineB < lineC) && lineA + lineC > lineB && Math.abs(lineA - lineC < lineB && lineC + lineB > lineA && Math.abs(lineC - lineB < lineA))) {
    medida = true;
  } else {
    medida = false;
  }
  return medida;
}

// Desafio 13
function hydrate(quantidade) {
  let numero = quantidade.match(/\d/g);
  let somaCopos = 0;
  for (let index = 0; index < numero.length; index += 1) {
    somaCopos += parseInt(numero[index]);
  } if (somaCopos == 1) {
    return `${somaCopos} copo de água`;
  }
  return `${somaCopos} copos de água`;
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
