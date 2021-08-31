// Desafio 10
function createObject (tecnologia, nome) {
  const obj = {};

  obj.tech = tecnologia;
  obj.name = nome;

  return obj;
}

function techList(array, nome) {
  // seu código aqui
  let techInfo = [{}];
  array.sort();

  if(array.length === 0){
    return 'Vazio!'
  }

  for (let x = 0; x < array.length; x += 1) {
    techInfo[x] = createObject(array[x], nome)
  }

  return techInfo;
}

// Desafio 11
function generatePhoneNumber(number) {
  // seu código aqui
  let counter = 0;
  let phoneNumberConverter = `(${number[0]}${number[1]}) ${number[2]}${number[3]}${number[4]}${number[5]}${number[6]}-${number[7]}${number[8]}${number[9]}${number[10]}`;
  if ( number.length !== 11 ) {
     return 'Array com tamanho incorreto.';
  }
  
  for (let x = 0; x < number.length; x += 1) {
    counter = 0;
    if (number[x] < 0 || number[x] > 9) {
      return "não é possível gerar um número de telefone com esses valores";
    }
    for (let y = 0; y < number.length; y += 1) {
      if (number[x] === number[y]) {
        counter += 1;
      }
      if (counter === 3) {
        return "não é possível gerar um número de telefone com esses valores";
      }
    }
  }
  return phoneNumberConverter;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  // seu código aqui
  let triangleChecker = false;

  if (lineA < lineB + lineC && lineA > Math.abs(lineB - lineC)){
    triangleChecker = true;
  } else if (lineB < lineA + lineC && lineB > Math.abs(lineA - lineC)) {
    triangleChecker = true;
  } else if (lineC < lineA + lineB && lineC > Math.abs(lineA - lineB)) {
    triangleChecker = true;
  }

  return triangleChecker;
}

// Desafio 13
function hydrate(string) {
  // seu código aqui
  number = '';
  let drinksCounter = 0;

  for (let x = 0; x < string.length; x += 1) {
    if (string[x] >= 1 && string[x] <= 9){

      if(string[x + 1] >= 0 && string[x + 1] <= 9 ){
        number = string[x] + string[x + 1];
        x += 1;
        drinksCounter += parseInt(number);
      }else {
        drinksCounter += parseInt(string[x]);
      }
    }
  }
  
  if(drinksCounter > 1){
    waterCups = drinksCounter + ' copos de água';
  } else {
    waterCups = drinksCounter + ' copo de água';
  }

  return waterCups;
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
