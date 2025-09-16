// Corrected array declaration
var values = [1, 60, 34, 30, 20, 5];

// Use .filter() to get values less than 20
var filterLessThan20 = values.filter(function(value) {
  return value < 20;
});

console.log(filterLessThan20);
// Output: [1, 5]