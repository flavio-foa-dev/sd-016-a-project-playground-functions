// Desafio 10
function techList(techs, name) {
  let object = {};
  let arrayObjects = [];
  let sortTechs = techs.sort()
  for (let index in sortTechs){
    object.tech = techs[index]
    object.name = name
    arrayObjects.push(object)
    object = {};
  }
  if (arrayObjects.length === 0){
    return 'Vazio!'
  }
  else{
    return arrayObjects
  }
}
// Desafio 11
function generatePhoneNumber(numbers) {
  let count = 0;
  let countRepeat = 0;
  for (let index in numbers){
    for (let index3 in numbers){
    if (numbers[index3] > 9 || numbers[index3] < 0){
      return "não é possível gerar um número de telefone com esses valores"
    }else if (numbers.length !== 11){
      return "Array com tamanho incorreto."
    }
    }
      let verific = numbers[index]
      for(let index2 in numbers){
          if (verific === numbers[index2]){
              count +=1
          }
  
  if (count > countRepeat){
     countRepeat = count
  }
}
  count = 0;
}

if (countRepeat >= 3){
  return "não é possível gerar um número de telefone com esses valores"
}else if (numbers.length !== 11){
  return "Array com tamanho incorreto." }
  else{
  
    numbers.unshift('(')
    numbers.splice(3, 0, ')')
    numbers.splice(4, 0, ' ')
    numbers.splice(10, 0, '-')
   return numbers.join('')
  }
}
// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let absoluteAB = Math.abs(lineA - lineB)
  let absoluteAC = Math.abs(lineA - lineC)
  let absoluteBC = Math.abs(lineB - lineC)
 
  let sumAB = lineA + lineB
  let sumAC = lineA + lineC
  let sumBC = lineB + lineC
 
  if ((lineA < sumBC || lineB < sumAC || lineC < sumAB ) && (lineA > absoluteBC && lineB > absoluteAC && lineC > absoluteAB)){
    return true;
  }
  else{
    return false;
  }
 
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
