// Desafio 10
/*
Crie uma função que recebe um array de nomes de tecnologias que você quer aprender. 
Essa função deve receber também um segundo parâmetro chamado name com um nome.

Para cada tecnologia no array, crie um objeto com a seguinte estrutura:

{
  tech: "NomeTech",
  name: name
}

Estes objetos devem ser inseridos em uma nova lista em ordem crescente a partir do campo 
tech no objeto.

A saída da sua função deve ser uma lista de objetos ordenada pelo campo tech dos objetos com o 
formato acima.

Exemplo:

Entradas da função:

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

O que será verificado:

    Retorne uma lista de objetos ordenados quando é passada uma lista com 5 tecnologias

    Retorne a mensagem de erro 'Vazio!' quando a lista não tiver tecnologias

Bônus

*/
function techList(nameTech, name) {  
    let arrTechs = [];  
    nameTech = nameTech.sort(); 
     if (nameTech.length === 0) {
        return 'Vazio!';
      } 
      for (let index = 0; index < nameTech.length; index += 1) {
      arrTechs.push({
        tech: nameTech[index],        
        name
      });
    }
    return (arrTechs);   
}
   

//let resposta = techList(["React", "Jest", "HTML", "CSS", "JavaScript"], "Ricielle");
//console.log(resposta);


// Desafio 11

/*
11 - Crie uma função de Número de Telefone
Crie uma função chamada generatePhoneNumber que receba uma array com 11 números e retorne um 
número de telefone, respeitando parênteses, traços e espaços.

Exemplo: caso o parâmetro da função seja [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1], generatePhoneNumber 
deverá retornar (12) 34567-8901.

Se a função receber um array com tamanho diferente de 11, a mesma deve retornar "Array com tamanho 
incorreto.".

Caso algum dos números da array seja menor que 0, maior que 9 ou se repita 3 vezes ou mais, 
generatePhoneNumber deverá retornar a string "não é possível gerar um número de telefone com esses 
valores".

O que será verificado:

Retorne a string "Array com tamanho incorreto." caso o array tenha o tamanho diferente de 11

Retorne a string "não é possível gerar um número de telefone com esses valores" caso algum dos números 
do array seja menor que 0

Retorne a string "não é possível gerar um número de telefone com esses valores" caso algum número do
array seja maior que 9

Retorne a string "não é possível gerar um número de telefone com esses valores" caso algum número do 
array se repetir 3 vezes ou mais

Retorne um número de telefone, respeitando parênteses, traços e espaços caso os números do array 
estejam de acordo com as especificações

*/
function generatePhoneNumber() {
  if (checkNumberPhone(arrNumber)) {
    return checkNumberPhone(arrNumber);
  }
  let numberPhone = '(';
  for (let index = 0; index < arrNumber.length; index += 1) {
    if (numberPhone.length === 3) {
      numberPhone += ') ';
    } else if (numberPhone.length === 10) {
      numberPhone += '-';
    }
    numberPhone += arrNumber[index];
  }
  return numberPhone;
}
  
function repeteNumber(num, arrNumber) {
  let repete = 0;
  for (let index = 0; index < arrNumber.length; index += 1) {
    if (num === arrNumber[index]) {
      repete += 1;
    }
    if (repete >= 3) {
      return true;
    }
  }
  return false;
}
function menor0Maior9(num) {
  return num < 0 || num > 9;
}
function checkNumberPhone(phoneNumber) {
  if (phoneNumber.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  for (let index = 0; index < phoneNumber.length; index += 1) {
    if (menor0Maior9(phoneNumber[index]) || repeteNumber(phoneNumber[index], phoneNumber)) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }
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
