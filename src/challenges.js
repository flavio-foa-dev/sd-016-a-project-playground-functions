// Desafio 1
function compareTrue(bolean1,bolean2) {
  if(bolean1==true && bolean2==true){
    return true
  }
  
  else{return false}
  // seu código aqui
}

// Desafio 2
function calcArea(base,altura) {
  // seu código aqui
  area=base*altura/2
  return area
}

// Desafio 3
function splitSentence(str) {
  // seu código aqui
  let armazenaIndex=0;
  array=[];
  let addLetraPlavra1="";
  for(contTotal=0;contTotal<=str.length;contTotal+=1){
    for(cont=armazenaIndex;cont<str.length;cont+=1){
      if(str[cont]!=" "){
        addLetraPlavra1+=str[cont]
        array[contTotal]=addLetraPlavra1
        armazenaIndex+=1;
      }
      else{
        armazenaIndex+=1;
        break;
        
      }
      
      
    }
    addLetraPlavra1=""
}

  
  return array
}





// Desafio 4
function concatName(array) {
  // seu código aqui
  
  return array[array.length-1]+", "+array[0]

  
}


// Desafio 5
function footballPoints(wins,ties) {
  return wins*3+ties
  // seu código aqui
}

// Desafio 6
function highestCount(array_maior_numero) {
  // seu código aqui
  let armazena_repeticoes=0; 
  aux=array_maior_numero.slice();
  for(cont=0;cont<array_maior_numero.length-1;cont+=1){
    if(array_maior_numero[cont]>array_maior_numero[cont+1]){
      array_maior_numero[cont+1]=array_maior_numero[cont];
    }
  }
 

  

  for(cont2=0;cont2<array_maior_numero.length;cont2+=1){
       
    if(array_maior_numero[cont]==aux[cont2]){
      armazena_repeticoes+=1;
      
      
    }
  }
  return armazena_repeticoes;
}





// Desafio 7
function catAndMouse(mouse,cat1,cat2) {
  // seu código aqui
  let mouse_transform_positivo_cat1=mouse-cat1;
  let mouse_transform_positivo_cat2=mouse-cat2;

  if(mouse_transform_positivo_cat1<0){
    mouse_transform_positivo_cat1*=-1
  }
  if(mouse_transform_positivo_cat2<0){
    mouse_transform_positivo_cat2*=-1
  }


  if(mouse_transform_positivo_cat1<mouse_transform_positivo_cat2){
    return "cat1"
  }
  else if(mouse_transform_positivo_cat1>mouse_transform_positivo_cat2){
    return "cat2"
  }
  else{
    return "os gatos trombam e o rato foge"
  }
}
// Desafio 8
function fizzBuzz(array) {
  // seu código aqui
  array_add=[]
  for(cont=0;cont<array.length;cont+=1){
    if(array[cont]%3==0 && array[cont]%5!=0){
      array_add.push("fizz");  
    }

    else if(array[cont]%3!=0 && array[cont]%5==0){  
      array_add.push("buzz")
    }
    else if(array[cont]%3==0 && array[cont]%5==0){
      array_add.push("fizzBuzz")
    }

    else if(array[cont]%3!=0 && array[cont]%5!=0){
      array_add.push("bug!")
    }
    
  }
  return array_add
}
console.log(fizzBuzz([2, 15, 7, 9, 45]))

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
}
