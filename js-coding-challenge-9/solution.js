function convertToTime(num) {
  let hours = Math.floor(num / 60);
  num = num % 60;
  return hours + "hour(s) and" + num + "minute(s)";
}

console.log(convertToTime(71));
console.log(convertToTime(450));
console.log(convertToTime(1441));
