// Desafio 10
function techList(array,name) {
  // seu código aqui
  if(array.length==0){
    return "Vazio!"
  }
  else{
      array_ordenada=array.sort()
      for(cont=0;cont<array_ordenada.length;cont+=1){
        array_ordenada[cont] = {
          tech:array_ordenada[cont],
          name:name,
        }
      }
      
      
        return array_ordenada
      }
}


// Desafio 11

function generatePhoneNumber(numeros) {

  let numeros_na_string="(";
  let repeticoes=0;
  for(cont_compara1=0;cont_compara1<numeros.length;cont_compara1+=1){
    for(cont_compara2=0;cont_compara2<numeros.length;cont_compara2+=1){
      if(numeros[cont_compara1]==numeros[cont_compara2]){
        repeticoes+=1
        if(repeticoes===3){
          return "não é possível gerar um número de telefone com esses valores"
        }
      }
    }
    repeticoes=0
  }
  if(numeros.length!=11){
    return "Array com tamanho incorreto."
  }
  else{
    for(cont=0;cont<numeros.length;cont+=1){
      if(numeros[cont]<0 || numeros[cont]>9){
        return "não é possível gerar um número de telefone com esses valores"
      }

      else if(cont==2){
        numeros_na_string+=") "+numeros[cont]
      }

      else if(cont!=2 && cont!=7){
        numeros_na_string+=numeros[cont]  
      }

      else{
        numeros_na_string+="-"+numeros[cont]
      }
    }

  return numeros_na_string
  }
}

console.log(generatePhoneNumber([1,2,3,4,5,6,7,8,9,0,1]))

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
