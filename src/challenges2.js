// Desafio 10
function techList(arrTech, name) {
  let arrayTec = [];
  let arrTechSort = arrTech.sort();

  if (arrTech.length === 0){
    return "Vazio!"
  }

  for (let index = 0; index < arrTechSort.length; index += 1){
        let tec = {
        tech: arrTechSort[index],
        name: name, 
        } 
     arrayTec.push(tec);   
  }  
     return arrayTec;
}

// Desafio 11
function generatePhoneNumber(numerosTel) {
  let vezesNumero = 0;
  let deuCerto = true;

  if (numerosTel.length !== 11) {
    deuCerto = false;
    return "Array com tamanho incorreto.";
  } else {
      for (let index = 0; index < numerosTel.length; index += 1) {
        if (numerosTel[index] < 0 || numerosTel[index] > 9) {
          deuCerto = false;
          return "não é possível gerar um número de telefone com esses valores"
        }
      }
        for (let index = 0; index < numerosTel.length; index += 1) {
            vezesNumero = 0;
          for (let segundoIndex = 0; segundoIndex < numerosTel.length; segundoIndex += 1) {
            if (numerosTel[index] === numerosTel[segundoIndex]) {
              vezesNumero = vezesNumero + 1;
              if (vezesNumero >= 3) {
                deuCerto = false;
                return "não é possível gerar um número de telefone com esses valores"
              }
            }
          }
        } 
  }
      if (deuCerto === true) {
        let ddd = "(" + numerosTel[0] + numerosTel[1] + ") " + numerosTel[2] + numerosTel[3] + numerosTel[4] + numerosTel[5] + numerosTel[6] + "-" + numerosTel[7] + numerosTel[8] + numerosTel[9] + numerosTel[10]; 

        return ddd
      }    
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let valor = false;
  
  if (lineA > lineB + lineC || lineB > lineA + lineC || lineC > lineA + lineB) {
    return false;
  } else if (lineA < Math.abs(lineB - lineC) || lineB < Math.abs(lineA - lineC) || lineC < Math.abs(lineA - lineB)) {
    return false;
  } else {
    return true;
  }
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
