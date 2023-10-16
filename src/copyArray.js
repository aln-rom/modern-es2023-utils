// #1 - переворачиваем массив без изменений исходного
const fruits = ["apple", "orange", "banana"]

// Старый метод reverse()
const result = fruits.reverse()
console.log(result) // ['banana', 'orange', 'apple']
console.log(fruits) // ['banana', 'orange', 'apple']
// изменён исходный массиы

// Новый метод
const result = fruits.toReversed()
console.log(result) // ['banana', 'orange', 'apple']
console.log(fruits)// ["apple", "orange", "banana"]
// исходный массив остался без изменений



// #2 - сортируем массив без изменений исходного
const list = [1, 5, 6, 3, 7, 8, 3, 7]
// Старый метод sort()
const result = list.sort()
console.log(result) // [1, 3, 3, 5, 6, 7, 7, 8]
console.log(list) // [1, 3, 3, 5, 6, 7, 7, 8]

// Новый метод toSorted()
const result = list.toSorted()
console.log(result) // [1, 3, 3, 5, 6, 7, 7, 8]
console.log(list) // [1, 5, 6, 3, 7, 8, 3, 7]
// исходный массив остался без изменений



// #3 - вставить новый элемент массива без изменения исходного
onst months = ["Feb", "Mar", "Apr", "May"]

// Старый метод splice()
months.splice(0, 0, "Jan")
console.log(months) //  ['Jan', 'Feb', 'Mar', 'Apr', 'May']

// Новый метод toSpliced()
const updatedMonths = months.toSpliced(0, 0, "Jan")
console.log(updatedMonths) // ['Jan', 'Feb', 'Mar', 'Apr', 'May']
console.log(months) // ['Feb', 'Mar', 'Apr', 'May']



// #4 - поменять элемент массива без изменения исходного
// Старый способ
const favorites = ["Dogs", "Cats"]
favorites[0] = "Lions"

console.log(favorites)// (2) ['Lions', 'Cats']

// Новый способ
const favorites = ["Dogs", "Cats"]
const result = favorites.with(0, "Lions")

console.log(result) // ['Lions', 'Cats']
console.log(favorites) // ["Dogs", "Cats"]
