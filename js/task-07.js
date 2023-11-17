const sizeValueInput = document.getElementById(`font-size-control`);
const sizeTextInput = document.getElementById(`text`);

sizeValueInput.addEventListener(`input`, changeSizeOnHandle);

function changeSizeOnHandle() {
    sizeTextInput.style.fontSize = `${sizeValueInput.value}px`;
}
