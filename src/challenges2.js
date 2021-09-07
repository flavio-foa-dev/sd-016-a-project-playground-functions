// Desafio 10
function techList(techArray, name) {
  //let techArray = []
  let arrayTechLearn = [];
  let techLearn = new Object();
  //let techArray = ["React", "Jest", "HTML", "CSS", "JavaScript"];
  //let name = "Lucas"
  //
  if (techArray.length === 0) {
    arrayTechLearn = 'Vazio!';
  } else {
    techArray.sort();
    for (let index = 0; index < techArray.length; index += 1) {
      let techLearn = {
        tech: techArray[index],
        name: name
      }
      arrayTechLearn.push(techLearn)
    }
  }
  console.log(arrayTechLearn);
  return arrayTechLearn
}

// Desafio 11
//let fone = generatePhoneNumber([0, 2, 3, 4, 5, 8, 7, 9, 1, 0, 7]);
function generatePhoneNumber(arrayNumber) {
  let arrayNumberNew = arrayNumber.slice(0, 11);
  let phoneNumber = "(";
  if (arrayNumber.length != 11) {
    return "Array com tamanho incorreto."
  } else {
    let sumNumber = repeteasNumber(arrayNumber);
    for (index = 0; index < arrayNumberNew.length; index += 1) {
      if ((arrayNumberNew[index] < 0) || (arrayNumberNew[index] > 9) || (sumNumber >= 3)) {
        return "não é possível gerar um número de telefone com esses valores"
      } else {
        if (index === 2) {
          phoneNumber = phoneNumber + ") "
        }
        if (index === 7) {
          phoneNumber = phoneNumber + "-"
        }
        //console.log(arrayNumber[index])
        phoneNumber = phoneNumber + arrayNumberNew[index]
      }
    }
    //console.log("Fone "+phoneNumber)
    return phoneNumber
  }
}

function repeteasNumber(orderArrayNumber) {
  //[0, 2, 3, 4, 5, 8, 7, 9, 1, 0, 7]
  //let arrayNumberOrder = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1,2];
  orderArrayNumber.sort();
  //console.log(arrayNumberOrder)
  let sumNumber = 1;
  let numberCurrent = 999 //orderArrayNumber[0];
  let numberCurrentAnt = orderArrayNumber[0];
  for (indexOrder = 0; indexOrder < orderArrayNumber.length; indexOrder += 1) {
    //console.log(sumNumber+" numberCurrent "+numberCurrent+ " arrayNumberOrder[index]  "+orderArrayNumber[indexOrder] )
    if (orderArrayNumber[indexOrder] === numberCurrent) {
      numberCurrent = orderArrayNumber[indexOrder];
      sumNumber += 1;
    } else {
      if (sumNumber < 3) {
        sumNumber = 1;
      }
      numberCurrent = orderArrayNumber[indexOrder];
    }
  }
  //console.log(sumNumber)
  return sumNumber
}

// Desafio 12
let triangle = triangleCheck(10, 14, 3);
function triangleCheck(lineA, lineB, lineC) {
  //Um triângulo é composto de três linhas: `lineA`, `lineB` e `lineC`. 
  //Crie uma função chamada `triangleCheck` que deverá receber as três linhas como parâmetro e retornar
  // Para formar um triângulo, a medida de qualquer um dos lados seja menor que a soma das 
  //medidas dos outros dois e maior que o valor absoluto da diferença entre essas medidas.
  // - Para obter o valor absoluto de um número em JavaScript, pesquise pela função `Math.abs`.
  // - O retorno da sua função deverá ser um booleano..
  // Exemplo: o retorno de `triangleCheck(10, 14, 8)` deverá ser `true`.
  resultAbsA = Math.abs(lineB - lineC)
  resultAbsB = Math.abs(lineB - lineC)
  resultAbsC = Math.abs(lineB - lineC)
  if ((lineA > resultAbsA) && (lineA < lineB + lineC) && (lineB > resultAbsB) && (lineB < lineA + lineC) && ((lineC > resultAbsC) && (lineC < lineB + lineA))) {
    //console.log(true)
    return true
  } else {
    //console.log(false)
  } return false
}

// Desafio 13
let stringDrinks = hydrate("1 cachaça, 5cervejas e 1 copo de vinho");
function hydrate(stringDrinks) {
 //Referência pegar apenas números de uma string 
 //https://www.horadecodar.com.br/2020/10/14/como-obter-apenas-os-numeros-de-uma-string-em-javascript/
   let numberDrinks = stringDrinks.replace(/[^0-9]/g,'');
   let sumNumbersWaters = 0
   for (index = 0; index < numberDrinks.length; index += 1) {
      sumNumbersWaters = sumNumbersWaters + parseInt(numberDrinks.slice(index,(index+1)));
   }
   //console.log(sumNumbersWaters)
   if (sumNumbersWaters >1) {
     return sumNumbersWaters + " copos de água"
   }else{
    return sumNumbersWaters + " copo de água"
   }
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
