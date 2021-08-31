// Desafio 10
function techList(arr, name) {
  if (arr.length > 0) {
  let techs = [];
  arr.sort()

  for (let i = 0; i < arr.length; i += 1) {
    let object = {
      tech: arr[i],
      name: name
    }
    techs.push(object)
  }
  return techs;
} else {
  return "Vazio!"
}

}

// Desafio 11
function generatePhoneNumber(arr) {
  if (arr.length !== 11) {
    return "Array com tamanho incorreto.";
  }
  
  let counter = 0;

  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] < 0 || arr[i] > 9) {
      return "não é possível gerar um número de telefone com esses valores";
    }
    counter = 0;
    for (let j = 0; j < arr.length; j += 1) {
      if (arr[i] === arr[j]) {
        counter += 1;
        if (counter >= 3) {
          return "não é possível gerar um número de telefone com esses valores";
        }
      } 
    }
  }
  
  let phoneNumber = "";

  for (let i = 0; i < arr.length; i+= 1) {
    if (i === 0) {
      phoneNumber += "(";
    } else if (i === 2) {
      phoneNumber += ") ";
    } else if (i === 7) {
      phoneNumber += "-"
    }
    phoneNumber += arr[i];
  }
  return phoneNumber;
}

// Desafio 12
function triangleCheck(a, b, c) {
  let aValidation = false;
  let bValidation = false;
  let cValidation = false;

  if (a < b + c && a > Math.abs(b - c)) {
    aValidation = true;
  } else {
    return false;
  }
  
  if (b < a + c && b > Math.abs(a - c)) {
    bValidation = true;
  } else {
    return false;
  }
  
  if (c < b + a && c > Math.abs(b - a)) {
    cValidation = true;
  } else {
    return false;
  }

  if (a && b && c) {
    return true;
  } else {
    return false;
  }
}

// Desafio 13
function hydrate(s) {
  let waterCups = 0;
  for (let i = 0; i < s.length; i += 1) {
    if (s[i] == 1 || s[i] == 2 || s[i] == 3 || s[i] == 4 || s[i] == 5 || s[i] == 6 || s[i] == 7 || s[i] == 8 || s[i] == 9) {
      waterCups += parseInt(s[i]);
    }
  }

  if (waterCups === 1) {
    return "1 copo de água"
  } else {
    return waterCups + " copos de água";
  }
}

console.log(hydrate("1 cerveja"))
module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
