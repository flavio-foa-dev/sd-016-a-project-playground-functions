// Desafio 10
function techList(array, name) {
  // seu código aqui
      let objetoFinal = []
      if(array.length <= 0){
        return "Vazio!"
      }
      array = array.sort()
      for (techno of array){
        objetoFinal.push({tech: techno, name: name,})
      }
    return objetoFinal;
}

// Desafio 11
function generatePhoneNumber(array) {
  for(index = 0; index < array.length; index+=1){
    let x = 0;
   if(array.length > 11){
     return "Array com tamanho incorreto."
   } else if (array[index] === 3){
      x = x+1;
    }else if (array[index] < 0 || array[index] > 9 || x >= 3){
     return "não é possível gerar um número de telefone com esses valores"
  }else {let ddd ="(" + array[0]+array[1] + ")";
        let firstHalf = " " + array[2]+array[3]+array[4]+array[5]+array[6];
        let secondHalf = "-"+ array[7]+array[8]+array[9]+array[10];
        return ddd+firstHalf+secondHalf;
        }
  }

}
    console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 3, 3, 3, 2]))
    // let ddd ="(" + array[0]+array[1] + ")";
    // let firstHalf = " " + array[2]+array[3]+array[4]+array[5]+array[6]
    // let secondHalf = "-"+ array[7]+array[8]+array[9]+array[10]
    // return ddd+firstHalf+secondHalf;




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
