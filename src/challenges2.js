// Desafio 10
function techList(tech, name) {
  if (tech.length <= 0) {
    return 'Vazio!';
  }
  let listTech = tech.sort()
  let listObject = [];
 
  for (let i of listTech) {
      listObject.push( {
          tech: i,
         name: name
      } )
  }
  return listObject;
}

// Desafio 11
function generatePhoneNumber(number) {
  let result  = 0;
  if (number.length != 11 ||number.length >= 11 ){
    result  = "Array com tamanho incorreto."
    return result;
  }  
  for (let i = 0; i < number.length; i += 1) {
    if (number[i] < 0 || number[i] > 9) {
      result  = "não é possível gerar um número de telefone com esses valores" ;
      return result;
    }
  }
  result ='(' + number[0] + number[1] + ') ' +  number[2] + number[3] + number[4] + number[5] + number[6] + '-' + number[7] + number[8] + number[9] + number[10]
    return result;}


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
