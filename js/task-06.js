const refs = {
  input: document.querySelector('#validation-input'),
};

const lengthValue = refs.input.dataset.length;

const onValidationValue = event => {
  refs.input.classList.add('invalid');
  event.target.value.length === +lengthValue && event.target.value.trim() !== ''
    ? refs.input.classList.replace('invalid', 'valid')
    : refs.input.classList.replace('valid', 'invalid');
};

refs.input.addEventListener('blur', onValidationValue);
