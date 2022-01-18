function fizzBuzz(array) {
  const answerArray = [];
  array.forEach((element) => {
    if (element % 3 === 0 && element % 5 === 0) answerArray.push('fizzBuzz');
    else if (element % 3 === 0) answerArray.push('fizz');
    else if (element % 5 === 0) answerArray.push('buzz');
    else (answerArray.push('bug!'));
  });
  return answerArray;
}
console.log(fizzBuzz([15, 5, 3, 11]));