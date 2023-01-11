function removeDuplicateCharacters(str) {
  let arr_char = str.split("");
  let results_arr = [];
  for (let i = 0; i < arr_char.length; i++) {
    if (str.indexOf(arr_char[i]) === str.lastIndexOf(arr_char[i]))
      results_arr.push(arr_char[i]);
  }
  return results_arr.join("");
}

console.log(removeDuplicateCharacters("abcdabc"));
console.log(removeDuplicateCharacters("python"));
console.log(removeDuplicateCharacters("abcabc"));
console.log(removeDuplicateCharacters("1365451"));
