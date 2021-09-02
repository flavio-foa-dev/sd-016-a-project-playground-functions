// Desafio 10
function techList(lista, nome) {
  if (lista.length === 0) {
    return ('Vazio!')
  } else {
    listaO = lista.sort();
    let objetos = [];
    for (let index in listaO) {

      objetos.push({ tech: listaO[index], name: nome });

    }
    return (objetos);
  }
}

// Desafio 11
function generatePhoneNumber(numero) {
  let cont = 0;
  let cont2 = 0;
  let x;
  if (numero.length > 11 || numero.length < 11) {
    return ("Array com tamanho incorreto.")
  }
  for (let index in numero) {
    if (numero[index] < 0 || numero[index] > 9) {
      return ("não é possível gerar um número de telefone com esses valores");
    }
    for (let index2 in numero) {

      if (numero[index] === numero[index2]) {
        cont++;
      }
    }

    if (cont > cont2) {
      cont2 = cont
    }
    cont = 0;
  }
  if (cont2 >= 3) {
    return ("não é possível gerar um número de telefone com esses valores");
  }

  let telefone = ('(' + (numero[0] + '' + numero[1]) + ') ' + numero[2] + '' + numero[3] + '' + numero[4] + '' + numero[5] + '' + numero[6] + "-" + numero[7] + '' + numero[8] + '' + numero[9] + '' + numero[10]);

  return (telefone);
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  return Boolean(lineA + lineB > lineC && lineC + lineA > lineB && lineC + lineB > lineA && lineA > Math.abs(lineB - lineC) && lineB > Math.abs(lineA - lineC) && lineC > Math.abs(lineA - lineB))
}

// Desafio 13
function hydrate(palavra) {
  let contador = palavra.match(/[0-9]+/g);
  let inteiro = [];
  let copos = 0;

  for (let index in contador) {
    inteiro.push(parseInt(contador[index]));
    copos += inteiro[index];

  }

  if (copos > 1){
    return (copos + ' copos de água');
  }else{
    return (copos + ' copo de água');
  }

  


}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};



