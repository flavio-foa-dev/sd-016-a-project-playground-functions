const { compareTrue } = require("./challenges");

// Desafio 10
function techList(namesOfTechnologies, yName) {
  let list =  namesOfTechnologies.sort();
  let ordernedList = [];
  if (list.length > 0){ 
  for (let i = 0; i < list.length; i += 1) {
    ordernedList[i] =  {
       tech: list[i],
       name: yName,
     };
  }
   return ordernedList;
  }
  else{
    return "Vazio!";
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
