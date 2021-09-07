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
  let cont = 0
for (i in numbers){
  for (j=1; j < numbers.length; j+=1){
    if (numbers[j] === numbers[i]){
      cont += 1
    }
    }
    if (cont >= 3){
      break;
      } else {
        cont = 0
      }
}; 
  
  for (key in numbers){
    if (numbers[key] < 0 || numbers[key] > 9 || cont >= 3){
      return 'não é possível gerar um número de telefone com esses valores'
    }
  }
    
    let ddd = numbers.slice(0, 2);
    let primeiraParte = numbers.slice(2, 7);
    let segundaParte = numbers.slice(7, numbers.length);
    
    
    return "("+ ddd.join('') + ") " + primeiraParte.join('') + "-" + segundaParte.join('');
  

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
