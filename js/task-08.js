const inputEl = document.querySelector('input')
const createBtnEl = document.querySelector('button[data-action="render"]')
const cleanBtnEl = document.querySelector('button[data-action="destroy"]')
const boxesDivEl = document.querySelector('#boxes')


const createBoxes = function (amount) {
    const arrayItems = []
    let nextDivWidth = 30
    let nextDivHeigth = 30
    for (let i = 1; i <= amount; i++) {
        const randomRgbColor = `${Math.floor(Math.random() * (255 - 0))}, ${Math.floor(Math.random() * (255 - 0))}, ${Math.floor(Math.random() * (255 - 0))}`
        
        const divEl = document.createElement('div')
        
        divEl.style.width = `${nextDivWidth}px`
        divEl.style.height = `${nextDivHeigth}px`
        divEl.style.backgroundColor = `rgb(${randomRgbColor})`
        
        nextDivWidth += 10
        nextDivHeigth += 10
        
        arrayItems.push(divEl)
    }

    boxesDivEl.append(...arrayItems)
}

createBtnEl.addEventListener('click', () => {
    const amount = inputEl.value
    createBoxes(amount)
})


cleanBtnEl.addEventListener('click', () => {
    boxesDivEl.innerHTML = ' '
})