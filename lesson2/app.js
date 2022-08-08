const colors = ["red", "green", "#D04501", "rgba(7,39,75)"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

arrayLen = colors.length;

btn.addEventListener("click", function () {
  const randomNumber = colors[getRandomNumber()];
  document.body.style.backgroundColor = randomNumber;
  color.textContent = randomNumber;
});

function getRandomNumber() {
  return Math.floor(Math.random() * arrayLen);
}
