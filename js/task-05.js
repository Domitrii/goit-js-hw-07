function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const colorBtn = document.querySelector(".change-color");
const bodyJs = document.querySelector('body')
const colorName = document.querySelector('.color')

colorBtn.addEventListener('click', event => {
  const randomColor = getRandomHexColor()
  bodyJs.style.backgroundColor = randomColor;

  colorName.textContent = randomColor
})