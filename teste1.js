function generatePhoneNumber(number) {
  let count = 0;
  let array = [];
  if (number.length !== 11){
    return "Array com tamanho incorreto."
  }
  for (let i = 0; i < 11; i += 1){
    // for (let a = 0; a < 11; a += 1){
      // if (number[a] === number[i]){
        // count += 1;
      // }
      // if (count === 3){
        // return "não é possível gerar um número de telefone com esses valores";
      // }
    // }
    array[i] = number[i];
  }
  return console.log(array[0 & 1]);
}
generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1]);