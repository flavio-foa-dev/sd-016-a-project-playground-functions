// Desafio 10

function techList(arrayTechs, name) {
  let arrayTechsSort = [];
  let arrayTechsObject = [];
  let techs;
  if (arrayTechs == 0) {
    return "Vazio!"
  } else {
    arrayTechsSort = arrayTechs.sort();
    for (index = 0; index < arrayTechs.length; index += 1) {
      techs = {
        tech: arrayTechsSort[index],
        name: name
      }
      arrayTechsObject.push(techs);
    }
    return arrayTechsObject;
  }
}

// Desafio 11
function generatePhoneNumber(array11numbers) {
  if (array11numbers.length > 11 || array11numbers.length < 11) {
    return "Array com tamanho incorreto."
  } else {
    for (let key in array11numbers) {
      if (array11numbers[key] < 0 || array11numbers[key] > 9) {
        return "não é possível gerar um número de telefone com esses valores";
      }
    }
    let contador = 0;
    for (let k in array11numbers) {
      let number = array11numbers[k]
      for (let n of array11numbers) {
        if (n === number) {
          contador += 1
        }
        if (contador > 2) {
          return "não é possível gerar um número de telefone com esses valores";
        }
      }
      contador = 0;
    }
    let ddd = array11numbers.slice(0, 2)
    let celPhoneBegin = array11numbers.slice(2, 7)
    let celPhoneEnd = array11numbers.slice(7, 11)
    return "(" + ddd.join("") + ") " + celPhoneBegin.join("") + "-" + celPhoneEnd.join("")
  }
}

// Desafio 12
function triangleCheck() {
  // seu código aqui
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
