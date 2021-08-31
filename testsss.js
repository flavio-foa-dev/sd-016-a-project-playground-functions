function highestCount(someArray) {

    function highestNumber(array) { // descobre o maior numero
      let max = array[0];
      for (let i = 0; i < array.length; i += 1) {
        if (array[i] >= max) {
          max = array[i];
        }
      }
      return max;
    }
  
    let max = highestNumber(someArray);
  
    let count = 0;
    
    for (let i = 0; i < someArray.length; i += 1) {
      if (someArray[i] == max) {
        count += 1;
      }
    }
  
    return count;
  
  }

  array = [-2, -2, -1];
  console.log(highestCount(array));