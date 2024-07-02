let secretNumber = Math.trunc(Math.random() * 20 + 1);
console.log(secretNumber);
let score = 20;
document.querySelector(".check").addEventListener("click", () => {
  const guessNumber = Number(document.querySelector(".guess").value);
  if (guessNumber === secretNumber) {
    document.querySelector(".message").textContent = "🎉 Correct Number";
    document.querySelector("body").style.backgroundColor = "green";
    document.querySelector(".numbers").textContent = secretNumber;
  }
  if (guessNumber !== secretNumber) {
    document.querySelector(".message").textContent =
      guessNumber > secretNumber ? "📉 Too High" : "📈 Too Low";
    score--;
    document.querySelector(".score").textContent = score;
  }
});
