function removeCharacter(str, charPos) {
  console.log(
    str.substring(0, charPos - 1) + str.substring(charPos, str.length)
  );
}

removeCharacter("Example", 0);
removeCharacter("Example", 3);
removeCharacter("Example", 5);
