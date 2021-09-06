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
let fone = generatePhoneNumber([0, 2, 3, 4, 5, 8, 7, 9, 1, 0, 7]);
function generatePhoneNumber(arrayNumber) {
  let arrayNumberNew = arrayNumber.slice(0, 11);
  let phoneNumber = "(";
  //let sumNumber = 3; 
  if (arrayNumber.length != 11) {
    return "Array com tamanho incorreto."
  } else {
    let sumNumber = repeteasNumber(arrayNumber);
    for (index = 0; index < arrayNumberNew.length; index += 1){
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
      if (sumNumber < 3){
        sumNumber = 1;
      }
      numberCurrent = orderArrayNumber[indexOrder];
    }
  }
  //console.log(sumNumber)
  return sumNumber
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
