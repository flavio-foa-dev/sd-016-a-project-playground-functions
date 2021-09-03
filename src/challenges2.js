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

 
}

// Desafio 13
function hydrate(string) {
  // baseado e adaptado dos códigos na seguinte página
  // https://stackoverflow.com/questions/1623221/how-to-find-a-number-in-a-string-using-javascript/30160994
      
  let contagem = string.match(/[0-9]+/g); 
  let contadorBedidas = 0;
           
  for (let i = 0; i < contagem.length; i += 1 ){
      contadorBedidas = contadorBedidas + contagem[i];
  } 
  return contadorBedidas
  }
  console.log(hydrate("8 cervejas e 1 cachaça"));


module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
