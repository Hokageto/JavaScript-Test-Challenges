function sortPrimeNumbers(n) {
  if (n === 1) {
    return false;
  } else if (n === 2) {
    return true;
  } else {
    for (var x = 2; x < n; x++)
      if (n % x === 0) {
        return false;
      }

    return true;
  }
}
console.log(sortPrimeNumbers(5));
console.log(sortPrimeNumbers(11));
console.log(sortPrimeNumbers(19));
