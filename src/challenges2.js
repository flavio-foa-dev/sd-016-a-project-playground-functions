// Desafio 10
function techList(arrayTecs, name) {
  let newArray = [];

  if (arrayTecs.length === 5) {
    for (let index = 0; index < arrayTecs.length; index +=1) {
      let learn = {
        tech: arrayTecs[index],
        name: name
      };
      newArray.push(learn)
    }
    
    /**
     * Consultas para resolver essa parte
     * Documentação do método localeCompare: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/localeCompare
     * Resposta do usuário Blue-eyed Buzzard no fórum: https://www.codegrepper.com/code-examples/javascript/sort+array+of+objects+alphabetically+javascript
     */
    newArray.sort((a, b) => a.tech.localeCompare(b.tech));
    return newArray;
  } else if (arrayTecs.length === 0) {
    return 'Vazio!';
  }
}

// Desafio 11
function generatePhoneNumber(arrayNumbers) {
  let ddd = '';
  let firstHalf = '';
  let secondHalf = '';
  let repeticoes = 0;

  if (arrayNumbers.length != 11) {
    return 'Array com tamanho incorreto.';
  }

  for (let numbers of arrayNumbers) {
    if (numbers < 0 || numbers > 9) {
      console.log('<0 ou >9')
      return 'não é possível gerar um número de telefone com esses valores';
    } else {
      for (let numbers2 of arrayNumbers) {
        if (numbers === numbers2) {
          repeticoes += 1;
          if (repeticoes >= 3) {
            console.log('x3')
            return 'não é possível gerar um número de telefone com esses valores';
          }
        }
      }
      repeticoes = 0;
    }
  }

  for (let index = 0; index < arrayNumbers.length; index += 1) {
    if (index < 2) {
      ddd += arrayNumbers[index];
    } else if (index >= 2 && index < 7) {
      firstHalf += arrayNumbers[index];
    } else if (index >= 7) {
      secondHalf += arrayNumbers[index];
    }
  }

  return '('+ ddd + ') ' + firstHalf + '-' + secondHalf; 
}

generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1]);

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
