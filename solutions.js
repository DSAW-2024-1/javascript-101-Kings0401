// Sum of Two Numbers
function sum(a, b) {
  // Add your code here
  if(typeof a !== "number" || typeof b !== "number"){
    console.log("Los datos de entrada no son adecuados");
    }
    else{
    return a+b;
    }
}

// Factorial of a Number
function factorial(n) {
  // Add your code here
  if (numero === 0 || numero === 1)
    return 1;
  for (var i = numero - 1; i >= 1; i--) {
    numero *= i;
  }
  return numero;
}

// Find the Largest Number
function findLargest(arr) {
  // Add your code here
}

// Count Vowels in a String
function countVowels(str) {
  // Add your code here
}

// Check if a Number is Prime
function isPrime(n) {
  // Add your code here
}

module.exports = {
  sum,
  factorial,
  findLargest,
  countVowels,
  isPrime,
};
