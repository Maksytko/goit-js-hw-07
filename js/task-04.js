const counterValue = document.querySelector('#value')
const decrementButtonEl = document.querySelector('#counter > button:nth-child(1)')
const incrementButtonEl = document.querySelector('#counter > button:nth-child(3)')

const onDecrementBtnClick = function () {
    counterValue.textContent = Number.parseInt(counterValue.textContent) - 1
}

const onIncrementBtnClick = function () {
    counterValue.textContent = Number.parseInt(counterValue.textContent) + 1
}

decrementButtonEl.addEventListener('click', onDecrementBtnClick)
incrementButtonEl.addEventListener('click', onIncrementBtnClick)