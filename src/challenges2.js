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
function generatePhoneNumber() {
  // seu código aqui
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
let myString = "1 cerveja, 4 cachaça e 1 vinho";
let sepString = myString.split(" ")
let number = 0;
for (key in sepString){
  if (sepString[key] > 0 && sepString[key] <= 9){
   let numero = parseInt(sepString[key]);
   number += numero
  }
}
console.log(number);