// Desafio 10
function techList(techArray, name) {
/* Entradas da função:
["React", "Jest", "HTML", "CSS", "JavaScript"]
"Lucas"

// Saída:
[
  {
    tech: "CSS",
    name: "Lucas"
  },
  {
    tech: "HTML",
    name: "Lucas"
  },
  {
    tech: "JavaScript",
    name: "Lucas"
  },
  {
    tech: "Jest",
    name: "Lucas"
  },
  {
    tech: "React",
    name: "Lucas"
  }
]
Caso o array venha vazio sua função deve retornar 'Vazio!'

**O que será verificado:**

- Retorne uma lista de objetos ordenados quando é passada uma lista
  com 5 tecnologias

- Retorne a mensagem de erro 'Vazio!' quando a lista não tiver tecnologias

**Bônus** */
if (techArray.length = 0){
  console.log('Vazio!')
} else {
}

  /* for (let index=0; index<techArray.length; index=+1) {
    if (stringDecode[index] ===  1){
      stringDecode[index] = 'a';
  }
  var beatlesTopFour = [
    {
        album: 'Abbey Road',
        releaseYear: 1969
    },
    {
        album: 'Revolver',
        releaseYear: 1966
    },
    {
        album: 'The Beatles (White Album)',
        releaseYear: 1968
    },
    {
        album: 'Rubber Soul',
        releaseYear: 1965
    }
];
} */
/* beatlesTopFour.sort(function(a, b) {
  return a.releaseYear - b.releaseYear;
}); */
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
