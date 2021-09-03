function triangleCheck(lineA, lineB, lineC) {
 let absoluteAB = Math.abs(lineA - lineB)
 let absoluteAC = Math.abs(lineA - lineC)
 let absoluteBC = Math.abs(lineB - lineC)

 let sumAB = lineA + lineB
 let sumAC = lineA + lineC
 let sumBC = lineB + lineC

 if ((lineA < sumBC || lineB < sumAC || lineC < sumAB ) && (lineA > absoluteBC && lineB > absoluteAC && lineC > absoluteAB)){
   return true;
 }
 else{
   return false;
 }

}

console.log(triangleCheck(10, 14, 8))