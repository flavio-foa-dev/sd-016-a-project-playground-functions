function generatePhoneNumber(numbers) {
    let ind = 0;
    let count = 0;
    if (numbers.length === 11) {
        for (index = 0; index < 11; index += 1) {
            if (count < 3) {
                count = 0;
            } else if (count > 2) {
                console.log("não é possível gerar um número de telefone com esses valores");
                break
            }
            if (numbers[index] > 9 || numbers[index] < 0) {
                console.log("não é possível gerar um número de telefone com esses valores");
            } for (mindex = 0; mindex < 11; mindex += 1) {
                if (numbers[index] === numbers[mindex]) {
                    count += 1;
                }

            }
        } 
    } else if (numbers.length < 11 || numbers.length > 11) {
        console.log("Array com tamanho incorreto.");
    }
numbers.unshift('(');
numbers.splice(3,0,")")
numbers.splice(4,0," ")
numbers.splice(10,0,"-")

console.log(numbers.join(''))
}



    generatePhoneNumber([0, 7, 3, 4, 5, 1, 4, 9, 1, 0, 7]);