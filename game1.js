let secretNumber = Math.trunc(Math.random() * 20 + 1);
console.log(secretNumber);
let score = 20;
document.querySelector(".check").addEventListener("click", () => {
  const guessNumber = Number(document.querySelector(".guess").value);
  if (guessNumber === secretNumber) {
    document.querySelector(".message").textContent = "🎉 Correct Number";
    document.querySelector("body").style.backgroundColor = "green";
    document.querySelector(".numbers").textContent = secretNumber;
    document.querySelector(".highscore").textContent = score;
  }
  if (guessNumber !== secretNumber) {
    document.querySelector(".message").textContent =
      guessNumber > secretNumber ? "📉 Too High" : "📈 Too Low";
    score--;
    document.querySelector(".score").textContent = score;
  }
});

document.querySelector(".again").addEventListener("click", () => {
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".numbers").textContent = "?";
  document.querySelector(".score").textContent = score = "20";
});
