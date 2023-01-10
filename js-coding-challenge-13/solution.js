function checkAngleType(angle) {
  if (angle >= 0.1 && angle <= 89.9) {
    return "Acute angle";
  }
  if (angle == 90) {
    return "Right Angle";
  }
  if (angle >= 90.1 && angle <= 179.9) {
    return "Obtuse angle";
  }
  if (angle == 180) {
    return "Straight angle";
  }
}

console.log(checkAngleType(47));
console.log(checkAngleType(90));
console.log(checkAngleType(145));
console.log(checkAngleType(180));
