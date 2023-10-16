// Старый способ
let person = { name: "John" };

let map = new Map();
map.set(person, "...");
person = null; // перезаписываем ссылку на объект

// объект person сохранён внутри объекта `Map`,
// он доступен через map.keys()

// Новый способ
let person = { name: "John" };

let weakMap = new WeakMap();
weakMap.set(person, "...");
person = null; // перезаписываем ссылку на объект

// объект person удалён из памяти!
