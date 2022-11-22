// - Знайти та вивести довжину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
console.log("hello world".length);
console.log("lorem ipsum".length);
console.log("javascript is cool".length);

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
console.log("hello world".toUpperCase());
console.log("lorem ipsum".toUpperCase());
console.log("javascript is cool".toUpperCase());


// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
console.log("HELLO WORLD".toLowerCase());
console.log("LOREM IPSUM".toLowerCase());
console.log("JAVASCRIPT IS COOL".toLowerCase());


// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
let str = ' dirty string   ';
let str1 = str.trim();
console.log(str1);


// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
function stringToarray(str){
    console.log(str.split(" "));
}

let str2 = 'Ревуть воли як ясла повні';
stringToarray(str2);
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
//
//
//
// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.
let arr = [10,8,-7,55,987,-1011,0,1050,0];

console.log(arr.map((x) => x.toString()));




// - створити функцію sortNums(direction), яка приймає масив чисел, та сортує його від більшого до меншого, або навпаки в залежності від
// значення аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]
let nums = [11,21,3];


function sortNums(nums, direction){
    if(direction === 'ascending'){
        console.log(nums.sort((a, b) => {
            if (a > b) {
                return 1;
            } else if (a < b) {
                return -1
            } else if (a === b) {
                return 0
            }
        }));
    }
    else if(direction === 'descending'){
        console.log(nums.sort((a, b) => {
            if (a < b) {
                return 1;
            } else if (a > b) {
                return -1
            } else if (a === b) {
                return 0
            }
        }));
    }
}

sortNums(nums, 'descending');

//
// - є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// -- відсортувати його за спаданням за monthDuration
console.log(coursesAndDurationArray.sort( (a,b) => {
    if (a["monthDuration"] > b["monthDuration"]) {
        return -1;
    } else if (a["monthDuration"] === b["monthDuration"]) {
        return 0;
    }
}));

// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
console.log(coursesAndDurationArray.filter((value) => {
    return value.monthDuration > 5;
}));

//
// описати колоду карт
// - знайти піковий туз
// - всі шістки
// - всі червоні карти
// - всі буби
// - всі трефи від 9 та більше
//
//
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }
let deck = [
    {cardSuit:'Spade', value: 6, color:'Black'},
    {cardSuit:'Clubs', value: 6, color:'Black'},
    {cardSuit:'Hearts', value: 6, color:'Red'},
    {cardSuit:'Diamonds', value: 6, color:'Red'},
    {cardSuit:'Spade', value: 7, color:'Black'},
    {cardSuit:'Clubs', value: 7, color:'Black'},
    {cardSuit:'Hearts', value: 7, color:'Red'},
    {cardSuit:'Diamonds', value: 7, color:'Red'},
    {cardSuit:'Spade', value: 8, color:'Black'},
    {cardSuit:'Clubs', value: 8, color:'Black'},
    {cardSuit:'Hearts', value: 8, color:'Red'},
    {cardSuit:'Diamonds', value: 8, color:'Red'},
    {cardSuit:'Spade', value: 9, color:'Black'},
    {cardSuit:'Clubs', value: 9, color:'Black'},
    {cardSuit:'Hearts', value: 9, color:'Red'},
    {cardSuit:'Diamonds', value: 9, color:'Red'},
    {cardSuit:'Spade', value: 10, color:'Black'},
    {cardSuit:'Clubs', value: 10, color:'Black'},
    {cardSuit:'Hearts', value: 10, color:'Red'},
    {cardSuit:'Diamonds', value: 10, color:'Red'},
    {cardSuit:'Spade', value: 'Jack', color:'Black'},
    {cardSuit:'Clubs', value: 'Jack', color:'Black'},
    {cardSuit:'Hearts', value: 'Jack', color:'Red'},
    {cardSuit:'Diamonds', value: 'Jack', color:'Red'},
    {cardSuit:'Spade', value: 'Queen', color:'Black'},
    {cardSuit:'Clubs', value: 'Queen', color:'Black'},
    {cardSuit:'Hearts', value: 'Queen', color:'Red'},
    {cardSuit:'Diamonds', value: 'Queen', color:'Red'},
    {cardSuit:'Spade', value: 'King', color:'Black'},
    {cardSuit:'Clubs', value: 'King', color:'Black'},
    {cardSuit:'Hearts', value: 'King', color:'Red'},
    {cardSuit:'Diamonds', value: 'King', color:'Red'},
    {cardSuit:'Spade', value: 'Ace', color:'Black'},
    {cardSuit:'Clubs', value: 'Ace', color:'Black'},
    {cardSuit:'Hearts', value: 'Ace', color:'Red'},
    {cardSuit:'Diamonds', value: 'Ace', color:'Red'}
];
//- знайти піковий туз
deck.forEach(value => {
    if (value.cardSuit === 'Spade' && value.value === 'Ace'){
        console.log(value);
    }
});

// - всі шістки
console.log(deck.filter(value => {
    return value.value === 6;
}));

// - всі червоні карти
console.log(deck.filter(value => {
    return value.color === 'Red';
}));

// - всі буби
deck.forEach(value => {
    if(value.cardSuit === "Diamonds"){
        console.log(value);
    }
});

// - всі трефи від 9 та більше
console.log(deck.filter(value => {
    if(value.cardSuit === "Clubs" && value.value >= 9){
        return value;
    }
}));



//
// Додатково по reduce
// Взяти описану колоду карт, та за допомоги редюсу попакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }

let deckPack = deck.reduce((accumulator, currentValue) => {
    if(currentValue.cardSuit === 'Spade') {accumulator.spades.push(currentValue);}
    else if(currentValue.cardSuit === 'Diamonds'){accumulator.diamonds.push(currentValue);}
    else if(currentValue.cardSuit === 'Hearts'){accumulator.hearts.push(currentValue);}
    else if(currentValue.cardSuit === 'Clubs'){accumulator.clubs.push(currentValue);}

    return accumulator;

}, {spades:[], diamonds:[], hearts:[], clubs:[]})

console.log(deckPack);















