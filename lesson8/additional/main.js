// - Створити клас або функцію конструктор, за допомоги якої можна створювати об'єкти наступного вигляду.
// Конструктор повинен приймати значення для кожної властивості, в т.ч і для властивостей внутрішніх об'єктів
//
// {
//     id: 1,
//     name: 'Leanne Graham',
//     username: 'Bret',
//     email: 'Sincere@april.biz',
//     address: {
//         street: 'Kulas Light',
//         suite: 'Apt. 556',
//         city: 'Gwenborough',
//         zipcode: '92998-3874',
//         geo: {
//             lat: '-37.3159',
//             lng: '81.1496'
//         }
//     },
//     phone: '1-770-736-8031 x56442',
//     website: 'hildegard.org',
//     company: {
//          name: 'Romaguera-Crona',
//          catchPhrase: 'Multi-layered client-server neural-net',
//          bs: 'harness real-time e-markets'
//     }
// }
class User{
    constructor(id, name, username, email, street, suite, city, zipcode, lat, lng, phone, website, name_company, catchPhrase, bs) {
        this.id = id;
        this.name = name;
        this.username = username;
        this.email = email;
        this.address = {
            street,
            suite ,
            city,
            zipcode,
            'geo':{
                lat,
                lng
            }
        };
        this.phone = phone;
        this.website = website;
        this.company = {
            name_company,
            catchPhrase,
            bs
        }

    }
}
let user = new User(1,"ostap","bret","email@gmail.com",'Kulas',"apt. 556",'lviv','79000','-37.3159',
    '81.1496',"0730542293",'hildegard.org','Romaguera-Crona','Multi-layered','harness')
console.log(user);
///////////////////////////////////////////////////////////////////////////////

console.log("==================================================================")

class User1{
    constructor(id, name, username, email, street, suite, city, zipcode, lat, lng, phone, website, name_company, catchPhrase, bs) {
        return {
            id,
            name,
            username,
            email,
            address:{
                street,
                suite,
                city,
                zipcode,
                geo: {
                    lat,
                    lng
                }
            },
            phone,
            website,
            company:{
                name_company,
                catchPhrase,
                bs
            }
        }

    }
}
let user1 = new User1(1,"ostap","bret","email@gmail.com",'Kulas',"apt. 556",'lviv','79000','-37.3159',
    '81.1496',"0730542293",'hildegard.org','Romaguera-Crona','Multi-layered','harness')
console.log(user1);

console.log("==================================================================")
//
//
// -  Створити функцію конструктор / клас  який описує об'єкт тегу
// Поля :
// -назва тегу ()
// - опис його дій
// - масив з атрибутами (2-3 атрибути максимум)
// Кожен атрибут описати як окремий який буде містити
// -назву атрибуту
// -опис дії атрибуту
// інформацію брати з htmlbook.ru
//
// Таким чином описати теги
// -a
// -div
// -h1
// -span
// -input
// -form
// -option
// -select
// Приклад результуючого об'єкту
// {
//     titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//     attrs: [
//     {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//     {/*some props and values*/},
//     {/*...*/},
//     {/*...*/},
// ]
//
// }
class Tag{
    constructor(titleOfTag, action, attrs) {
        return {
            'titleOfTag': titleOfTag,
            'action': action,
            'attrs': [attrs]
        }
    }
}

let tag = new Tag('area', "Kаждый элемент <area> определяет активные области изображения, которые являются ссылками...", {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'});
console.log(tag);



