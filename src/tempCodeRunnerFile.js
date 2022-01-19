function criateArray(listArray, name) {
  if (listArray.length === 0) return 'Vazio!';
  const newArray = listArray.forEach((element) => {
    console.log({
      tech: element,
      name,
    });
  });
  return newArray;
}

console.log(criateArray(['jest', 'python'], 'Gusvo'));