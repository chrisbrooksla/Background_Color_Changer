const body = document.querySelector("body");
const button = document.querySelector("button");
const colors = [
  "Blue",
  "Green",
  "Black",
  "Red",
  "Purple",
  "Yellow",
  "Pink",
  "Brown",
  "White",
];

body.style.backgroundColor = "Red";

button.addEventListener("click", changeColors);

function changeColors() {
  const colorIndex = parseInt(Math.random() * colors.length);
  body.style.backgroundColor = colors[colorIndex];
}
