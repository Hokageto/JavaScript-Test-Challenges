function checkLongestStringInArray(arrayOfStrings) {
  return arrayOfStrings.reduce((longest, str) => {
    return str.length > longest.length ? str : longest;
  }, "");
}
console.log(checkLongestStringInArray(["ab", "a", "abcd"]));
console.log(checkLongestStringInArray(["ab", "ab", "ab"]));
