// Desafio 10
function techList(technology, yourName) {
  // seu código aqui
  let techs = 'Vazio!';

  if (Array.isArray(technology) && technology.length > 0) {
    techs = [];
    for (let item of technology.sort()) {
      techs.push({ tech: item, name: yourName });
    }
  } else if (!Array.isArray(technology)) {
    techs = { tech: technology, name: yourName };
  }

  return techs;
}

// Desafio 11
function generatePhoneNumber(numbers) {
  // seu código aqui
  let finalResult = 'Array com tamanho incorreto.';

  if (numbers.length === 11) {
    let count = 1;
    for (let index1 = 0; index1 < numbers.length; index1 += 1) {
      count = 1;
      for (let index2 = index1 + 1; index2 <= numbers.length; index2 += 1) {
        if (numbers[index1] === numbers[index2]) { count += 1; }
      }
      if (numbers[index1] >= 0 && numbers[index1] <= 9 && count < 3) {
        if (index1 === 0) {
          finalResult = `(${numbers[index1]}`;
        } else if (index1 === 1) {
          finalResult += `${numbers[index1]}) `;
        } else if (index1 >= 2 && index1 <= 5) {
          finalResult += numbers[index1];
        } else if (index1 === 6) {
          finalResult += `${numbers[index1]}-`;
        } else {
          finalResult += numbers[index1];
        }
      } else {
        finalResult = 'não é possível gerar um número de telefone com esses valores';
        break;
      }
    }
  }

  return finalResult;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  // seu código aqui
  return lineA < lineB + lineC && lineA > Math.abs(lineB - lineC);
}

// Desafio 13
function hydrate(drinks) {
  // seu código aqui
  let water = 0;

  for (let number of drinks) {
    if (number.match(/\d/) != null) {
      water += parseInt(number, drinks);
    }
  }

  if (water === 1) {
    water = `${water} copo de água`;
  } else {
    water = `${water} copos de água`;
  }

  return water;
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
