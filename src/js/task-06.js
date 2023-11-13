const validationInput = document.getElementById('validation-input');
const dataLength = parseInt(validationInput.getAttribute('data-length'));

  validationInput.addEventListener('blur', validateInput);

  function validateInput() {
    const inputValue = validationInput.value.length;

    
    if (inputValue === dataLength) {
      validationInput.classList.remove('invalid');
      validationInput.classList.add('valid');
    } else {
      validationInput.classList.remove('valid');
      validationInput.classList.add('invalid');
    }
  }