// Нам нужно найти элемент со значением 7, и мы предполагаем, что он находится ближе к концу массива.
const arr = [0, 1, 2, 3, 7];

// Старый способ
const res = arr.find(el => {
  console.log('Привет');
  return el == 7;
})

// Новый способ

const res = arr.findLast(el => {
  console.log('Привет');
  return el == 7;
})


