const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");

const onInputNameEnter = (element) => {
  nameOutput.textContent = "Anonymous";
  if (element.currentTarget.value !== "")
    nameOutput.textContent = element.currentTarget.value;
};

nameInput.addEventListener("input", onInputNameEnter);
