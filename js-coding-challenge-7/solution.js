function checkSameLastDigit(p, q, r) {
  return p % 10 === q % 10 || p % 10 === r % 10 || q % 10 === r % 10;
}

console.log(checkSameLastDigit("22", "32", "42"));
console.log(checkSameLastDigit("102", "302", "2"));
console.log(checkSameLastDigit("20", "22", "45"));
