function sumDigitsFromString(str) {
  let sum = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] >= "0" && str[i] <= "9") {
      sum += parseInt(str[i]);
    }
  }
  return sum;
}

console.log(sumDigitsFromString("abcd12efg9"));
console.log(sumDigitsFromString("wh47s up dud3?"));
