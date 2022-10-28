const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsContainerEl = document.querySelector("#ingredients");

const elements = ingredients.map((ingredient) => {
  const ingridientEl = document.createElement("li");
  ingridientEl.classList.add("item");
  ingridientEl.textContent = ingredient;
  return ingridientEl;
});

ingredientsContainerEl.append(...elements);
