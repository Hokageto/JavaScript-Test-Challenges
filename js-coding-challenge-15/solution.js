function isPrime(n) {
for (let i = 2; i < n; i++) {
    if (n % i == 0) {
        return false;
    }
}
return true;
}

function sortPrimeNumbers(n) {
    const primeNum = [];
    for (let i = 2; i <= n; i++) {
        if (!isPrime(i))
         continue;
        primeNum.push(i);
        }
    return primeNum.join(',');
}

// function sortPrimeNumbers(num) {

//     const prime_num1 = [],
//         prime_num2 = [];
//     for (let i = 0; i <= num; i++) {
//       prime_num2.push(true);
//     }
//     for (let i = 2; i <= num; i++) {
//       if (prime_num2[i]) {
//         prime_num1.push(i);
//         for (let j = 1; i * j <= num; j++) {
//           prime_num2[i * j] = false;
//         }
//       }
//     }
  
//     return prime_num1;
//   }

console.log(sortPrimeNumbers(5));
console.log(sortPrimeNumbers(11));
console.log(sortPrimeNumbers(19));


// for (let i = 2; i <= num/2; i++){
//     if (num % i === 0){
//         return false;
//     }
// };
// return true;

