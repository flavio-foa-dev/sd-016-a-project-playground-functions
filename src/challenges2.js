function techList(nomes, name) {
  let resultados = [];
  let aretornar;
  let nomedocara = name;
  const ordenado = nomes;
  ordenado.sort();
  if (nomes.length === 0) {
    aretornar = 'Vazio!';
  } else {
    for (let i = 0; i < ordenado.length; i += 1) {
      resultados.push({ tech: ordenado[i], name: nomedocara });
    }
    aretornar = resultados;
  }
  return aretornar;
}
function generatePhoneNumber(n) {
  let frase = '';
  let bool = true;
  if (n.length === 11) {
    let repetiçoes = 0;
    for (let i = 0; i < n.length; i += 1) {
      if (n[i] < 0 || n[i] > 9) {
        bool = false;
        frase = 'não é possível gerar um número de telefone com esses valores';
      } else {
        for (let z = 0; z < n.length; z += 1) {
          if (n[i] === n[z]) {
            repetiçoes += 1;
            if (repetiçoes === 3) {
              frase = 'não é possível gerar um número de telefone com esses valores';
              bool = false;
            }
          }
        } repetiçoes = 0;
      }
    } if (bool) {
      frase = '(';
      frase += n[0].toString() + n[1].toString();
      frase += ') ';
      frase += n[2].toString() + n[3].toString() + n[4].toString();
      frase += n[5].toString() + n[6].toString();
      frase += '-';
      frase += n[7].toString() + n[8].toString() + n[9].toString() + n[10].toString();
    }
  } else {
    frase = 'Array com tamanho incorreto.';
  } return frase;
}
function triangleCheck(lineA, lineB, lineC) {
  let bool = false;
  if (((lineA + lineB > lineC) && (Math.abs(lineA - lineB) < lineC)) && ((lineA + lineC > lineB) && (Math.abs(lineA - lineC) < lineB)) && ((lineC + lineB > lineA) && (Math.abs(lineC - lineB) < lineA))) {
    return true;
  }
  return bool;
}
function hydrate(txt) {
  // SOLUTION FOUND IN ----> https://stackoverflow.com/questions/10003683/how-can-i-extract-a-number-from-a-string-in-javascript
  let n = txt.match(/\d/g);
  let total = 0;
  let frase = '';
  for (let i = 0; i < n.length; i += 1) {
    total += parseInt(n[i], 10);
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
