//- Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
// Вивести кожну змінну за допомогою: console.log
// - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person (Не об'єкт, просто за допомоги конкатенації)
// - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
//   let a = 100; let b = '100'; let c = true;
// Додаткове для тих хто цікавився prompt`oм
// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками. та вивести в консоль
let hello = 'hello';
let owu = 'owu';
let com = 'com';
let ua = 'ua';
let one = 1;
let ten = 10
let nine = -999
let hundred = 123
let dot = 3.14
let dot2 = 2.7
let sixteen = 16
let bool = true
let bool2 = false

console.log(hello)
console.log(owu)
console.log(com)
console.log(ua)
console.log(one)
console.log(ten)
console.log(nine)
console.log(hundred)
console.log(dot)
console.log(dot2)
console.log(sixteen)
console.log(bool)
console.log(bool2)

let firstName = 'Ostap';
let middleName = 'Orestovych';
let lastName = 'Yurchuk';
let person = `${firstName} ${middleName} ${lastName}`
console.log(person)

let a = 100;
let b = '100';
let c = true;
console.log(typeof (a))
console.log(typeof (b))
console.log(typeof (c))

let name = prompt("Name: ")
let midName = prompt("Middle name: ")
let lName = prompt("Last name: ")
console.log(name)
console.log(midName)
console.log(lName)
