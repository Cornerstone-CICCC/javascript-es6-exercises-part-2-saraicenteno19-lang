// Sort Exercise
// Instructions: Create an array of at least five numbers in random order. Write the code to sort this array in ascending order.
 const numbers = [42, 5, 18, 1, 99];
 numbers.sort(function (a, b) {
    return a - b;

 });
 console.log(numbers);