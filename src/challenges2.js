// Desafio 10
function techList(tech, name) { // Ajuda do Leandro Leão turma 16 tribo A
  let ordenada = tech.sort();
  let arr = [];
  
  if (tech.length > 0){
    for (key in ordenada){
      let objeto = {
        tech: ordenada[key],
        name: name,
      } 
     arr.push(objeto) 
    }
    return arr;
  }
  
  else {
    return "Vazio!"
  }
  
}

// Desafio 11
function generatePhoneNumber(numbers) {
  if (numbers.length != 11){
    return "Array com tamanho incorreto."
  }
  let str = numbers.toString();
  for (key in numbers){
    if (numbers[key] < 0 || numbers[key] > 9){
      return 'não é possível gerar um número de telefone com esses valores'
    }
  }
    let ddd ="";
    let primeiraParte="";
    let segundaParte="";

    for (i = 0; i < 2; i+=1){
      ddd += str[i];
    }
    for (i = 2; i < 7; i+=1){
      primeiraParte += str[i];
    }
    for (i = 7; i <= 11; i+=1){
      segundaParte += str[i];
    }
    
    return "("+ ddd + ")" + primeiraParte + "-" + segundaParte
  

}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let linhaA = (lineB - lineC);
  let linhaB = (lineA - lineC);
  let linhaC = (lineA - lineB);

  if ((lineA < lineB + lineC) && (lineA > Math.abs(linhaA))){
    return true;
  } else if ((lineB < lineA + lineC) && (lineB > Math.abs(linhaB))){
    return true;
  } else if ((lineC < lineA + lineB) && (lineC > Math.abs(linhaC))){
    return true;
  } else {
    return false;
  }
}

// Desafio 13
function hydrate(consumo) {
  let separada = consumo.split(" ");
  let number = 0;
  
  for (key in separada){
    if (separada[key] > 0 && separada[key] <=9){
       let numero = parseInt(separada[key]);
      number += numero
    }
  }
  if (number > 1){
  return number + ' copos de água'
} else{
  return number + ' copo de água'
}
}
module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
