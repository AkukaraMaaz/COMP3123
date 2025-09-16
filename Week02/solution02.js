function capitalize(str) {
  if (!str) return ''; // handle empty strings

  const [first, ...rest] = str; // destructure first letter and the rest
  return first.toUpperCase() + rest.join('').toLowerCase(); // capitalize first, lowercase rest
}

console.log(capitalize('fooBar'));  // Foobar
console.log(capitalize('nodeJs'));  // Nodejs