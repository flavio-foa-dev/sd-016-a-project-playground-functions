// Desafio 1
function compareTrue(b1, b2) {
  if ((b1 && b2) === true) {
    return true
  } else {
    return false
  }
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2
}

// Desafio 3
function splitSentence(strings){
  let array = []
  array = strings.split('')
  return array
}

// Desafio 4
function concatName(strings) {
let value = strings[strings.length - 1] + ', ' + strings[0];
  return value
}

// Desafio 5
function footballPoints(wins, ties) {
let won = ((wins * 3) + ties)
  return won
}

// Desafio 6
function highestCount(numbers) {
let higher = numbers

for(let i=0; i < numbers.length; i += 1){
  if(numbers[i] > higher)
  higher = numbers[i]
}
value = 0
for(let a=0; a < numbers.length; a += 1){
  if(higher === numbers[a]){
    value = value + 1
    return value
  }
  
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
let distance1 = cat1 - mouse
let distance2 = cat2 - mouse

if(distance1 < distance2){
  return cat1
}
else if(distance2 < distance1){
  return cat2
} 
else {
  return "os gatos trombam e o rato foge"
}
}

// Desafio 8
function fizzBuzz(num) {
let result = [];
for (let i = 0; i < num.length; i += 1){
  if(num[i] % 3 === 0 && num[i] % 5 === 0) {
    result.push("fizzBuzz");
   }
   else if(num[i] % 5 === 0) {
    result.push("buzz");
   }
   else if(num[i] % 3 === 0){
    result.push("fizz")
   } else{
     result.push("bug!")
   }
}
return result
}

// Desafio 9
function encode(wordCode) {
  let word = ''
for(let g = 0; g < wordCode.length; g += 1){
  if(wordCode[g] === 'a'){
    word += 1
  }
  else if(wordCode[g] === 'e'){
    word += 2
  }
  else if(wordCode[g] === 'i'){
    word += 3
  }
  else if(wordCode[g] === 'o'){
    word += 4
  }
  else if(wordCode[g] === 'u'){
    word += 5
  } else { 
    word += wordCode[g]
  }
}return word
}

function decode(numCode) {
  let num = ''
  for(let g = 0; g < numCode.length; g += 1){
    if(numCode[g] === '1'){
      num += 'a'
    }
    else if(numCode[g] === '2'){
      num += 'e'
    }
    else if(numCode[g] === '3'){
      num += 'i'
    }
    else if(numCode[g] === '4'){
      num += 'o'
    }
    else if(numCode[g] === '5'){
      num += 'u'
    } else { 
      num += numCode[g]
    }
  }return num
  }
console.log(decode("h3 th2r2!"))

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
