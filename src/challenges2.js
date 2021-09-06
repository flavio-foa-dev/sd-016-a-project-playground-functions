// Desafio 10
function techList(technology, student) {
  technology = technology.sort();
  let arr = [];
  if (technology.length <= 0) {
    return 'Vazio!';
  }
  for (let i = 0; i < technology.length; i += 1) {
    arr[i] = { tech: technology[i], name: student };
  }
  return arr;
}

// Desafio 11
function generatePhoneNumber(a) {
  let tmp = a.slice();
  let count = 1;
  if (a.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  tmp.sort();
  for (let i = 0; i < a.length; i += 1) {
    if (tmp[i] === tmp[i + 1]) {
      count += 1;
    } else { count = 1; }
    if (a[i] < 0 || a[i] > 9 || count > 2) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }
  let add = a.join('');
  let ddd = `(${add.substring(0, 2)}) `;
  let num1 = `${add.substring(2, 7)}-`;
  let num2 = add.substring(7, 11);
  return ddd + num1 + num2;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let number = [lineA, lineB, lineC];
  number = number.sort((a, b) => a - b).reverse('');
  let absolute = number[0] - number[1] - number[2];
  if (number[0] < number[1] + number[2] && number[0] > Math.abs(absolute)) {
    return true;
  } return false;
}

// Desafio 13
function hydrate(phrase) {
  let tmp = phrase.match(/\d+/g).map(Number);
  let num = 0;
  for (let i = 0; i < tmp.length; i += 1) {
    num += tmp[i];
  }
  if (num === 1) {
    return `${num} copo de água`;
  }
  return `${num} copos de água`;
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
