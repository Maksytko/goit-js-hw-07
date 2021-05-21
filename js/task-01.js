const categoriesItemsElArray = document.querySelectorAll('.item')
console.log(`В списке ${categoriesItemsElArray.length} категории`)

categoriesItemsElArray.forEach(item => {
    const itemHeaderEl = item.querySelector('h2')
    const itemsListElArray = item.querySelectorAll('li')
    console.log(`Категория: ${itemHeaderEl.textContent}`)
    console.log(`Количество элементов: ${itemsListElArray.length}`)
})
