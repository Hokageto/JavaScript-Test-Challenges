function checkIfSentenceIsCorrect(str) {
  if (str.charAt(0) === str.charAt(0).toUpperCase() && str.endsWith(".")) {
    return true;
  } else {
    return false;
  }
}

console.log(
  checkIfSentenceIsCorrect(
    "This tool will help you write better English and efficiently corrects texts."
  )
);

console.log(
  checkIfSentenceIsCorrect(
    "This tool will help you write better English and efficiently corrects texts"
  )
);

console.log(
  checkIfSentenceIsCorrect(
    "this tool will help you write better English and efficiently corrects texts."
  )
);
