function checkIfLetterOccursMultipleTimes(str, char) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === char) {
      count++;
    }
  }
  if (count > 3) {
    return "Larger than 3";
  } else return count;
}

console.log(checkIfLetterOccursMultipleTimes("Python", "y"));
console.log(checkIfLetterOccursMultipleTimes("JavaScript", "a"));
console.log(checkIfLetterOccursMultipleTimes("Console", "o"));
console.log(checkIfLetterOccursMultipleTimes("Console", "C"));
console.log(checkIfLetterOccursMultipleTimes("Console", "e"));
console.log(checkIfLetterOccursMultipleTimes("JavaScript", "S"));
