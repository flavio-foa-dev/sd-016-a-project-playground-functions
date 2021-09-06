// Desafio 10
function techList(list, name) {
  let newArray = [];
  let ordlist = list.sort();
  if (list.length === 0) {
    return 'Vazio!';
  }
  for (let index in ordlist) {
    newArray.push({ tech: ordlist[index], name: name });
  }
  return newArray;
}

console.log(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Max'));

// Desafio 11
function generatePhoneNumber(numero) {
  let test1=0;
  let test2=0;
  let count1=0;
  let num = numero.join('');
  if (numero.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
 for (let i = 0; i < numero.length; i += 1) {
    if (numero[i] > 9 || numero[i] < 0) {
      test1=1;
    }
  }
  count1 = 0;
  for (index = 0; index < numero.length; index += 1) {
    if (count1>=3) {
      break;
    }
    count1=0;
    for (let i = 0; i < numero.length; i += 1) {
      if (numero[index] === numero[i]) {
        count1 += 1;
      }
    }
  }
  if ( count1 >= 3 ) {
    test2=1;
  }
  // console.log(count1,test2,test1);
  if ( test2 == 1 || test1 == 1 ) {
    return 'não é possível gerar um número de telefone com esses valores';
  }

  return `(${num.slice(0, 2)}) ${num.slice(2, 7)}-${num.slice(7, 11)}`;
}

console.log(generatePhoneNumber([9, 2, 3, 0, 5, 6, 7, 8, 7, 0]));
console.log(generatePhoneNumber([3, -2, 1, 9, -5, 0, 7, 4, 0, 6, 1]));
console.log(generatePhoneNumber([1, 2, -3, 4, 0, 6, 7, 8, 9, 9, 0]));
console.log(generatePhoneNumber([-1, 2, 4, -4, 5, 6, 9, -8, 7, 3, 3]));

/*[1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1])

[9, 2, 3, 0, 5, -6, 7, 8, -7, 0, 1])).toBe('não é possível gerar um número de telefone com esses valores');
    expect(challenges.generatePhoneNumber([3, -2, 1, 9, -5, 0, 7, 4, 0, 6, 1])).toBe('não é possível gerar um número de telefone com esses valores');
    expect(challenges.generatePhoneNumber([1, 2, -3, 4, 0, 6, 7, 8, 9, 9, 0])).toBe('não é possível gerar um número de telefone com esses valores');
    expect(challenges.generatePhoneNumber([-1, 2, 4, -4, 5, 6, 9, -8, 7, 3, 3])
let textoAjustado;
    if(isCelular) {
        const parte1 = textoAtual.slice(0,5);
        const parte2 = textoAtual.slice(5,9);
        textoAjustado = `${parte1}-${parte2}`        
    } else {
        const parte1 = textoAtual.slice(0,4);
        const parte2 = textoAtual.slice(4,8);
        textoAjustado = `${parte1}-${parte2}`
    }

    telefone.value = textoAjustado;
    test
}*/


// Desafio 12
function triangleCheck(lado1,lado2,lado3) {

  if (lado2-lado3 < lado1 && lado1 < lado2+lado3){
    if (lado1-lado3 < lado2 && lado2 < lado1+lado3){
      if (lado1-lado2 < lado3 && lado3 < lado1+lado2){
        return true
      } 
      else {
        return false
      }
    }
    else {
      return false
    }
  }
  else {
    return false
  }
}

  console.log(triangleCheck(10, 13, 2));
  console.log(triangleCheck(12, 17, 4));
  console.log(triangleCheck(5, 10, 3));
  console.log(triangleCheck(10, 14, 8));
  console.log(triangleCheck(2, 3, 4));
  console.log(triangleCheck(16, 20, 30));


// Desafio 13
function hydrate(bar) {
  /*
  var regex = /\d+/g;
  var string = "you can enter maximum 500 choices";
  var matches = string.match(regex);  // creates array from matches

  document.write(matches);

  function convertStoI() {
        var a = "100";
        var b = parseInt(a);
        document.write("Integer value is" + b);
        var d = parseInt("3 11 43");
        document.write("</br>");
  
        document.write('Integer value is ' + d);
  

  stackoverflow god
 */
    let regex = /\d+/g;
    var matches = bar.match(regex)
    let count = 0;
    let count2 = 0;

    for (i = 0; i < matches.length; i += 1) {
     
      count += parseInt(matches[i]);
    }

    if (count == 1) {
      return '1 copo de água';
    } else {
      return count + ' ' + 'copos de água';
    }
}


module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
