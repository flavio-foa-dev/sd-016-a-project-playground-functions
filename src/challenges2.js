// Desafio 10
function techList(listArray, name) {
  if (listArray.length === 0) return 'Vazio!';
  const newArray = listArray.forEach((element) => {
    console.log({
      tech: element,
      name,
    });
  });
  return newArray;
}

console.log(techList(['jest', 'python'], 'Gusvo'));


// // Desafio 11
// function generatePhoneNumber() {
//   // seu código aqui
// }

// // Desafio 12
// function triangleCheck() {
//   // seu código aqui
// }

// // Desafio 13
// function hydrate() {
//   // seu código aqui
// }

module.exports = {
  // generatePhoneNumber,
  techList,
  // hydrate,
  // triangleCheck,
};
