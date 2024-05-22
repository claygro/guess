let num = Math.floor(Math.random() * 100) + 1;
function guess() {
  let guessedNum = parseInt(document.getElementById("holder").value);
  if (isNaN(guessedNum)) {
    document.getElementById("any").innerHTML = "guess a number";
  } else if (guessedNum < num) {
    document.getElementById("any").innerHTML = "think higher";
  } else if (guessedNum > num) {
    document.getElementById("any").innerHTML = "think lower";
  } else if (guessedNum === num) {
    document.getElementById("any").innerHTML = "you got it";
    num = Math.floor(Math.random() * 100) + 1;
  }
}
guess("hello world");
