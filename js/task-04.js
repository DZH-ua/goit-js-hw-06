const decrementBtn = document.querySelector("[data-action='decrement']");
const incrementBtn = document.querySelector("[data-action='increment']");
const valueEl = document.querySelector("#value");

let counterValue = 0;
const onDecrementButtonClick = () => {
  counterValue -= 1;
  valueEl.textContent = counterValue;
};

const onIncrementButtonClick = () => {
  counterValue += 1;
  valueEl.textContent = counterValue;
};

decrementBtn.addEventListener("click", onDecrementButtonClick);
incrementBtn.addEventListener("click", onIncrementButtonClick);
