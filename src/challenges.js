// Desafio 1
function compareTrue(a, b) {
  if (a && b === true) return true;
  return false;
}

// Desafio 2
function calcArea(base, altura) {
  const area = (base * altura) / 2;
  return area;
}

function splitSentence(string) {
  const splitString = string.split(' ');
  return splitString;
}

module.exports = {
  calcArea,
  // catAndMouse,
  compareTrue,
  // concatName,
  // decode,
  // encode,
  // fizzBuzz,
  // footballPoints,
  // highestCount,
  splitSentence,
};
