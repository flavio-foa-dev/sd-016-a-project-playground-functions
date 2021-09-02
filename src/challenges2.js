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


// Desafio 12
function triangleCheck(lineA,lineB,lineC) {
  // seu código aqui
  var armazena_lineB_menos_lineC=lineB-lineC;
  if(armazena_lineB_menos_lineC<0){
    armazena_lineB_menos_lineC*=-1
  }
  if(lineA<lineB+lineC && lineA>armazena_lineB_menos_lineC){
    return true  
  }else{
    return false
  }
}

// Desafio 13
function hydrate(bebidas) {
  // seu código aqui
  let soma=0;
  todos=bebidas.match(/\d+/g)
  for(cont0=0;cont0<todos.length;cont0+=1){
    todos[cont0]=parseInt(todos[cont0])
  }
  
  for(cont=0;cont<todos.length;cont++){
    
    soma+=todos[cont]
  }
  if(soma==1){
    return soma+" copo de água";
  } else{
      return soma+" copos de água";
  }
}
console.log(hydrate("12 cerveja, 2 chachaça, 1 vinho"))

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
