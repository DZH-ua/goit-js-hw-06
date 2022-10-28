function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const createBtn = document.querySelector("[data-create]");
const destroytBtn = document.querySelector("[data-destroy]");
const boxEl = document.querySelector("#boxes");

function createElement() {
  let amount = document.querySelector("input").value;
  console.log(amount);
  createBoxes(amount);
}

function createBoxes(amount) {
  console.log("Создаем");

  for (let i = 1; i <= amount; i += 1) {
    const newColor = getRandomHexColor();
    const newDivEl = document.createElement("div");
    console.log(newDivEl);
    newDivEl.style.width = `${i * 10 + 20}px`;
    newDivEl.style.height = `${i * 10 + 20}px`;
    newDivEl.style.backgroundColor = `${newColor}`;
    boxEl.appendChild(newDivEl);
  }
}

function destroytBoxes() {
  const newBoxes = document.querySelector("#boxes");

  while (newBoxes.firstChild) {
    newBoxes.removeChild(newBoxes.firstChild);
  }
}

createBtn.addEventListener("click", createElement);
destroytBtn.addEventListener("click", destroytBoxes);
