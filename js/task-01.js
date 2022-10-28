const totalCategories = document.querySelector("#categories");
console.log(`Number of categories: ${totalCategories.children.length}`);

const totalItems = document.querySelectorAll(".item");

for (const items of totalItems) {
  console.log(`Category: ${items.firstElementChild.textContent}
Element: ${items.lastElementChild.children.length}`);
}
