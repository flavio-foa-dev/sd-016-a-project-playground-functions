// Desafio 10
function techList(arrayTechnology, name) {
  let technologies;
  if (arrayTechnology.length === 0) {
    technologies = 'Vazio!';
  } else {
    let order = arrayTechnology.sort();
    technologies = [];
    for (let i = 0; i < arrayTechnology.length; i += 1) {
      technologies[i] = { tech: order[i], name };
    }
  }
  return technologies;
}

// Desafio 11
function generatePhoneNumber(arrayPhoneNumber) {
  let numberPhone;
  let compareNumber;
  let numberRepeat = 0;
  let test1 = 0;
  let test2 = 0;
  if (arrayPhoneNumber.length !== 11) {
    numberPhone = 'Array com tamanho incorreto.';
  } else {
    for (let i = 0; i < arrayPhoneNumber.length; i += 1) {
      numberRepeat = 0;
      compareNumber = arrayPhoneNumber[i];
      for (let j = 0; j < arrayPhoneNumber.length; j += 1) {
        if (compareNumber === arrayPhoneNumber[j]) {
          numberRepeat += 1;
          if (numberRepeat >= 3) {
            test1 = 1;
            break;
          }
        } else if (arrayPhoneNumber[j] < 0 || arrayPhoneNumber[j] > 9) {
          test2 = 1;
          break;
        }
      }
      if (test1 === 1 || test2 === 1) {
        numberPhone = 'não é possível gerar um número de telefone com esses valores';
        break;
      }
    }
    if (test1 !== 1 && test2 !== 1) {
      numberPhone = '(xx) xxxxx-xxxx';
      for (let i = 0; i < numberPhone.length; i += 1) {
        numberPhone = numberPhone.replace('x', arrayPhoneNumber[i]);
      }
    }
  }
  return numberPhone;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let triangle;
  let a = lineB + lineC;
  let b = lineA + lineC;
  let c = lineA + lineB;
  if (lineA < a && lineB < b && lineC < c) {
    a = lineB - lineC;
    b = lineA - lineC;
    c = lineA - lineB;
    if (Math.abs(a) < lineA && Math.abs(b) < lineB && Math.abs(c) < lineC) {
      triangle = true;
    }
  } else {
    triangle = false;
  }
  return triangle;
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
