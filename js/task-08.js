const form = document.querySelector(".login-form");

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value && password.value !== "") {
    const user = {
      email: email.value,
      password: password.value,
    };

    console.log(user);
  } else {
    alert("Все поля должны быть заполнены!");
  }
  event.currentTarget.reset();
}
