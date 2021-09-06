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

console.log(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Max'));

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
      test1=1;
    }
  }
  count1 = 0;
  for (let index = 0; index < numero.length; index += 1) {
    if (count1>=3) {
      break;
    }
    count1=0;
    for (let ii = 0; ii < numero.length; ii += 1) {
      if (numero[index] === numero[ii]) {
        count1 += 1;
      }
    }
  }
  if ( count1 >= 3 ) {
    test2=1;
  }
  // console.log(count1,test2,test1);
  if ( test2 == 1 || test1 == 1 ) {
    return 'não é possível gerar um número de telefone com esses valores';
  }

  return `(${num.slice(0, 2)}) ${num.slice(2, 7)}-${num.slice(7, 11)}`;
}

console.log(generatePhoneNumber([1, 2, 2, 4, 5, 5, 2, 8, 9, 0, 1]));
console.log(generatePhoneNumber([0, 1, 1, 4, 5, 5, 2, 8, 9, 0, 1]));

// Desafio 12
function triangleCheck(lado1,lado2,lado3) {

  if (lado2 - lado3 < lado1 && lado1 < lado2 + lado3){
    if (lado1 - lado3 < lado2 && lado2 < lado1 + lado3){
      if (lado1 - lado2 < lado3 && lado3 < lado1 + lado2){
        return true;
      } 
      else {
        return false;
      }
    }
    else {
      return false;
    }
  }
  else {
    return false;
  }
}

console.log(triangleCheck(10, 13, 2));
console.log(triangleCheck(12, 17, 4));
console.log(triangleCheck(5, 10, 3));
console.log(triangleCheck(10, 14, 8));
console.log(triangleCheck(2, 3, 4));
console.log(triangleCheck(16, 20, 30));

// Desafio 13
function hydrate(bar) {
  let regex = /\d+/g;
  var matches = bar.match(regex)
  let count = 0;
  for (let i = 0; i < matches.length; i += 1) { 
    count += parseInt(matches[i]);
  }
  if (count === 1) {
    return '1 copo de água';
  } else {
    return count + ' ' + 'copos de água';
  }
}

console.log(hydrate('1 cachaça, 5 cervejas e 1 copo de vinho'));

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
