// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
function User(id, name, surname, email, phone){
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}
let arr = [];

for(let i=0;i<10;i++){
    arr.push(new User(i+1,"ostap",'yurchuk','email@email.com', 730542293+i))
}
console.log(arr);

console.log("================================================")
// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
console.log(arr.filter(value => {
    return value.id % 2 === 0;
}));

console.log("================================================")
// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
console.log(arr.sort((a, b) => {
    return a.id - b.id
}));


console.log("================================================")
// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
class Client{
    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}
let clients = []
let client = new Client(1,"ostap",'yurchuk','email@email.com', 730542293, ['toy', 'phone']);
clients.push(client)
let client1 = new Client(2,"ostap",'yurchuk','email@email.com', 730542293, ['toy', 'phone', 'pen']);
clients.push(client1)
let client2 = new Client(3,"ostap",'yurchuk','email@email.com', 730542293, ['toy']);
clients.push(client2)
let client3 = new Client(4,"ostap",'yurchuk','email@email.com', 730542293, []);
clients.push(client3)
let client4 = new Client(5,"ostap",'yurchuk','email@email.com', 730542293, ['toy', 'phone', 'toy', 'phone']);
clients.push(client4)
let client5 = new Client(6,"ostap",'yurchuk','email@email.com', 730542293, ['toy', 'phone','toy', 'phone', 'keyboard']);
clients.push(client5)
let client6 = new Client(7,"ostap",'yurchuk','email@email.com', 730542293, ['toy', 'phone', 'toy', 'phone','toy', 'phone']);
clients.push(client6)
let client7 = new Client(8,"ostap",'yurchuk','email@email.com', 730542293, ['toy', 'phone','toy', 'phone','toy', 'phone','toy', 'phone']);
clients.push(client7)
let client8 = new Client(9,"ostap",'yurchuk','email@email.com', 730542293, ['toy', 'phone','toy', 'phone','toy', 'phone','toy', 'phone','toy', 'phone']);
clients.push(client8)

// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
console.log(clients.sort((a, b) => {
    return a.order.length - b.order.length
}));


// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість,
// об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
function Car(model, producer, year, max_speed, engine_volume){
    this.model = model;
    this.producer = producer;
    this.year = year;
    this.max_speed = max_speed;
    this.engine_volume = engine_volume;
    this.drive = function() {
        console.log(`We are driving with ${this.max_speed} km/h`)
    }
    this.info = function(){
        console.log(this);
    }
    this.increaseMaxSpeed = function(newSpeed){
        this.max_speed += newSpeed;
    }
    this.changeYear = function (newValue){
        this.year = newValue;
    }
    this.addDriver = function(driver){
        this.driver = driver;
    }

}

let car = new Car("ferrari", 'Enco Ferrari', 1989, 300, 5.0);
car.drive()
car.info()
car.increaseMaxSpeed(50)
car.info()
car.changeYear(2001);
car.info()
car.addDriver("Ostap")
car.info()

//
// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна.
// додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
class Car_class{
    constructor(model, producer, year, max_speed, engine_volume) {
        this.model = model;
        this.producer = producer;
        this.year = year;
        this.max_speed = max_speed;
        this.engine_volume = engine_volume;
    }

    drive(){
        console.log(`We are driving with ${this.max_speed} km/h`);
    }
    info(){
        console.log(this);
    }
    increaseMaxSpeed(newSpeed){
        this.max_speed += newSpeed;
    }
    changeYear(newValue){
        this.year = newValue;
    }
    addDriver(driver){
        this.driver = driver;
    }
}

let c_car = new Car_class("ferrari", 'Enco Ferrari', 1989, 300, 5.0);
c_car.info()
c_car.addDriver("Orest")
c_car.info()

//
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
class Popelushka{
    constructor(name, age, foot_size) {
        this.name = name;
        this.age = age;
        this.foot_size = foot_size;
    }
}
arr_popelushka = [];
for(let i = 0; i<10; i++){
    arr_popelushka.push(new Popelushka(`Anya${i+1}`, 20+i, 35+i))
}

class Prince{
    constructor(name, age, looked_for_size) {
        this.name = name;
        this.age = age;
        this.looked_for_size = looked_for_size;
    }
}

let prince = new Prince("Vasya", 25, 37);

console.log(arr_popelushka.filter(value => {
        return value.foot_size === prince.looked_for_size
    }
));












