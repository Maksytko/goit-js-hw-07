const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientsListEl = document.querySelector('#ingredients')
const arrayEl = []

ingredients.forEach(el => {
    const itemEl = document.createElement('li')
    itemEl.textContent = el
    arrayEl.push(itemEl)
})

ingredientsListEl.append(...arrayEl)