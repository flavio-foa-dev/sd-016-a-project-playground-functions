function highestCount(arrayNumbers) {
  const maxNumber = arrayNumbers.reduce((acc, number) => Math.max(acc, number));
  return arrayNumbers.filter((number) => maxNumber === number).length;
}
console.log(highestCount([1, 2, 3, 3, 3, 3]));