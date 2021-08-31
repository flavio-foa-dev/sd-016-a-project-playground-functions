
//Exercicio 10 lista de teconoligas 
function techList(nomes,name){
  let resultados = [];
  const ordenado = nomes;
  ordenado.sort();    
  if(nomes.length == 0){
      return "Vazio!";
  }    
  else{
      for(i=0;i<ordenado.length;i++){
          console.log();
          resultados.push({tech: ordenado[i], name : name });
      }
      return resultados;
  }    
}

//Exercicio 11 telefone 
console.log(generatePhoneNumber([0,2,3,4,4,2,7,8,9,9,4]))
function generatePhoneNumber(numeros){
  if(numeros.length == 11){
      let repetiçoes = 0;
      for(i=0;i<numeros.length;i++){
          if(numeros[i] <0 || numeros[i] > 9){
               return "não é possível gerar um número de telefone com esses valores";
          }
          else{
            for(z=0;z<numeros.length;z++){
              console.log(numeros[i] + "- numero que ta vendo se repete" + numeros[z]+"numero atual que ta comparadnd");
              if(numeros[i] === numeros[z]){
                console.log("REPETIU");
                repetiçoes++;
                if(repetiçoes ==3){
                    return "não é possível gerar um número de telefone com esses valores";
                }            
              }       
              console.log("NUMERO DE REPETIÇOES DO NUMERO "+numeros[i] +" --- " + repetiçoes);
            }
            repetiçoes = 0;     
          }
      }
      let frase = "(" + numeros[0] + numeros[1]+") "+numeros[2]+numeros[3]+numeros[4]+numeros[5]+numeros[6]+ "-" + numeros[7]+numeros[8]+numeros[9]+numeros[10];
      return frase;
  }else{
      return "Array com tamanho incorreto.";
  }
}
//Exercicio 12 existencia de triangulo
function triangleCheck(lineA,lineB,lineC){
  if( ((lineA + lineB > lineC) &&(Math.abs(lineA-lineB) < lineC)) && ((lineA + lineC > lineB) &&(Math.abs(lineA-lineC) < lineB))  && ((lineC + lineB > lineA) &&(Math.abs(lineC-lineB) < lineA))){
      return true;
  }else {
      return false;
  }
}
//Exercicio 13 boas vindas
function hydrate(txt){
  //SOLUTION FOUND IN ----> https://stackoverflow.com/questions/10003683/how-can-i-extract-a-number-from-a-string-in-javascript
  let numb = txt.match(/\d/g);
  let total = 0;
  for(i=0;i<numb.length;i++){
      total += parseInt(numb[i]);
  }
  if(total == 1){
    return total + " copo de água";    
  }else{
    return total + " copos de água";   
  } 
}
module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
