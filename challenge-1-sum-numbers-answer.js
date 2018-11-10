const sum = function(...numsToSum) {
  let sumOfNumbers = 0;

  numsToSum.forEach(function(number) {
    sumOfNumbers += number;
  });

  console.log(sumOfNumbers);
}



sum(1, 3);
//4

sum(10, 20, 5);
//35

sum(2, 5, 80, 1, 10, 12);
//110

