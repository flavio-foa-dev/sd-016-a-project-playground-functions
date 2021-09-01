let a = [9, 0, 3, 4, 5, 9, 7, 0, 9, 0, 7];

a.unshift('(');
a.splice(3,0,")")
a.splice(4,0," ")
a.splice(10,0,"-")


console.log(a.join(''))