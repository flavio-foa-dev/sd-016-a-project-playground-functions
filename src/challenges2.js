// Desafio 10
function techList(tecnologia, nome) {
  // Crie uma função que recebe um array de nomes de tecnologias que você quer aprender
  if(tecnologia.length === 0){
    return "Vazio!"
  }
  else{
      student = tecnologia.sort();
      for (i = 0; i < student.length; i += 1){
        student[i] = {
          tech:student[i],
          name:nome,
        }
      }
        return student
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
