function encode(convert) {
  let separado = convert.split('')
  for (index = 0; index < separado.length; index += 1) {
    if ( separado[index] === "a" || separado[index] === "e" ||separado[index] === "i" ||separado[index] === "o" || separado[index] === "u" ) {
      if ( separado[index] === "a") {
        separado.splice(index, 1, "1");
        } else if ( separado[index] === "e") {
        separado.splice(index, 1, "2");
        } else if ( separado[index] === "i") {
        separado.splice(index, 1, "3");
        } else if ( separado[index] === "o") {
        separado.splice(index, 1, "4");
        } else if ( separado[index] === "u") {
        separado.splice(index, 1, "5");
      }
    }
  }
separado = separado.join('');
console.log(separado)
}

encode("Hello")
   