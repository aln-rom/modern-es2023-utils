// Нужно найти индекс последнего элемента, у которого значение буквы равно 'c'.
const arr = [
  { letter: 'a', integer: 1 },
  { letter: 'c', integer: 2 },
  { letter: 'c', integer: 3 },
  { letter: 'd', integer: 4 },
]

// Нерабочий способ со старым методом
arr.findIndex(el => el.letter === 'c') // 1

// Новый способ
arr.findLastIndex(el => el.letter === 'c') // 2

