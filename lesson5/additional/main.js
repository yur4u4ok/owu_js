// Всі функції повинні бути описані стрілочним типом!!!!
//     - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
let minNum = (a, b, c) => {
    let min = a;
    if(b<a && b<c){
        min = b;
    }
    else if(c<a && c<b){
        min = c;
    }
    return min;
}
console.log("min num = " + minNum(2, 3, 1));

// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
let maxNum = (a, b, c) => {
    let max = a;
    if(b>a && b>c){
        max = b;
    }
    else if(c>a && c>b){
        max = c;
    }
    return max;
}
console.log("max num = " + maxNum(2, 3, 1));

// - створити функцію яка повертає найбільше число з масиву
let maxInArr = (...x) => {
    let maxNum = x[0];
    for(let i of x){
        if(i > maxNum){
            maxNum = i;
        }
    }
    return maxNum;
}
console.log(maxInArr(1,4,-2,3,7,0,-5));

// - створити функцію яка повертає найменьше число з масиву
let minInArr = (arguments) => {
    let minNum = arguments[0];
    for(let i of arguments){
        if(i < minNum){
            minNum = i;
        }
    }
    return minNum;
}
console.log(minInArr([1,4,-2,3,-7,0,-5]));
// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

let sumArr = (arguments) => {
    let sum = 0;
    for(let i of arguments){
        sum += i;
    }
    return sum;
}
console.log("sum = " + sumArr([1,4,-2,3,5]));
//
//
//
//
// - Дано натуральное число n. Выведите все числа от 1 до n.
let allNumbers = (n) => {
    console.log(`all numbers from 1 to ${n}: `);
    for(let i = 1; i<=n; i++){
        console.log(i)
    }
}
allNumbers(9)

// - Даны два целых числа A и В . Выведите все числа от A до B включительно, в порядке возрастания, если A < B,
// или в порядке убывания в противном случае.

let fromAtoB = (a, b) => {
    console.log("from a to b")
    if(a<b) {
        for (let i = a; i <= b; i++) {
            console.log(i);
        }
    }else if(a>b) {
        for (let i = a; i >= b; i--) {
            console.log(i);
        }
    }
}

fromAtoB(5,2);
//
// -   функція Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
//   EXAMPLE:
//   foo([9,8,0,4], 0) // ==> [ 8, 9, 0, 4 ]
//   foo([9,8,0,4], 1) // ==> [ 9 ,0, 8, 4 ]
//   foo([9,8,0,4], 2) // ==> [ 9, 8, 4, 0 ]
//

let foo = (arr, i) => {
    console.log("arr = ")
    let i1 = arr[i];
    let i2 = arr[i+1];
    arr[i] = i2;
    arr[i+1] = i1;

    return arr;
}
console.log(foo([8, 9, 0, 4], 2));

// - Сворити функцію яка буде переносити елементи з значенням 0 у кінець масиву. Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// EXAMPLE:
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]

let toEnd = (arr) => {
    let array = [];
    for(let i of arr){
        if(i !== 0){
            array[array.length] = i;
        }
    }
    for(let y of arr){
        if(y === 0){
            array[array.length] = y;
        }
    }
    return array;
}
console.log(toEnd([1, 0, 6, 0, 3]));
