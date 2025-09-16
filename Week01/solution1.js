// Write a JavaScript program to capitalize the first letter of each word of a given string.

function capitalizeWords(sentence) {
  return sentence
    .split(" ") 
    .map(word => word.charAt(0).toUpperCase() + word.slice(1)) 
    .join(" "); 
}

const input = "the quick brown fox";
const output = capitalizeWords(input);
console.log(output); 
