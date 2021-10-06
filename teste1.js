function techList(array, nome) {
  let resultado = [];
  array.sort();
  for (let i = 0; i < array.length; i += 1) {
    resultado.push({ tech: array[i], name: nome });
  }
  return resultado;
}
let a = ['React', 'Jest', 'HTML', 'CSS', 'JavaScript'];
console.log(techList(a, 'lucas'));
