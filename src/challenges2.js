// Desafio 10
function techList(array, name) {
  let array2 = []
  let array3 = array.sort()
  let nome = name;
  if (array.length === 0) {
    return 'Vazio!';
  }
  for (let i=0;i < array.length; i+=1) {
    let obj = {
      tech: array3[i],
      name: nome
    }
    array2.push(obj)
  }
  return array2
}

// Desafio 11
function generatePhoneNumber(array) {
  let repeticao = 0
  if (array.length === 11){
    for (let i=0; i < array.length; i+=1) {
      if(array[i]<0 || array[i] > 9){
        return 'não é possível gerar um número de telefone com esses valores'
      }else{
        for(let i2=0; i2 < array.length; i2+=1){
        if(array[i]===array[i2]){
          repeticao +=1
          }
        }""
        if (repeticao >= 3) {
          return 'não é possível gerar um número de telefone com esses valores'
        }
        repeticao = 0
      }
    }
    return '(' +array[0] + array[1] + ') ' + array[2] + array[3] + array[4] + array[5] + array[6] + '-' + array[7] + array[8] + array[9] + array[10]
  }else{
    return 'Array com tamanho incorreto.'
  }
}

// Desafio 12
function triangleCheck() {
  
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
