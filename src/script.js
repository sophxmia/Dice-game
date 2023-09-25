let firstDiceCount = Math.floor(Math.random() * 6) + 1;
let secondDiceCount = Math.floor(Math.random() * 6) + 1;

let firstDiceElement = document.querySelectorAll("img")[0];
let secondDiceElement = document.querySelectorAll("img")[1];

firstDiceElement.setAttribute("src", `images/dice${firstDiceCount}.png`);
secondDiceElement.setAttribute("src", `images/dice${secondDiceCount}.png`);

let headingTitle = document.querySelector("h1");

if (firstDiceCount > secondDiceCount) {
  headingTitle.innerHTML = "The first player wins 🏆";
} else if (secondDiceCount > firstDiceCount) {
  headingTitle.innerHTML = "The second player wins 🏆";
} else {
  headingTitle.innerHTML = "Dead Heat 💪";
}
