// Desafio 1
function compareTrue(valor1, valor2) {
  return valor1 && valor2;
}
// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
  return area;
}
// Desafio 3n
function splitSentence(string) {
 arr = string.split(" ");
  return arr;
}

// Desafio 4
function concatName(array) {
  first = array.shift();
  last = array.pop();
  newArr = last + ", " + first;
  return newArr;
}


// Desafio 5
function footballPoints(wins, ties) {
  points = (wins * 3) + ties;
  return points;
}

// Desafio 6
function highestCount(array) {
  array.sort()
  let max = Math.max(array)
  return max
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let cat1Dist = Math.abs(cat1 - mouse);
  let cat2Dist = Math.abs(cat2 - mouse);
  if(cat1Dist === cat2Dist){
    return 'os gatos trombam e o rato foge';
  } else if (cat1Dist > cat2Dist){
    return "cat2";
  } else if (cat1Dist < cat2Dist){
    return "cat1";
  }
}
console.log(catAndMouse(1, 0, 2))
// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
