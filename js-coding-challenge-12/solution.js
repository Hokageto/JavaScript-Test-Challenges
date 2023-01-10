function swap(arrayOfNumbers) {
  [arrayOfNumbers[0], arrayOfNumbers[arrayOfNumbers.length - 1]] = [
    arrayOfNumbers[arrayOfNumbers.length - 1],
    arrayOfNumbers[0],
  ];
  return arrayOfNumbers;
}
console.log(swap([1, 2, 3, 4]));
console.log(swap([0, 2, 1]));
console.log(swap([3]));
