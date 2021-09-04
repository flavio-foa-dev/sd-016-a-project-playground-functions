// Desafio 10
function techList(arrTech, name) {
  let arrayTec = [];
  let arrTechSort = arrTech.sort();

  if (arrTech.length === 0){
    return "Vazio!"
  }

  for (let index = 0; index < arrTechSort.length; index += 1){
        let tec = {
        tech: arrTechSort[index],
        name: name, 
        } 
     arrayTec.push(tec);   
  }  
     return arrayTec;
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
