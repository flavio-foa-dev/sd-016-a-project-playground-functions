// Desafio 1
function compareTrue(value1, value2) {
  if (value1 === true && value2 === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  let calc = ((base * height) / 2);
  return calc;
}

// Desafio 3
function splitSentence(word) {
  let string = word.split(' ');
  return string;
}

// Desafio 4
function concatName(array) {
  let result = [];
  result = array[array.length - 1] + ', ' + array[0];
  return result;
}

// Desafio 5
function footballPoints(wins, ties) {
  let points = ((wins * 3) + ties);
  return points;
}

// Desafio 6
function highestCount(numbers) {
  let count = 1;
  let num = numbers[0];
  for (let index = 1; index <= numbers.length - 1; index += 1) {
    if (num < numbers[index]) {
      num = numbers[index];
      count = 1;
    } else if (num === (numbers[index])) {
      count += 1;
    } 
  }
  return count;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let result1 = (mouse - cat1);
  let result2 = (mouse - cat2);
  if (Math.abs(result1) > Math.abs(result2)) {
    return "cat2";
  } else if (Math.abs(result1) < Math.abs(result2)) {
    return "cat1";
  }
  else {
    return "os gatos trombam e o rato foge";
  }
}

// Desafio 8
function fizzBuzz(array) {
  let newArray = [];
  for (index = 0; index < array.length; index += 1) {
    if (array[index] % 3 === 0 && array[index] % 5 === 0) {
      newArray.push('fizzBuzz');
    } else if (array[index] % 3 === 0) {
      newArray.push("fizz");
    } else if (array[index] % 5 === 0) {
      newArray.push("buzz");
    } else {
      newArray.push("bug!");
    }
  }
  return newArray;
}

// Desafio 9
function encode(convert) {
  let separado = convert.split('')
  for (index = 0; index < separado.length; index += 1) {
    if (separado[index] === "a" || separado[index] === "e" || separado[index] === "i" || separado[index] === "o" || separado[index] === "u") {
      if (separado[index] === "a") {
        let removed = separado.splice(index, 1, "1");
      } else if (separado[index] === "e") {
        let removed = separado.splice(index, 1, "2");
      } else if (separado[index] === "i") {
        let removed = separado.splice(index, 1, "3");
      } else if (separado[index] === "o") {
        let removed = separado.splice(index, 1, "4");
      } else if (separado[index] === "u") {
        let removed = separado.splice(index, 1, "5");
      }
    }
  }
  separado = separado.join('');
  return separado;
}
function decode(convert) {
  let separado = convert.split('');
  for (index = 0; index < separado.length; index += 1) {
    if (separado[index] === "1" || separado[index] === "2" || separado[index] === "3" || separado[index] === "4" || separado[index] === "5") {
      if (separado[index] === "1") {
        let removed = separado.splice(index, 1, "a");
      } else if (separado[index] === "2") {
        let removed = separado.splice(index, 1, "e");
      } else if (separado[index] === "3") {
        let removed = separado.splice(index, 1, "i");
      } else if (separado[index] === "4") {
        let removed = separado.splice(index, 1, "o");
      } else if (separado[index] === "5") {
        let removed = separado.splice(index, 1, "u");
      }
    }
  }
  separado = separado.join('');
  return separado;
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
