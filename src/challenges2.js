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
     * Consultas para resolver essa parte:
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

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {

  if (lineA < lineB + lineC && lineB < lineA + lineC && lineC < lineA + lineB) {
    if (lineA > Math.abs(lineB - lineC) && lineB > Math.abs(lineA - lineC) && lineC > Math.abs(lineB - lineA)) {
      return true;
    }
  }

  return false;
}

// Desafio 13
function hydrate(bebida) {
  /**
   * Consultas para resolver essa parte:
   * Explicação sobre Regex: https://www.youtube.com/watch?v=909NfO1St0A
   * Documentação de Regex: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/match
   * Converter string em integer: https://www.geeksforgeeks.org/convert-a-string-to-an-integer-in-javascript/
   */
  
  let doseSum = 0;
  const regex = /[1-9]/g;
  let doses = bebida.match(regex);

  for (let value of doses) {
    doseSum += parseInt(value);
  }

  if (doseSum > 1) {
    return doseSum + ' copos de água';
  } else if (doseSum === 1) {
    return doseSum + ' copo de água';
  }
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
