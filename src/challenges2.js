// Desafio 10
function techList(tecnologias, name) {
 /*  let lista = {
    tech: '',
    name: ''
  }; 

  for (let i = 0; i < tecnologias.length; i += 1) {
    let lista.tech = tecnologias[i];

  } */
}
 
/* console.log(techList(["React", "Jest", "HTML", "CSS", "JavaScript"], 'Lucas')); */

// Desafio 11
function generatePhoneNumber(array) {
  let telefone = [];
  if (array.length != 11) {
    return "Array com tamanho incorreto.";
  }
  for (let i = 0; i <= 1; i += 1){
    telefone = ('(' + array[0] + array[1] + ')');
  }
    telefone += " ";

  for (let j = 2; j <= 6; j += 1) {
    telefone += array[j]; 
  }

    telefone += "-";

  for (let l = 7; l <= 10; l += 1) {
    telefone += array[l];
  }

  let repete = 0;
    for (let i = 0; i < array.length; i += 1) {
      if (array[i] < 0 || array[i] > 9) {
        return 'não é possível gerar um número de telefone com esses valores';
      }
        for (let key in array){
          if (array[i] === array[key]){
            repete += 1;
          }
        }
          if (repete >= 3) {
            return "não é possível gerar um número de telefone com esses valores";
        }
        repete = 0;
    }
    return telefone;
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
