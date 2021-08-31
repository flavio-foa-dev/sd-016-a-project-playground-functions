// Desafio 1
function compareTrue(valor1, valor2) {
  if (valor1 === true && valor2 === true){
    return true
  }else{
    return false
  }
}

// Desafio 2
function calcArea(base, height) {
  let calculo = (base * height) / 2;
  return calculo
}

// Desafio 3
function splitSentence(stringSplit) {
  let arr = stringSplit.split(' ');
  return arr
}

// Desafio 4
function concatName(array) {
  let string = array[array.length-1] + ", "+ array[0]
  return string
}

// Desafio 5
function footballPoints(wins, ties) {
  let calc = (wins * 3) + (ties *1)
  return calc
}

// Desafio 6
function highestCount(arr) {
    let highestNumber = arr[0];
    let sum = 1;
    for (let index = 1; index < arr.length; index += 1){
        if (arr[index] > highestNumber){
            
            highestNumber = arr[index];
            sum = 1;

        }else if ( arr[index] === highestNumber){
            sum += 1;
        }
    }
    return sum
}
// [ 2, 3 , 5 ,2 4]

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
    distanceCat1 = mouse - cat1;  
    distanceCat2 = mouse - cat2;

    if ( distanceCat1 < 0){
      distanceCat1 = distanceCat1 * (-1);
    }else if (distanceCat2 < 0){
      distanceCat2 = distanceCat2 * (-1);
    }

    if ( distanceCat2 === distanceCat1){
      return 'os gatos trombam e o rato foge'
    }else if (distanceCat1 < distanceCat2){
        return 'cat1'
    }else if (distanceCat2 < distanceCat1){
        return 'cat2' 
    }
}


// Desafio 8
function fizzBuzz(arr) {
      let array = [];
    for (let index = 0; index < arr.length; index += 1){
        if (arr[index] % 3 === 0 && arr[index] % 5 === 0){
            array.push('fizzBuzz');
        }else if (arr[index] % 5 === 0){
            array.push('buzz');
        }else if (arr[index] % 3 === 0){
            array.push('fizz');
        }else{
            array.push('bug!')
        }
    }
    return array
}

// Desafio 9
function encode(string) {
//   let newString = string ;
//   for (let i = 0; i < string.length; i += 1){
//     if (string[i] === 'a'){
//       newString[i] = '1';
//     }else if (string[i] === 'e'){
//       newString[i] = '2';
//     }else if (string[i] === 'i'){
//       newString[i] = '3';
//     }else if (string[i] === 'o'){
//       newString[i] = '4';
//     }else if (string[i] === 'e'){
//       newString[i] = '5';
//     }else{
//       newString[i] = string[i];
//     }
//   }
//   return newString
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
