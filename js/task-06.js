const nameInput = document.querySelector("#validation-input");

const onInputNameEnterBlur = (element) => {
  if (element.currentTarget.value.length === Number(nameInput.dataset.length)) {
    nameInput.classList.add("valid");
    nameInput.classList.remove("invalid");
  } else {
    nameInput.classList.add("invalid");
    nameInput.classList.remove("valid");
  }
};

nameInput.addEventListener("blur", onInputNameEnterBlur);
