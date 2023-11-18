const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.getElementById("ingredients");
const newingredientsList = [];

ingredients.forEach(ingredient => {
  const listItem = document.createElement("li");
  listItem.textContent = ingredient;
  listItem.classList.add("item");
  newingredientsList.push(listItem);
});

ingredientsList.append(...newingredientsList);

console.log(ingredientsList);
console.dir(ingredientsList);

