// Desafio 10
function techList() {
  // seu código aqui
}

// Desafio 11
function generatePhoneNumber(array) {
  // seu código aqui
  let contador = 0;
  if (array.length === 11) {
    for (let i = 0; i < array.length; i += 1) {
    if (array[i] < 0 || array[i] > 9) {
    return 'não é possível gerar um número de telefone com esses valores';
      } else {
    for (let I = 0; I < array.length; I++) {
      if (array[i] === array[I]) {
            contador++;
          }
        } 
      if (contador >= 3) {
    return 'não é possível gerar um número de telefone com esses valores';
      }
       contador = 0;
      }
    }
    return '(' + array[0] + array[1] + ') ' + array[2] + array[3] + array[4] + array[5] + array[6] + '-' + array[7] + array[8] + array[9] + array[10];
  } else {
    return 'Array com tamanho incorreto.'
  }
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  // seu código aqui
  Math.abs(lineA,lineB,lineC);
   if   ( ((lineA < lineB+lineC)&&(lineA>lineB-lineC))
        &&((lineB < lineA+lineC)&&(lineB>lineA-lineC))
        &&((lineC < lineB+lineA)&&(lineA>lineB-lineC)) )
    
        { return true;}
          
  else {return false;}
    }



// Desafio 13
function hydrate(string) {
  // seu código aqui
  let string2 = string.split('');
  let contador = 0;
  let num = 0;
  for(let i=0;i <= string2.length;i++){
    if(string2[i] === "1")
    {num =1;}
      if(string2[i] === "2")
      {num =2;}
        if(string2[i] === "3")
        {num =3;}
          if(string2[i] === "4")
          {num=4;}
            if(string2[i] === "5")
            {num =5;}
              if(string2[i] === "6")
              {num =6;}
                if(string2[i] === "7")
                {num =7;}
                  if(string2[i] === "8")
                  {num =8;}
                    if(string2[i] === "9")
                    {num =9;}
                    
                    contador=num+contador;
                    num =0;
      
    }
      if(contador>1){ return contador+' copos de água';}
      else {return contador+' copo de água'}
  }

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
