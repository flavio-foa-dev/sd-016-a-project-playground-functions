// Desafio 10
function techList(array, name) {
  // seu código aqui
  let objetoFinal = [];
  if (array.length <= 0) {
    return 'Vazio!';
  }
  array = array.sort();
  for (techno of array) {
    objetoFinal.push({tech: techno, name: name, });
  }
  return objetoFinal;
}

// Desafio 11
function generatePhoneNumber(array) {
  let x = 0;
  let numero = array;
  for (index = 0; index < numero.length; index += 1) {
       numero.sort();
      if(numero.length > 11 || numero.length < 11){
        return "numero com tamanho incorreto."
      } else if (numero[index] === numero[index+1] && numero[index+1] === numero[index+2]){
        x = 1;
        }else if (numero[index] < 0 || numero[index] > 9 || x === 1){
        return "não é possível gerar um número de telefone com esses valores"
      }
  }
    let ddd ="(" + array[0]+array[1] + ")";
    let firstHalf = " " + array[2]+array[3]+array[4]+array[5]+array[6];
    let secondHalf = "-"+ array[7]+array[8]+array[9]+array[10];
  return ddd+firstHalf+secondHalf;
}


// preciso arrumar o .sort

    console.log(generatePhoneNumber([1, 3, 4, 2, 5, 6, 7, 8, 9, 1, 2]))
    // let ddd ="(" + array[0]+array[1] + ")";
    // let firstHalf = " " + array[2]+array[3]+array[4]+array[5]+array[6]
    // let secondHalf = "-"+ array[7]+array[8]+array[9]+array[10]
    // return ddd+firstHalf+secondHalf;




// Desafio 12
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
function hydrate(str) {
  let numbers = str.match(/\d+/g).map(Number);
  let glassOfWater = 0;
  for (let index = 0; index < numbers.length; index += 1) {
    glassOfWater += numbers[index];
  }
  if (glassOfWater === 1) {
    return `${glassOfWater} copo de água`;
  } return `${glassOfWater} copos de água`;
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
