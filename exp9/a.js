function 
displayFactorial() { 
 const num = parseInt(document.getElementById("num").value); 
let fact = 1; for(let i = 1; i <= num; i++) { fact *= i; 
 } 
 document.getElementById("result").innerText = `Factorial of ${num} is ${fact}`; 
} 
function displayFibonacci() { const num = 
parseInt(document.getElementById("num").value); let fib = [0, 
1]; for(let i = 2; i < num; i++) { fib[i] = fib[i-1] + fib[i-2]; 
 } 
120
 document.getElementById("result").innerText = `Fibonacci series up to ${num} 
terms:\n${fib.slice(0,num).join(", ")}`; 
} function displayPrimes() { const num = 
parseInt(document.getElementById("num").value); let primes = 
[]; for(let i = 2; i <= num; i++) {let isPrime = true; for(let j 
= 2; j <= Math.sqrt(i); j++) { if(i % j === 0) { isPrime 
= false; break; 
 }} 
 if(isPrime) primes.push(i); 
 } 
 document.getElementById("result").innerText = `Prime numbers up to 
${num}:\n${primes.join(", ")}`; 
} 
function checkPalindrome() { 
 const num = document.getElementById("num").value; const reversed = 
num.split("").reverse().join(""); const message = num === reversed ? `${num} is a 
Palindrome` : `${num} is not a Palindrome`; 
document.getElementById("result").innerText = message; 
}