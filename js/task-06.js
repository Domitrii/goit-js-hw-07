function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const box = document.querySelector('#boxes');
const createBtn = document.querySelector('[data-create]');
const deleteBtn = document.querySelector('[data-destroy]');
const inputSpace = document.querySelector('input');

function createBox(size) {
  const div = document.createElement('div');
  div.style.backgroundColor = getRandomHexColor();
  div.style.width = `${size}px`;
  div.style.height = `${size}px`;
  box.appendChild(div);
 
}

function createBoxes(amount) {
  for (let i = 1; i <= amount; i += 1) {
    const size = 30 + i * 10;
    createBox(size);
  }
}

createBtn.addEventListener('click', e => {
  const inputValue = parseInt(inputSpace.value, 10)
  if(inputSpace.value >= 1 && inputSpace.value <= 100){
    destroyBoxes();
    createBoxes(inputValue)
    inputSpace.value = ''
  }
  })

  function destroyBoxes(){
    box.innerHTML = ''
  }

  deleteBtn.addEventListener('click', e => box.innerHTML = '')