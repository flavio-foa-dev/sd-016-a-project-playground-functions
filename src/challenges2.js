// Desafio 10
function techList(arr, name) {
  //declara array auxiliar
  let newArray = [];
  //retorna vazio caso o array recebido seja == null
  if (arr.length === 0) {
    return 'Vazio!';
  }
  //itera sobre o array recebido como argumento e insere os dados recebidos no array auxiliar
  for (let index in arr) {
    newArray.push({ tech: arr[index], name: name });
  }
  //retorna o array auxiliar ordenado em ordem alfabetica
  return newArray.sort((a, b) => {
    if (a.tech < b.tech) return -1;
    else return 1;
  });
}

// Desafio 11
function generatePhoneNumber(arr) {
  // seu código aqui
  let newArray = arr;
  if (newArray.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  for (let index in newArray) {
    if (newArray[index] < 0 || newArray[index] > 9 || checkRepeat(newArray)>=3) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }

  
  let finalNumbers = newArray.splice(7,10).join('');
  return "(" + newArray[0]+newArray[1]+")"+ " " + newArray.splice(2,6).join('')+ "-" + finalNumbers;

}
generatePhoneNumber([4, 2, 1, 3, 4, 5, 6, 7, 8, 9, 1]);

// Desafio 12
function triangleCheck() {
  // seu código aqui
}

function checkRepeat(array) {
    let repeat = Array.from(new Set(array));
    let occour = 0;
    for (let element of repeat) {
      let result = 0;
      for (let n of array) {
        if (element === n) {
          result += 1;
        }
      }
      if (result > occour) {
        occour = result;
      }
    }
    return occour;
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
