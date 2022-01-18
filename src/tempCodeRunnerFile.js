function decode(string) {
  const stringReplaceA = string.replace(/1/gi, 'a');
  const stringReplaceE = stringReplaceA.replace(/2/gi, 'e');
  const stringReplaceI = stringReplaceE.replace(/3/gi, 'i');
  const stringReplaceO = stringReplaceI.replace(/4/gi, 'o');
  const stringReplaceU = stringReplaceO.replace(/5/gi, 'u');
  return stringReplaceU;
}
console.log(decode('1 2 3 45'));