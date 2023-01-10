function sumAdjacentDifference(arrayOfNumbers) {
  let sum = 0;
  for (let i = 1; i < arrayOfNumbers.length; i++) {
    sum += Math.abs(arrayOfNumbers[i] - arrayOfNumbers[i - 1]);
  }
  return sum;
}

console.log(sumAdjacentDifference([1, 2, 3, 2, -5]));
