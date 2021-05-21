const inputEl = document.querySelector('#font-size-control')
const textEl = document.querySelector('#text')

inputEl.addEventListener('input', (el) => {
    textEl.style.fontSize = `${el.currentTarget.value}px`
})
