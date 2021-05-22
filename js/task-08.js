const inputEl = document.querySelector('input')
const createBtnEl = document.querySelector('button[data-action="render"]')
const cleanBtnEl = document.querySelector('button[data-action="destroy"]')
const boxesDivEl = document.querySelector('#boxes')

let nextDivWidth = 30
let nextDivHeigth = 30

const createBoxes = function (amount) {
    const arrayItems = []
    arrayItems.length = amount
    arrayItems.fill('div')

    arrayItems.forEach(item => {
        const randomRgbColor = `${Math.floor(Math.random() * (255))}, ${Math.floor(Math.random() * (255))}, ${Math.floor(Math.random() * (255))}`

        const divEl = document.createElement('div')

        divEl.style.width = `${nextDivWidth}px`
        divEl.style.height = `${nextDivHeigth}px`
        divEl.style.backgroundColor = `rgb(${randomRgbColor})`
        
        nextDivWidth += 10
        nextDivHeigth += 10

        arrayItems.splice(arrayItems.indexOf(item), 1, divEl)
    })

    boxesDivEl.append(...arrayItems)
}

createBtnEl.addEventListener('click', () => {
    const amount = inputEl.value
    createBoxes(amount)
})


cleanBtnEl.addEventListener('click', () => {
    nextDivWidth = 30
    nextDivHeigth = 30
    boxesDivEl.innerHTML = ' '
})
