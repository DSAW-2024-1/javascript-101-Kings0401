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
    return n===1;
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
