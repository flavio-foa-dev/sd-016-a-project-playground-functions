// Desafio 10
function techList(techs, name) {

  let techsSorted = techs.sort();
  let array = [];
  let mensagem = " ";
  
  if (techs.length === 0) {
    mensagem = 'Vazio'
  } else {
    for (let index = 0; index <= techsSorted.length; index += 1) {  
    let elemento = { 
    tech: techsSorted[index],
    name: name, } 
    techsSorted[index] === elemento.tech;
    array.push(elemento)
   }
   return array
}
   return mensagem
}

let arrayTecnologia = [];
console.log(techList(arrayTecnologia, 'Lucas'))
let arrayTecnologia2 = ["React", "Jest", "HTML", "CSS", "JavaScript"];
console.log(techList(arrayTecnologia2, 'Lucas'));

// Desafio 11
function generatePhoneNumber(numeros) {

}

// Desafio 12
function triangleCheck(lado1,lado2,lado3) {
    function check1 (lado1, lado2, lado3){
    let condicao1 = false;
    if (lado1 < lado2 + lado3 && lado2 < lado1 + lado3 && lado3 < lado1 + lado2) {
      condicao1 === true;
    } else {
      condicao1 === false;
    }
    return condicao1
  }
  function check2(lado1, lado2, lado3) {
    let condicao2 = false;
    if (lado1 > Math.abs(lado2 - lado3) && lado2 > Math.abs(lado1 - lado3) && lado3 > Math.abs(lado1 - lado2)) {
      condicao2 === true;
    } else {
      condicao2 === false;
    }
    return condicao2;
  } 
  if (check1 === true && check2 === true) {
    let resultado = true;
    resultado === true;
  } else {
    resultado === false;
  }
  return resultado;
}

console.log(triangleCheck(16, 9, 2));

// Desafio 13
function hydrate(string) {     
  let contagem = string.match(/[0-9]+/g); 
  let contadorBedidas = 0;
           
  for (let i = 0; i < contagem.length; i += 1 ){
      contadorBedidas += parseInt(contagem[i]);
  } 
  return contadorBedidas + " copos de água"
  }
  console.log(hydrate("8 cervejas e 1 cachaça"));


module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
