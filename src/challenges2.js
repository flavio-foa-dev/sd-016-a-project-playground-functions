// Desafio 10
function techList(techs, name) {

}

// Desafio 11
function generatePhoneNumber(numeros) {

}

// Desafio 12
function triangleCheck(lado1, lado2, lado3) {
  let resposta1 = false;

  if (lado1 < lado2 + lado3 && lado2 < lado1 + lado3 && lado3 < lado1 + lado2 && lado1 > Math.abs(lado2 - lado3) && lado2 > Math.abs(lado1 - lado3) && lado3 > Math.abs(lado1 - lado2)) {
      resposta1 = true;
  } else {
      resposta1 = false
  }
  return resposta1;
}
  console.log(triangleCheck(10, 14, 8));
  console.log(triangleCheck(2, 3, 4));
  console.log(triangleCheck(16, 20, 30));


// Desafio 13
function hydrate(string) {     
  let contagem = string.match(/[1-9]+/g); 
  let contadorBedidas = 0;
           
  for (let i = 0; i < contagem.length; i += 1 ){
  contadorBedidas = contadorBedidas + parseInt(contagem[i]);
  }
  if (contadorBedidas === 1) {
    return "1 copo de água";
  } else { 
    return contadorBedidas + " copos de água"
  }
  }

  console.log(hydrate("1 cerveja"));
  console.log(hydrate('1 cachaça, 5 cervejas e 1 copo de vinho'));
  console.log(hydrate('2 shots de tequila, 2 cervejas e 1 corote'));
  console.log(hydrate('1 copo de catuaba, 1 cervejas e 1 copo de vinho'));
  console.log(hydrate('4 caipirinhas e 2 cervejas'));


module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
