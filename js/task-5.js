function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const bodyColor = document.querySelector("body");
const colorName = document.querySelector(".color")


document.querySelector(".change-color").addEventListener("click", event => {
  const random = getRandomHexColor()
  bodyColor.style.backgroundColor = random;
  colorName.textContent = random;
})