const inputEl = document.querySelector('#validation-input')

inputEl.addEventListener('blur', () => {
    const dataLengthAtrNumber = Number.parseInt(inputEl.dataset.length)
    if (inputEl.value.length < dataLengthAtrNumber || inputEl.value.length > dataLengthAtrNumber) {
        inputEl.classList.remove('valid')
        inputEl.classList.add('invalid')
    } else {
        inputEl.classList.remove('invalid')
        inputEl.classList.add('valid')
    }
})
