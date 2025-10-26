function 
calculateFactorial() { 
const num = parseInt(document.getElementById("num").value); 
let fact = 1; for (let i = 1; i <= num; i++) { fact *= i; 
} 123 
document.getElementById("output").innerText = `Factorial of ${num} is ${fact}`; } 
function calculateFibonacci() { 
const num = parseInt(document.getElementById("num").value); 
let fib = [0, 1]; 
for (let i = 2; i < num; i++) { 
fib[i] = fib[i - 1] + fib[i - 2]; 
} 
document.getElementById("output").innerText = `Fibonacci series up to ${num} 
terms:\n${fib.slice(0, num).join(", ")}`; 
} function calculatePrimes() { const num = 
parseInt(document.getElementById("num").value); let primes = 
[]; for (let i = 2; i <= num; i++) { let isPrime = true; 
for (let j = 2; j <= Math.sqrt(i); j++) { 
if (i % j === 0) { isPrime = false; 
break; 
} 
} 
if (isPrime) primes.push(i); 
} 
document.getElementById("output").innerText = `Prime numbers up to 
${num}:\n${primes.join(", ")}`; 
} 
function checkPalindrome() { const num = 
document.getElementById("num").value; const reversed = 
num.split("").reverse().join(""); const message = num === reversed ? `${num} is a 
Palindrome` : `${num} is not a Palindrome`; 
document.getElementById("output").innerText = message; 
} 
