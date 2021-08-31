function highestCount(numbers) {
    count = 1;
    num = numbers[0];
    for (index = 1; index <= numbers.length-1; index += 1) {
      if (num > numbers[index]) {
          num = num;
      } else if (num === (numbers[index])) {
          count += 1;
        } else {
            num  = numbers[index]
            count = 1;
          }
    }
    console.log(count)
  }

  highestCount([1, 9, 2, 3, 9, 5, 7])

