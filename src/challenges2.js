// Desafio 10
function techList(tech, name) {
  tech.sort();
  let array = [{
    tech,
    name,
  }];

  if (tech.length === 0) {
    array = 'Vazio!';
  } else {
    for (let index = 0; index < tech.length; index += 1) {
      array[index] = {
        tech: tech[index],
        name: name,
      };
    }
  }
  return array;
}

// Desafio 11
function generatePhoneNumber(numbers) {
  let phoneNumber;

  if (numbers.length !== 11) {
    phoneNumber = 'Array com tamanho incorreto.';
  } else if (numbers.length === 11) {
    for (let index = 0; index < numbers.length; index += 1) {
      if (numbers[index] < 0 || numbers[index] > 9) {
        phoneNumber = 'não é possível gerar um número de telefone com esses valores';
        break;
      } else {
        let ddd = numbers.slice(0, 2);
        let firstPart = numbers.slice(2, 7);
        let secondPart = numbers.slice(7, 11);

        phoneNumber = `(${ddd.join('')}) ${firstPart.join('')}-${secondPart.join('')}`;
      }
    }
  }

  if (numbers.length === 11) {
    let repeatCounter = 0;

    for (let indexCurrent = 0; indexCurrent < numbers.length; indexCurrent += 1) {
      let currentNumber = numbers[indexCurrent];

      for (let index = 0; index < numbers.length; index += 1) {
        if (currentNumber === numbers[index]) {
          repeatCounter += 1;
        }
        if (repeatCounter >= 3) {
          phoneNumber = 'não é possível gerar um número de telefone com esses valores';
          break;
        }
      }
      repeatCounter = 0;
    }
  }
  return phoneNumber;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let isPossible;
  let absA = Math.abs(lineB - lineC);
  let absB = Math.abs(lineA - lineC);
  let absC = Math.abs(lineA - lineB);

  if (lineA > (lineB + lineC) || lineB > (lineA + lineC) || lineC > (lineA + lineB)) {
    isPossible = false;
  } else if (lineA < absA || lineB < absB || lineC < absC) {
    isPossible = false;
  } else {
    isPossible = true;
  }
  return isPossible;
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
