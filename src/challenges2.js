// Desafio 10
function techList(arr, name) {
    let mainObject =[];
    let array = arr.sort();
    for (var i = 0; i < array.length; i += 1){
        mainObject.push ({
            tech : array[i],
            name: name
        })
    }

    if (arr.length <=0){
      return "Vazio!"
    }else{
      return mainObject
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
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
