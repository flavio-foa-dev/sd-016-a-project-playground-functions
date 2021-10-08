function splitSentence(frase) {
    let palavras = [];
    let index = 0;
    for(let letra of frase) {
      if(letra != ' ') { 
        palavras[index] = palavras[index] + letra;
      }
      else {
        index++;
        palavras[index] = palavras[index] + letra;
      }
    }
    return palavras;
  }

  function concatName(palavras) {
    return palavras[palavras.length - 1].concat(',', palavras[0]);
  }

  function encode(frase) {
    let fraseArray = frase.split('');
    console.log(fraseArray);
    for (let index = 0; index < frase.length; index++) {
      switch (frase[index]) {
        case 'a':
          fraseArray[index] = '1';
          break;
        case 'e':
          fraseArray[index] = '2'
          break;
        case 'i':
          fraseArray[index] = '3';
          break;
        case 'o':
          fraseArray[index] = '4';
          break;
        case 'u':
          fraseArray[index] = '5';
          break;
        default:
          break;
      }
    }
    fraseArray = fraseArray.join('');
    return fraseArray;
  }

  let palavras = 'hello';
  let resultado = encode(palavras);
  console.log(resultado);