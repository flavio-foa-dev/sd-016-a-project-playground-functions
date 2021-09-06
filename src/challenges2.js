// Desafio 10
function techList(techListArray, techListNome) {
  let lista = [];
  let novoArray = techListArray.sort();
  let saidaVazia = 'Vazio!';
  if (techListArray.length > 0) {
    for (let posicao in novoArray) {
      let objeto = {};
      objeto.tech = novoArray[posicao];
      objeto.name = techListNome;
      lista.push(objeto);
    }
    return lista;
  }
  return saidaVazia;
}

// Desafio 11
function generatePhoneNumber(array) {
  let telefone = '';
  let ordem = array.slice().sort();
  if (array.length != 11) {
    return 'Array com tamanho incorreto.';
  }
  for (let posicao = 0; posicao < array.length; posicao += 1) {
    if (array[posicao] < 0 || array[posicao] > 9) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
    letra = posicao;
    petra = posicao;
    anterior = letra -= 1;
    proximo = petra += 1;
    if (ordem[posicao] === ordem[anterior] && ordem[posicao] === ordem[proximo]) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
    else if (posicao === 0) {
      telefone += '(';
      telefone += array[posicao];
    }
    else if (posicao == 1) {
      telefone += array[posicao];
      telefone += ')';
      telefone += ' ';
    }
    else if (posicao > 1 && posicao < 6) {
      telefone += array[posicao];
    }
    else if (posicao === 6) {
      telefone += array[posicao];
      telefone += '-';
    }
    else if (posicao > 6) {
      telefone += array[posicao];
    }
  }
  return telefone;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if ((lineA < lineB + lineC && lineA > Math.abs(lineB - lineC)) && (lineB < lineA + lineC && lineB > Math.abs(lineA - lineC)) && (lineC < lineB + lineA && lineC > Math.abs(lineB - lineA))) {
    return true;
  }
  return false;
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
