// Some Exercise
// Instructions: Create an array of at least five numbers. Write code to check if some of the numbers are even.

const numbers = [1,3,7,9,10];
const hasEven = numbers.some(function (num) {
 return num % 2 === 0;
});

console.log(hasEven);