const rangeInputEl = document.querySelector("#font-size-control");
const contentSpanEl = document.querySelector("#text");

const onInputValueChangeFont = (element) => {
  const newFontSize = Number(element.currentTarget.value);
  contentSpanEl.style.fontSize = `${newFontSize}px`;
};

rangeInputEl.addEventListener("change", onInputValueChangeFont);
