//- Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
//- Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
//- Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - масив. Кожен автор має поля name,age
//- Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача

let arr = [1,2,3,true,false,[1,2,3],'ostap','yurchuk',-5, true];
console.log(arr[0])
console.log(arr[1])
console.log(arr[2])
console.log(arr[3])
console.log(arr[4])
console.log(arr[5])
console.log(arr[6])
console.log(arr[7])
console.log(arr[8])
console.log(arr[9])

let books = {
    title: "Picture You Dead",
    pageCount: 97,
    genre: "crime"
}
let books1 = {
    title: "It ends with us",
    pageCount: 197,
    genre: "romance"
}
let books2 = {
    title: "Saga",
    pageCount: 297,
    genre: "comic"
}

let book = {
    title: "Picture You Dead",
    pageCount: 97,
    genre: "crime",
    authors: ['name', 78]
}
let book1 = {
    title: "It ends with us",
    pageCount: 197,
    genre: "romance",
    authors: ["name", 32]
}
let book2 = {
    title: "Saga",
    pageCount: 297,
    genre: "comic",
    authors: ['name', 23]
}

let users = [
    user1 = {
        name: 'Yura',
        username: 'yura1',
        password: 'yur123'
    },
    user2 = {
        name: 'Maks',
        username: 'mak',
        password: 'maks321'
    },
    user3 = {
        name: 'Ostap',
        username: 'yur4u4ok',
        password: 'yur4u4ok123'
    },
    user4 = {
        name: 'Nazar',
        username: 'nazar',
        password: 'nazar345'
    },
    user5 = {
        name: "Sasha",
        username: "sanya",
        password: 'sashaqwe'
    },
    user6 = {
        name: "Orest",
        username: 'orest',
        password: '123or4e'
    },
    user7 = {
        name: 'Serhii',
        username: "seryi228",
        password: 'serg674'
    },
    user8 = {
        name: "Olya",
        username: 'olya',
        password: 'oliak4wr5'
    },
    user9 = {
        name: "Mariya",
        username: "marichka",
        password: 'ma3ricHka'
    },
    user10 = {
        name: "Marta",
        username: 'marta',
        password: 'MartashaN'
    }
]

console.log(users[0].password)
console.log(users[1]['password'])
console.log(users[2].password)
console.log(users[3]['password'])
console.log(users[4].password)
console.log(users[5]['password'])
console.log(users[6].password)
console.log(users[7]['password'])
console.log(users[8].password)
console.log(users[9]['password'])