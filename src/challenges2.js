// Desafio 10
function techList(techs, name) {
  let lista = [];
  techs = techs.sort();
  if (techs.length > 0){
    for (let index = 0; index < techs.length; index++) {
      lista[index] = {tech: techs[index], name: name};
    }
  }
  else lista = 'Vazio!';
  return lista;
}

// Desafio 11
function generatePhoneNumber(num) {
  if (num.length !== 11) return 'Array com tamanho incorreto.';
  if (num.some((value) => value < 0)) return 'não é possível gerar um número de telefone com esses valores'
  return `(${num[0]}${num[1]}) ${num[2]}${num[3]}${num[4]}${num[5]}${num[6]}-${num[7]}${num[8]}${num[9]}${num[10]}`;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if ((lineA < lineB+lineC)&&(lineB < lineA+lineC)&&(lineC < lineA+lineB)&&(lineA > Math.abs(lineB - lineC))&&(lineB > Math.abs(lineA - lineC))&&(lineC > Math.abs(lineA - lineB))){
    return true;
  }
  return false;
}

console.log(triangleCheck(10, 14, 8));

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
