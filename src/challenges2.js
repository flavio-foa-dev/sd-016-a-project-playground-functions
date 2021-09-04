// Desafio 10
function techList(techNames, names) {
  let list = [];
  techNames.sort();
  if (techNames.length === 0) {
    return 'Vazio!';
  }
  for (let key in techNames) {
    techNames[key] = {
      tech: techNames[key],
      name: names
    };
    list.push(techNames[key]);
  }
  return list;
}

// Desafio 11
function generatePhoneNumber(telefoneNumber) {
  let cont0 = 0;
  let cont1 = 0;
  let cont2 = 0;
  let cont3 = 0;
  let cont4 = 0;
  let cont5 = 0;
  let cont6 = 0;
  let cont7 = 0;
  let cont8 = 0;
  let cont9 = 0;

  if(telefoneNumber.length !== 11){
    return "Array com tamanho incorreto."
  }
  for(let index = 0; index < telefoneNumber.length; index += 1){
      if(telefoneNumber[index] < 0 | telefoneNumber[index] > 9){
        return "não é possível gerar um número de telefone com esses valores";
      }
      if(cont4 >= 3){
        return "não é possível gerar um número de telefone com esses valores";
      }
  }
    for(let index = 0; index < telefoneNumber.length; index += 1){
    if(telefoneNumber[index] === 0){
      cont4 +=1;
    }
    if(telefoneNumber[index] === 1){
      cont8 += 1;
    }
    if(telefoneNumber[index] === 2){
      cont2 += 1;
    }
    if(telefoneNumber[index] === 3){
      cont1 += 1;
    }
    if(telefoneNumber[index] === 4){
      cont0 += 1;
    }
    if(telefoneNumber[index] === 5){
      cont3 += 1;
    }
    if(telefoneNumber[index] === 6){
      cont5 += 1;
    }
    if(telefoneNumber[index] === 7){
      cont6 += 1;
    }
    if(telefoneNumber[index] === 8){
      cont7 += 1;
    }
    if(telefoneNumber[index] === 9){
      cont9 += 1;
    }
  }
  if(cont8 >= 3){
    return "não é possível gerar um número de telefone com esses valores";
  }
  if(cont2 >= 3){
    return "não é possível gerar um número de telefone com esses valores";
  }
  if(cont1 >= 3){
    return "não é possível gerar um número de telefone com esses valores";
  }
  if(cont0 >= 3){
    return "não é possível gerar um número de telefone com esses valores";
  }
  if(cont3 >= 3){
    return "não é possível gerar um número de telefone com esses valores";
  }
  if(cont5 >= 3){
    return "não é possível gerar um número de telefone com esses valores";
  }
  if(cont6 >= 3){
    return "não é possível gerar um número de telefone com esses valores";
  }
  if(cont7 >= 3){
    return "não é possível gerar um número de telefone com esses valores";
  }
  if(cont9 >= 3){
    return "não é possível gerar um número de telefone com esses valores";
  }

  return "(" + telefoneNumber[0] + telefoneNumber[1] + ") " + telefoneNumber[2] + telefoneNumber[3] + telefoneNumber[4] + telefoneNumber[5] + telefoneNumber[6] + "-"  + telefoneNumber[7] + telefoneNumber[8] + telefoneNumber[9] + telefoneNumber[10];
}


// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let a = lineB - lineC;
  let b = lineA - lineC;
  let c = lineA - lineB
  if (lineA < lineB + lineC && lineA > Math.abs (a)|| lineB < lineA + lineC && lineB > Math.abs (b) || lineC < lineA + lineB && lineC > Math.abs (c)) {
    return true;
  } 
  else {
    return false;
  }
}

// Desafio 13
function hydrate(string) {
  let cont = 0;
  for(let index = 0; index < string.length; index += 1){
    if(string[index] == 1){
      cont += 1;
    }
    if(string[index] == 2){
      cont += 2;
    }
    if(string[index] == 3){
      cont += 3;
    }
    if(string[index] == 4){
      cont += 4;
    }
    if(string[index] == 5){
      cont += 5;
    }
    if(string[index] == 6){
      cont += 6;
    }
    if(string[index] == 7){
      cont += 7;
    }
    if(string[index] == 8){
      cont += 8;
    }
    if(string[index] == 9){
      cont += 9;
    }
  }
  if(cont === 1){
    return cont + " copo de água";
  }
  else {
    return cont + " copos de água";
  }
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
