function techList(listArray, name) {
  let newArray;
  if (listArray.length === 0) return 'Vazio!';
  newArray = listArray.map((element) => ({
    tech: element,
    name,
  }));
  newArray.sort((function (a, b) { return a - b }));
}

console.log(techList(['Python', 'Aqui', 'Mais um', 'mais dois'], 'Gustavo'));
