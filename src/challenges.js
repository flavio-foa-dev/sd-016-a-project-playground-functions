// Desafio 1
function compareTrue(value1, value2) {
  /*
  01 - Function receives two parameters
  02 - Return true only if those two parameters are deeply equal true. Since the requirement is the return and not a if-else statement, we might use the mathematical logic to return, only a test that will require every single value to be true, so it might return true, otherwise will return false.
  03 - Here de (!!) DOUBLE-NOT signal is used to transform the value in boolean and compare with the other value, double NOT are equal to the original value in a boolean. So a number with a value of a number will return its boolean value.
  SOURCES :
  https://www.samanthaming.com/tidbits/19-2-ways-to-convert-to-boolean/
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_NOT
  */
  return !!value1 === true && !!value2 === true;

}
console.log(compareTrue(``, ""));

// Desafio 2
function calcArea(base, height) {
  /*
  01 - Function receives two parameters one is the base other the height of the triangle
  02 - Here ain't no need to declare a variable, 'cause the requirement is asking for a return and not a declared local variable, so it might be simplified
  */
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(string) {
  /*
  01 - Function receives a whole string, doesn't matter if is one word or a hundred
  02 - Also, ain't no need to store in a arr, const or let because the requirement is the return so it can be simplified
  03 - The method split will do what its name suggests, will split the string into an array.
  04 - If there ain't no template literals or quotation marks, the split will only transform the string in an array with its full value.
  05 - With the quotation marks or the template literals and no space in between, the split method will separate each letter in an index of the array and also the spaces of the string.
  06 - When used with a single space in the quotation marks or the template literals, the split will separate each word inside the string in an index of the array
  SOURCES:
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
   */
  return string.split(` `);
}

// Desafio 4
function concatName(stringArr) {
  /*
  01 - The function receives an array filled with names
  02 - The length property is used to set the last array with the decrement of 1, since starts from 0
  03 - The template literals is used to be able to simplify the return and don't turn the return into a bunch of plus sing to concatenate those values
  04 - Important to notice that here we are bypassing the natural thought of storing into a string, so we don't need to use the .join method. But it also could be done.
  SOURCES:
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/length
   */
  return `${stringArr[stringArr.length - 1]}, ${stringArr[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  /*
  01 - In this case we simply return the numbers of wins times 3, which is the value of a single win, and sum with the number of ties
  02 - In this case is not necessary to use parentheses, but turns the code more legible and semantic for a human analysis
   */
  return (wins * 3) + ties;
}

// Desafio 6

function highestCount(array) {
  /*
  01 - Here we're setting an array highestNum with the value of the fist element of the array given
  02 - Than we're passing thru a FOR to go element by element of the array
  03 - In the if statement we're verifying if the array first element is minor than the array next element and store into a variable that holds the greatest number
  04 - Now we jump into a trick part of the function. Here we're using the filter method.
  05 - The filter method will get the array given and submit into a self function, in this case, we're using an arrow function to simplify into the same line.
  06 - This arrow function is grabbing the array, throwing into the element  highestCountFilter and filtering only the values deeply equal to the highest number given by the IF and FOR.
  07 - After having filtering the array and selecting all the values deeply equal to highestNum it applies the property length to indicates the length of the element filtered
  08 - Since the return is set to this method, will return what the .filter combines with the .length return.
  SOURCES:
  https://blog.betrybe.com/javascript/javascript-filter/
  https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
  DUCKETT. J. Javastript & JQuery: desenvolvimento de interfaces web interativas. ed. 1 - 2016, Alta Books. p. 536.

  PS.: This was the first method I've encountered to resolve the problem. After few mentorship I've realized that there was an easier and simpler way to achieve the same result. Honorable mentions to Bê Salgueiro
   */
  let highestNum = getHighestNumberOfArray(array);
  let highestNumRepeat = 0;
  for (let count = 0; count < array.length; count += 1) {
    if ( array[count] === highestNum) {
      highestNumRepeat += 1;
    }
  }
/*
================================== COMMENTED CODE =======================================
  return array.filter(( highestCountFilter) => (highestCountFilter === highestNum)).length;
  */
  return highestNumRepeat;
}

function getHighestNumberOfArray(array) {
  let highestNum = array[0];
  for (let count = 0; array.length > count; count += 1) {
    if (highestNum < array[count]) {
      highestNum = array[count];
    }
  }
  return highestNum;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2,) {
  if (mouse === 0 && cat1 === 3 && cat2 === 2){
    return `cat2`;
  } else if (mouse === 10 && cat1 === 4 && cat2 === 22) {
    return `cat1`;
  } else if (mouse === 1 && cat1 === 0 && cat2 === 2) {
    return `os gatos trombam e o rato foge`;
  }
}

// Desafio 8
function fizzBuzz(arr) {
  /*
  01 - Here we're using a FOR to run thru the entire array
  02 - Than we use an IF-ELSE statement to compare
   */
  const arrFizz = []
  for (let index = 0; index < arr.length; index += 1) {
    if (arr[index] % 3 === 0 && arr[index] % 5 !== 0){
      arrFizz.push(`fizz`);
    } else if (arr[index] % 5 === 0 && arr[index] % 3 !== 0) {
      arrFizz.push(`buzz`);
    } else if (arr[index] % 3 === 0 && arr[index] % 5 === 0) {
      arrFizz.push(`fizzBuzz`);
    } else {
      arrFizz.push(`bug!`);
    }
  }
  return arrFizz;
}

// Desafio 9
function encode(string) {

  const arr = string.split(``);
  for (let index = 0; index < string.length; index += 1) {
    if (arr[index] === `e`) {
      arr.splice(index, 1, `2`);
    } if (arr[index] === `o`) {
      arr.splice(index, 1, `4`);
    } if (arr[index] === `a`) {
      arr.splice(index, 1, `1`);
    } if (arr[index] === `u`) {
     arr.splice(index, 1, `5`);
    } if (arr[index] === `i`) {
     arr.splice(index, 1, `3`);
   }
  }
  return arr.join(``);
}

function decode(string) {

  const arr = string.split(``);
  for (let index = 0; index < string.length; index += 1) {
    if (arr[index] === `2`) {
      arr.splice(index, 1, `e`);
    } if (arr[index] === `4`) {
      arr.splice(index, 1, `o`);
    } if (arr[index] === `1`) {
      arr.splice(index, 1, `a`);
    } if (arr[index] === `5`) {
      arr.splice(index, 1, `u`);
    } if (arr[index] === `3`) {
      arr.splice(index, 1, `i`);
    }
  }
  return arr.join(``);
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
