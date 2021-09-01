// Desafio 10
function techList(tecnol) {
let newObj = {};
  if (tecnol.length === 0) {
    return 'Vazio!';
  } else {
    for ( let index = 0; index < tecnol.length; index++ ) {

    }
  }
}

// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
}

// Desafio 12
function triangleCheck() {
  // seu código aqui
}

// Desafio 13

function hydrate(str) {
  debugger
  let newStr = str.split('');
  let counter = 0;

  for(let index in newStr) {
    if(newStr[index] === '1'){
      counter += 1;
    }else if(newStr[index] === '2'){
      counter += 2;
    }else if(newStr[index] === '3'){
      counter += 3;
    }
     if(newStr[index] === '4'){
      counter += 4;
    }else if(newStr[index] === '5'){
      counter += 5;
    }else if(newStr[index] === '6'){
      counter += 6;
    }else if(newStr[index] === '7'){
      counter += 7;
    }else if(newStr[index] === '8'){
      counter += 8;
    }else if(newStr[index] === '9'){
      counter += 9;
    }
  }
  if(counter === 1){
    counter.toString();
    return `${counter} copo de água`
  }else{
    counter.toString();
    return `${counter} copos de água`
  }
}



module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
