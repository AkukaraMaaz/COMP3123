// Corrected array declaration
var array = [1, 2, 3, 4];

// Use .reduce() to calculate sum
var calculateSum = array.reduce(function(acc, val) {
  return acc + val;
}, 0);

// Use .reduce() to calculate product
var calculateProduct = array.reduce(function(acc, val) {
  return acc * val;
}, 1);

console.log(calculateSum);     // Output: 10
console.log(calculateProduct); // Output: 24