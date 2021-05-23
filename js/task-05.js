const refs = {
  input: document.querySelector('#name-input'),
  name: document.querySelector('#name-output'),
};

const onInputEntering = event => {
  refs.name.textContent =
    event.currentTarget.value.trim() !== ''
      ? event.currentTarget.value
      : 'незнакомец';
};

refs.input.addEventListener('input', onInputEntering);
