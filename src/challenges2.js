// Desafio 10
function techList(array, name) {
  if (array.length === 0) {
    return 'Vazio!'; 
  }

  const sortedArray = array.sort();
  const tecnologiasList = [];

  for (let i = 0; i < sortedArray.length; i += 1) {
    tecnologiasList.push({
      tech: sortedArray[i],
      name,
    });
  }
  return tecnologiasList;
};

console.log(techList(['react, pyton, js'], 'gabi'))

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
function triangleCheck(lineA, lineB, lineC) {
  
  let condicao1 = (lineA < lineB + lineC && lineB < lineA + lineC && lineC < lineA + lineB);
  let condicao2 = Math.abs(lineA > (lineB - lineC)) && Math.abs(lineB > (lineA - lineC)) && Math.abs(lineC > (lineA - lineB));
    if (condicao1 && condicao2) {
      return true;
    } else {
      return false;
    }
}

// Desafio 13
function hydrate(string) {
  let procuraNumero = /\d+/g;
  let resposta = (string.match(procuraNumero));
  let soma = 0;
   for (let i in resposta){ 
    soma += i;
   }
   if (soma === 1){
     return soma + ' copo de água';
   } else if (soma > 1){
     return soma + ' copos de água';
   }
  return soma;
}
console.log(hydrate("2 cervejas, 3 vinhos"));

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};

