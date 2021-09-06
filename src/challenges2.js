// Desafio 10
function techList(list, name) {
  let newArray = [];
  let ordlist = list.sort();
  if (list.length === 0) {
    return 'Vazio!';
  }
  for (let index in ordlist) {
    newArray.push({ tech: ordlist[index], name: name });
  }
  return newArray;
}

// Desafio 11
function generatePhoneNumber(numero) {
  let test1 = 0;
  let test2 = 0;
  let count1 = 0;
  let num = numero.join('');
  if (numero.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
 for (let i = 0; i < numero.length; i += 1) {
    if (numero[i] > 9 || numero[i] < 0) {
      test1 = 1;
    }
  }
  count1 = 0;
  for (let index = 0; index < numero.length; index += 1) {
    if (count1 >= 3) {
      break;
    }
    count1 = 0;
    for (let i = 0; i < numero.length; i += 1) {
      if (numero[index] === numero[i]) {
        count1 += 1;
      }
    }
  }
  if ( count1 >= 3 ) {
    test2 = 1;
  }
  if ( test2 == 1 || test1 == 1 ) {
    return 'não é possível gerar um número de telefone com esses valores';
  }
  return `(${num.slice(0, 2)}) ${num.slice(2, 7)}-${num.slice(7, 11)}`;
}

// Desafio 12
function triangleCheck(lado1, lado2, lado3) {
  if (lado2 - lado3 < lado1 && lado1 < lado2 + lado3) {
    if (lado1 - lado3 < lado2 && lado2 < lado1 + lado3) {
      if (lado1 - lado2 < lado3 && lado3 < lado1 + lado2) {
        return true
      } 
      else {
        return false
      }
    }
    else {
      return false
    }
  }
  else {
    return false
  }
}

// Desafio 13
function hydrate(bar) {
  /*
  stackoverflow  ref
 */
  let regex = /\d+/g;
  var matches = bar.match(regex);
  let count = 0;
  let count2 = 0;
  for (i = 0; i < matches.length; i += 1) {
    count += parseInt(matches[i]);
  }
  if (count === 1) {
    return '1 copo de água';
  } else {
    return count + ' ' + 'copos de água';
  }
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
