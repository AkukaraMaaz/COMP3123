// Write a JavaScript program to move last three character to the start of a given string. 
// The string length must be greater or equal to three.

function right(str) {
  if (str.length < 3) return str;
  return str.slice(-3) + str.slice(0, -3);
}

console.log(right("Python"));      
console.log(right("JavaScript"));  
console.log(right("Hi"));         
