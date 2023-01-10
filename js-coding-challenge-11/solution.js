function checkIfContainsOneOrThree(arrayOfNumbers) {
  if (arrayOfNumbers.includes(1) || arrayOfNumbers.includes(3)) {
    return true;
  } else {
    return false;
  }
}

console.log(checkIfContainsOneOrThree([1, 5]));
console.log(checkIfContainsOneOrThree([2, 3]));
console.log(checkIfContainsOneOrThree([7, 5]));
