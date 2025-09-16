// Corrected colors array syntax
const colors = ['red', 'green', 'blue'];

// Capitalize function (from Exercise 2)
function capitalize(str) {
  const [first, ...rest] = str;
  return first.toUpperCase() + rest.join('').toLowerCase();
}

// Use .map() to capitalize each color
const capitalizedColors = colors.map(capitalize);

console.log(capitalizedColors);
// Output: ['Red', 'Green', 'Blue']