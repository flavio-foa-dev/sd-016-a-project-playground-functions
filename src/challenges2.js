// Desafio 10
function techList(techs, name) {
  if (techs.length != 0) {
      techs.sort();
      let info = [];

      for (index = 0; index < techs.length; index += 1) {
          info[index] = {};
          info[index].tech = techs[index];
          info[index].name = name;
      }
      return info
  } else {
      return "Vazio!"
  }
}

// Desafio 11
function generatePhoneNumber(numbers) {
  let ind = 0;
  let count = 0;
  if (numbers.length === 11) {
      for (index = 0; index < 11; index += 1) {
          if (count < 3) {
              count = 0;
          } else if (count > 2) {
              return "não é possível gerar um número de telefone com esses valores";
              break
          }
          if (numbers[index] > 9 || numbers[index] < 0) {
              return "não é possível gerar um número de telefone com esses valores";
          } for (mindex = 0; mindex < 11; mindex += 1) {
              if (numbers[index] === numbers[mindex]) {
                  count += 1;
              }

          }
      } 
  } else if (numbers.length < 11 || numbers.length > 11) {
      return "Array com tamanho incorreto.";
  }
numbers.unshift('(');
numbers.splice(3,0,")")
numbers.splice(4,0," ")
numbers.splice(10,0,"-")

return numbers.join('')
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let result = true
      for (index = 0; index < 3; index += 1) {
          if (lineA < Math.abs(lineB - lineC) || lineA > Math.abs(lineB + lineC)) {
              result = false
          }
          if (lineB < Math.abs(lineA - lineC) || lineB > Math.abs(lineA + lineC)) {
              result = false
          }
          if (lineC < Math.abs(lineB - lineA) || lineC > Math.abs(lineB + lineA)) {
              result = false
          }
      }
  return result
  }

// Desafio 13
function hydrate(string) {
  let number = string.match(/\d/g);
  let boolean = 0;
  for (index = 0; index < number.length; index += 1) {
    for (mindex = 0; mindex < 10; mindex += 1) {
      if (number[index] == mindex) {
        boolean += mindex
      }
    }
  }
  if (boolean > 1) {
    return boolean + " copos de água"
  } else {
    return boolean + " copo de água"
  }

}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
