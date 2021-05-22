const counterValue = document.querySelector('#value')
const decrementButtonEl = document.querySelector('#counter > button:nth-child(1)')
const incrementButtonEl = document.querySelector('#counter > button:nth-child(3)')

let currentNumber = 0
const onDecrementBtnClick = function () {
    currentNumber -= 1
    counterValue.textContent = currentNumber

}

const onIncrementBtnClick = function () {
    currentNumber += 1
    counterValue.textContent = currentNumber
}

decrementButtonEl.addEventListener('click', onDecrementBtnClick)
incrementButtonEl.addEventListener('click', onIncrementBtnClick)