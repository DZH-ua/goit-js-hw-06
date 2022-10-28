function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  generateColorBtn: document.querySelector(".change-color"),
  bodyEl: document.querySelector("body"),
  spanEl: document.querySelector(".color"),
};

const onButtonGenerateClick = () => {
  const newColor = getRandomHexColor();
  refs.bodyEl.style.backgroundColor = `${newColor}`;
  refs.spanEl.textContent = `${newColor}`;
};

refs.generateColorBtn.addEventListener("click", onButtonGenerateClick);
