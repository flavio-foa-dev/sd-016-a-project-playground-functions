// Desafio 10
function techList(techArr, name) {
  // seu código aqui
  if (techArr.length === 0) return 'Vazio!';
  let sortedList = techArr.sort();
  for (let i = 0; i < sortedList.length; i += 1) {
    sortedList[i] = { tech: sortedList[i], name };
  }
  return sortedList;
}

// Desafio 11
function generatePhoneNumber(numsArr) {
  // seu código aqui
  result = numsArr.join('');
  function isValid() {
    for (let i = 0; i < numsArr.length; i += 1) {
      if (numsArr[i] < 0 || numsArr[i] > 9) return false;
    }
    return true;
  }
  function repeatThreeTimes() {
    const counter = {};
    for (let i = 0; i < numsArr.length; i += 1) {
      if (counter[numsArr[i]]) {
        counter[numsArr[i]] += 1;
        if (counter[numsArr[i]] >= 3) return false;
      } else counter[numsArr[i]] = 1;
    }
    return true;
  }
  if (numsArr.length !== 11) return 'Array com tamanho incorreto.';
  if (!(repeatThreeTimes() && isValid())) {
    return 'não é possível gerar um número de telefone com esses valores';
  }
  return `(${result.slice(0, 2)}) ${result.slice(2, 7)}-${result.slice(7, 11)}`;
}
generatePhoneNumber([1, 2, 12, 4, 15, 5, 2, 8, 9, 10, 11]);

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  // seu código aqui
  if (lineA > lineB + lineC) return false;
  if (lineB > lineA + lineC) return false;
  if (lineC > lineB + lineA) return false;
  if (lineA < Math.abs(lineB - lineC)) return false;
  if (lineB < Math.abs(lineA - lineC)) return false;
  if (lineC < Math.abs(lineB - lineA)) return false;
  return true;
}

// Desafio 13
function hydrate(string) {
  // seu código aqui
  let letters = [...string];
  let counter = 0;
  function isNum(letter) {
    let nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    if (nums.includes(parseInt(letter, 10))) return true;
    return false;
  }
  for (let i = 0; i < letters.length; i += 1) {
    if (isNum(letters[i])) counter += parseInt(letters[i], 10);
  }
  if (counter === 1) return '1 copo de água';
  return `${counter} copos de água`;
}
hydrate('1 cerveja');

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
