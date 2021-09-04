// Desafio 10
function techList(tech, name) {
tech = tech.sort
let list = []
if(tech.length === 0){
  return'Vazio!'
}
else if(tech.length !== 0){
  for(let g = 0; g < tech.length; g += 1){
    let x = { tech: tech[g], name: name}
    list.push(x)
  }
return list
}
}

// Desafio 11
function generatePhoneNumber(numbers) {
if(numbers.length !== 11){
  return "Array com tamanho incorreto."
}else{
  for(let g = 0; g < numbers.length; g += 1){
    if(numbers[g] < 0 && numbers[g] > 9) {
      return "não é possível gerar um número de telefone com esses valores"
    }
  for(let r = 0; r < numbers.length; r += 1){
    let repetition = 0
    if(numbers[g] === numbers[r]){
      repetition += 1
    }
    if (repetition >=3){
      return "não é possível gerar um número de telefone com esses valores"
    }
  }
  if()

  }
}
}
// Desafio 12
function triangleCheck() {
  // seu código aqui
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
