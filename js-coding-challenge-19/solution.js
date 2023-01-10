function getMaxEvenNumberFromArray(arr) {
  return arr
    .filter((n) => n % 2 === 0)
    .reduce((largest, num) => {
      return num > largest ? num : largest;
    }, -Infinity);
}

console.log(getMaxEvenNumberFromArray([20, 40, 200]));
console.log(getMaxEvenNumberFromArray([20, 40, 200, 301]));
