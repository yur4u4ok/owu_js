// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
function rectangle(a, b){
    return a*b;
}
// - створити функцію яка обчислює та повертає площу кола з радіусом r - pi*r**2
let rect = (a, b) => a * b;
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r - 2pi*r**2 + 2pi*r*h
let cylinder = (h, r) => 2*3.14*(r**2) + 2*3.14*r*h;
// - створити функцію яка приймає масив та виводить кожен його елемент
function arr(arr){
    for(let i of arr){
        console.log(i);
    }
}
// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
function parahraf(text){
    document.write(`<p>${text}</p>`);
}
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
function ulli(text_li){
    document.write(`<ul>`);
    for(let i = 0; i<3 ; i++){
        document.write(`<li>${text_li}</li>`);
    }
    document.write(`</ul>`);
}
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
function ulli(text_li, count){
    document.write(`<ul>`);
    for(let i = 0; i<count ; i++){
        document.write(`<li>${text_li}</li>`);
    }
    document.write(`</ul>`);
}
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
function primitiveElements(arr){
    document.write(`<ul>`);

    for(let i of arr){
        document.write(`<li>${i}</li>`);
    }
    document.write(`</ul>`);
}

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
// Для кожного об'єкту окремий блок.
function arrOfObj(objectArr) {
    for (let item of objectArr) {
        document.write(`<div>`);
        for (let obj in item) {
            document.write(`${item[obj]} `);
        }
        document.write(`</div>`);
    }
}
// let usersArr = [
//     {id:345, name:'Ostap', age:19},
//     {id:567, name:'Nazar', age:19},
//     {id:789, name:'Ihor', age:24}
// ]
//
// arrOfObj(usersArr)

// - створити функцію яка повертає найменьше число з масиву
function minNumber(arr){
    let min = arr[0];
    for(let i of arr){
        if(i < min){
            min = i
        }
    }
    return min;
}
// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

function sumOfNumber(arrSum){
    let sum = 0;
    for(let i of arrSum){
        sum += i;
    }
    return sum;
}


