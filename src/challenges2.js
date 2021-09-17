// Desafio 10
function techList(nomeTech, name) {

  let list = [];
  nomeTech.sort()
  for(let key of nomeTech){
   list.push({tech:key,name})
  }
  if(nomeTech.length === 0){
    return "Vazio!"
  }
  return list
}
// Desafio 11
function generatePhoneNumber(numbers) {
    if(numbers.length !== 11){
      return "Array com tamanho incorreto."
    }
    for(let key of numbers){
      if(key < 0 || key > 9){
        return "não é possível gerar um número de telefone com esses valores"
      }
    }    
    let ddd = numbers.slice(0, 2)
    ddd = ddd.join("")
    let firstNumbers = numbers.slice(2,7)
    firstNumbers = firstNumbers.join("")
    let lastNumbers = numbers.slice(7,11)
    lastNumbers = lastNumbers.join("")
    return `(${ddd}) ${firstNumbers}-${lastNumbers}`
}
//console.log(generatePhoneNumber([1,2,3,4,5,6,7,8,9,0,1]))
  
// Desafio 12
function triangleCheck(lineA,lineB,lineC) {
  // seu código aqui
  if(lineA > lineB + lineC){
    return false;
  } if(lineB > lineA + lineC){
    return false;
  } if(lineC > lineA + lineB){
    return false
  }
  return true  
}
// Desafio 13
function hydrate(strParam) {
  //da Linha 56 a 60 link:https://www.tutorialspoint.com/summing-numbers-from-a-string-javascript :
  let string = strParam.split("")
  let glassOfWater = 0;  
  for (let index = 0; index < strParam.length; index += 1) {
      if(+string[index]){
        glassOfWater += +string[index]
      };    
  }
    if(glassOfWater === 1){
      glassOfWater = `${glassOfWater} copo de água`
    } else{
      glassOfWater = `${glassOfWater} copos de água`
    }
    return glassOfWater
}


module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
