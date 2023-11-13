let counterValue = 0

const decrementButton = document.querySelector(`[data-action="decrement"]`);
const incrementButton = document.querySelector(`[data-action="increment"]`);
const valueDef = document.getElementById(`value`);

decrementButton.addEventListener(`click`, () => {
  counterValue -= 1;
  updateValueDef();
});

incrementButton.addEventListener(`click`, () => {
  counterValue += 1;
  updateValueDef();
})

function updateValueDef() {
  valueDef.textContent = counterValue;
}

