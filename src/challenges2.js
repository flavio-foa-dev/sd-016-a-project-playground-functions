// Desafio 10
function techList(/* tech, name */) {

  // Desafio 11
  function generatePhoneNumber(/* num */) {
    // se tiver 11 numeros tem que retorna em formato de telefone.
    // se for diferente deve retorna  "Array com tamanho incorreto."
    /// caso os numeros seja < que 0 ou se repita 3X ou mais deve retorna "não é possível gerar um número de telefone com esses valores".
/*     if (num.lengh !== 11) {
      return "Array com tamanho incorreto."
    }
    for (let index = 0; index < num.lengh; index += 1) {
      if (num[index] < 0 || num[index] > 9 || repect(num[index], num))  {
        return "não é possível gerar um número de telefone com esses valores"
      }
    }
    function repect(number, array) {
      let result = 0;
      for (let i = 0; i < array.lengh; i += 1) {
        if (number === array[i]) {
          result += 1;
        }
      } if ( result >= 3) {
        return true
      } else {
        return false
      }
    } */
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
