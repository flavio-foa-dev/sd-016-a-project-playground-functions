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
  let arrsort = [-1];
  var contador = 0;
    for(let i = 0; i < array.length; i=i+1){
      arrsort.push(array[i])
      arrsort.sort()
    }
    for(let i = 0; i < arrsort.length; i=i+1){
      if(arrsort[i]==arrsort[i+1]){
        contador = contador + 1;
      }
      if(arrsort[i]!=arrsort[i+1]){
        contador=0
      }     
        else if(contador===2){
          console.log("conido")
          console.log(contador)
          resultado = "não é possível gerar um número de telefone com esses valores";
          return resultado;
        }
       
    }
        
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

// Desafio 12
function triangleCheck(l1,l2,l3) {
  // seu código aqui  
  if(l1>l2+l3||l2>l3+l1||l3>l1+l2) {
    return false
  }
  else if(l1<Math.abs(l2-l3)||l2<Math.abs(l3-l1)||l3<Math.abs(l1-l2)) {
    return false
  }
  else if(l1<l2+l3||l2<l3+l1||l3<l1+l2) {
    if(l1>Math.abs(l2-l3)||l2>Math.abs(l3-l1)||l3>Math.abs(l1-l2)){
     
      return true
    }
    
  }

}
triangleCheck(10,14,8)

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
