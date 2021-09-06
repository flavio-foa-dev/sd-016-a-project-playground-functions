// Desafio 10
function techList(array, string) {
  // seu código aqui
  let resultado = [];
  let result = [];
  if(array.length<1){
    resultado = "Vazio!";
  }
  for(let i = 0; i < array.length; i=i+1) {
    result.push(array[i]);
    result.sort();  
  }
  for(let i = 0; i < result.length; i++){
    resultado.push({tech:result[i], name:string})  
  }
  return resultado   
}

// Desafio 11
function generatePhoneNumber(array) {
  // seu código aqui
  let resultado 
  let arr = [];
   if(array.length!==11){
    resultado = "Array com tamanho incorreto.";
    return resultado;
  } 
if(array.length==11) {
  for(let i = 0; i < array.length; i=i+1){
    if(array[i]>9||array[i]<0){
      
    resultado = "não é possível gerar um número de telefone com esses valores";
    return resultado;
    }
  
  }
  for(let i = 2; i < 7; i=i+1){
  arr.push(array[i]);
  }
  arr.push("-")  
  for(let i = 7; i < array.length; i=i+1){
  arr.push(array[i]);
  }
  resultado =  "("+array[0]+array[1]+")" +" "+ arr.join('')
   
  return resultado
}


  

}
console.log(generatePhoneNumber([1,2,3,2,2,3,3,8,5,6,0]))

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
