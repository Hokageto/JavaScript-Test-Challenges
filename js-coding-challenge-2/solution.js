// Fahrenheit to Celsius
////////////////////////

// function fToC(fahrenheit) {
//   let fTemp = fahrenheit;
//   let fToCel = ((fTemp - 32) * 5) / 9;
//   let message = fTemp + "fahrenheit is " + fToCel + "celsius";
//   console.log(message);
// }
// fToC(100);

// Celsius to Fahrenheit
////////////////////////

function cToF(celsius) {
  let cTemp = celsius;

  let cToFahr = (cTemp * 9) / 5 + 32;

  let message = cTemp + " celsius is " + cToFahr + " fahrenheit";

  console.log(message);
}
cToF(1);
