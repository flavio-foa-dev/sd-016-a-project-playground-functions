// Desafio 10
function techList(arr, name) {
  //declara array auxiliar
  let newArray = [];
  //retorna vazio caso o array recebido seja == null
  if(arr.length === 0){
    return 'Vazio!'; 
  }
  //itera sobre o array recebido como argumento e insere os dados recebidos no array auxiliar
  for(let index in arr) {
    newArray.push({tech: arr[index],name: name},);
  }
  //retorna o array auxiliar ordenado em ordem alfabetica
  return newArray.sort((a,b)=>{
    if (a.tech < b.tech)
      return -1;
    else
      return 1;
  });
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
