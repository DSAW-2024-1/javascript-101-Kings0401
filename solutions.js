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
  if(typeof n !== "number"){
    console.log("Los datos de entrada no son adecuados");
    }
  if (n === 0 || n === 1){
    return 1;
  }
  else{
    for (var i = n - 1; i >= 1; i--) {
      n *= i;
    }
    return n;
  }
}

// Find the Largest Number
function findLargest(arr) {
  // Add your code here
  if (!Array.isArray(arr) || arr.some(isNaN)) {
    console.log("Los datos de entrada no son adecuados");
    return;
  }

  return Math.max(...arr);
}

// Count Vowels in a String
function countVowels(str) {
  // Add your code here
  if (typeof str !== "string") {
    console.log("Los datos de entrada no son adecuados");
    return;
  }

  const vowels = "aeiouAEIOU";
  let count = 0;

  for (let char of str) {
    if (vowels.includes(char)) {
      count++;
    }
  }

  return count;
}

// Check if a Number is Prime
function isPrime(n) {
  // Add your code here
  if (typeof num !== "number") {
    console.log("Los datos de entrada no son adecuados");
    return;
  }

  if (num < 2) return false;

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }

  return true;
}

module.exports = {
  sum,
  factorial,
  findLargest,
  countVowels,
  isPrime,
};
