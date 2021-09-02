function fizzBuzz(numbers) {
  // seu código aqui
  for (let number of numbers) {
    if (number % 3 === 0 && number % 5 === 0) {
      numbers.splice(number, number, 'fizzBuzz')
      numbers.splice(number, number, 'fizz')
    } else if (number % 3 === 0) {
      numbers.splice(number, number, 'fizz')
    } else if (number % 5 === 0) {
      numbers.splice(number, number, 'buzz')
    } else {
      numbers.splice(number, number, 'bug!')
    }
  }

  return numbers;
}

console.log(fizzBuzz([2, 15, 7, 9, 45]));