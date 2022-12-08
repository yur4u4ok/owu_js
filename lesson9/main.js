// - є масив
// let simpsons = [
//     {
//         name: 'Bart',
//         surname: 'Simpson',
//         age: 10,
//         info: 'Бартолом\'ю ДжоДжо «Барт» Сімпсон (англ. Bartholomew JoJo «Bart» Simpson) — один із головних героїв мультиплікаційного серіалу Сімпсони. Барт — найстарша дитина Гомера і Мардж Сімпсон. У нього також є дві молодші сестри — Ліса і Меґґі. Барт є втіленням образу бешкетника та посереднього учня у школі. Разом зі своїм батьком Барт є одним із найвідоміших персонажів у цьому серіалі.',
//         photo: 'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'
//     },
//     {
//         name: 'Homer',
//         surname: 'Simpson',
//         age: 40,
//         info: 'Гомер Джей Сімпсон (англ. Homer Jay Simpson) — один із головних героїв мультсеріалу «Сімпсони». Гомер — грубий і неввічливий батько родини, він має очевидні вади: товстий, лисий і не дуже розумний. Нерідко він поводиться як блазень, абсурдно, егоїстично і нетактовно, але все ж лишається симпатичним.',
//         photo: 'http://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'
//     },
//     {
//         name: 'Marge',
//         surname: 'Simpson',
//         age: 38,
//         info: 'Ма́рджори Жакли́н «Мардж» Си́мпсон (в девичестве Бувье́) (англ. Marjorie Jacqueline «Marge» Simpson) — постоянный персонаж мультипликационного сериала «Симпсоны», её озвучивает Джулия Кавнер. Обычно носит зелёное платье, красные балетки, на шее — ожерелье из искусственного жемчуга и ездит на оранжевом универсале. У неё шикарные синие волосы, которые она обычно собирает в очень высокую причёску. Глаза цвета ореха (19s6e). Основное занятие — домохозяйка, большую часть времени проводит в заботе о доме, детях и Гомере. Образ Мардж копирует стереотип провинциальной американской домохозяйки 50-х годов. Мардж — единственный член семьи, посещающий церковь добровольно. Старается поддерживать нравственность не только своей семьи, но и всего города. Отлично готовит, особенно славятся её свиные отбивные и зефир. Любимое блюдо — лапша с маслом.',
//         photo: 'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'
//     },
//     {
//         name: 'Lisa',
//         surname: 'Simpson',
//         age: 9,
//         info: 'Ли́за Мари́ Си́мпсон (англ. Lisa Marie Simpson) — героиня мультипликационного сериала «Симпсоны». Средний ребёнок в семье, восьмилетняя девочка, выделяющаяся среди остальных Симпсонов прежде всего своим умом и рассудительностью.',
//         photo: 'https://upload.wikimedia.org/wikipedia/ru/e/ec/Lisa_Simpson.png'
//     },
//     {
//         name: 'Maggie',
//         surname: 'Simpson',
//         age: 1,
//         info: 'Ма́ргарет Эвелин «Мэ́гги» Си́мпсон (англ. Margaret Evelyn “Maggie” Simpson) — персонаж мультсериала «Симпсоны». Впервые появилась на телевидении в шоу Трейси Ульман, в короткометражке Good Night (англ.)русск. 19 апреля 1987 года. Мэгги была придумана и разработана карикатуристом Мэттом Грейнингом, пока он ждал встречи с Джеймсом Л. Бруксом. Названа в честь младшей сестры Грейнинга. После появления в шоу Трейси Ульман, через три года семья Симпсонов получила собственный сериал на телеканале Fox, дебют произошёл 17 декабря 1989 года.',
//         photo: 'https://upload.wikimedia.org/wikipedia/ru/9/9d/Maggie_Simpson.png'
//     },
// ];
// // Проітерувати його, створиши для кожного об'єкту  масиву <div class='member'> та наповнити його данними з об'єкту.
// //     Якщо людською мовою: під кожного члена родини зробити блок та наповнити його інформацією з цього об'єкту
//
// for(let simpson of simpsons){
//     let div = document.createElement('div');
//     div.classList.add('member')
//     div.innerText = `\n${simpson.name} ${simpson.surname} ${simpson.age}\n ${simpson.info}\n ${simpson.photo}`;
//     document.body.appendChild(div)
// }

//
//
//
//
// Цикл в циклі
// - Є масив
// let coursesArray = [
//     {
//         title: 'JavaScript Complex',
//         monthDuration: 5,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
//     },
//     {
//         title: 'Java Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'java core',
//             'java advanced']
//     },
//     {
//         title: 'Python Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'python core',
//             'python advanced']
//     },
//     {
//         title: 'QA Complex',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
//     },
//     {
//         title: 'FullStack',
//         monthDuration: 7,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'react',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'node.js',
//             'python',
//             'java']
//     },
//     {
//         title: 'Frontend',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
//     }
// ];
// //
// // Створити для кожного елементу масиву свій блок, блок розділити блоками, в яких будуть зберігатись значення окремих властивостей,
// // для властивості modules зробити список з елементами
// // Приклад структири знаходиться у файлі example.png
// for (const coursesArrayElement of coursesArray) {
//     let div = document.createElement('div');
//
//     let div_title = document.createElement('div');
//     div_title.classList.add('title')
//     div_title.innerText = `${coursesArrayElement.title}`
//     div.appendChild(div_title);
//
//     let div1 = document.createElement('div');
//     div1.classList.add("div1")
//
//     let div_monthDuration = document.createElement('div');
//     div_monthDuration.classList.add('monthDuration')
//     div_monthDuration.innerText = `${coursesArrayElement.monthDuration}`
//     div1.appendChild(div_monthDuration);
//
//     let div_hourDuration = document.createElement('div');
//     div_hourDuration.classList.add('hourDuration')
//     div_hourDuration.innerText = `${coursesArrayElement.hourDuration}`
//     div1.appendChild(div_hourDuration);
//
//     div.appendChild(div1)
//
//     let div_modules = document.createElement('div');
//     for(let module of coursesArrayElement.modules){
//         let li_module = document.createElement('li');
//         li_module.innerText = `${module}`;
//         div_modules.appendChild(li_module);
//     }
//     div.appendChild(div_modules);
//
//     div.classList.add("main_div")
//     document.body.appendChild(div);
// }




// ------------------
//
//
// - створити блок,
// - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.
// let div = document.createElement('div');
// div.classList.add('wrap', 'collapse', 'alpha', 'beta');
// div.style.background = 'red'
// div.style.fontSize = "20px";
// document.body.appendChild(div);
// let clone = div.cloneNode(true)
// document.body.appendChild(clone);

//
// - Є масив:
//     ['Main','Products','About us','Contacts']
// Взяти файл template1.html та додати в нього скріпт котрий для кожного елементу масиву створює li та додає його до блоку .menu
// Завдання робити через цикли.
// let arr = ['Main','Products','About us','Contacts'];
//
// let className = document.getElementsByClassName('menu')[0]
// for(let i of arr){
//     let li_element = document.createElement('li');
//     li_element.innerText = `${i}`;
//     className.appendChild(li_element);
// }

//
// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.
//
// for(let course of coursesAndDurationArray){
//     let element_block = document.createElement('div');
//     element_block.innerText = `${course.title} ${course.monthDuration}`
//     document.body.appendChild(element_block);
// }




// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//
//
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу,
// та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.
//
// for (const course of coursesAndDurationArray) {
//     let div = document.createElement('div');
//     div.classList.add('item');
//     let h = document.createElement('h');
//     h.classList.add('heading');
//     h.innerText = `${course.title}`;
//     let p = document.createElement('p');
//     p.classList.add('description');
//     p.innerText = `${course.monthDuration}`;
//     div.append(h, p);
//     document.body.appendChild(div);
// }


//
//
// -----------
//
// - Створити довільний елемент з id = text.  Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку зникав елемент з id="text".
//
// let button = document.createElement('button');
// button.id = 'text';
// document.body.appendChild(button);
// button.onclick = function (){
//     button.remove()
// }

//
// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік
// чи меньше він ніж 18, та повідомити про це користувача

// let input_age = document.createElement('input');
// input_age.type = 'number';
// input_age.name = 'age';
// let button = document.createElement('button')
// button.onclick = function (){
//     if(input_age.value< 18){
//         alert('no')
//     }
//     else{
//         alert("ok")
//     }
// }
// document.body.append(input_age, button)
//

//
//
// *** Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)

let input_line = document.createElement('input');
input_line.type = 'number';
input_line.name = 'line';
let input_count = document.createElement('input');
input_count.type = 'number';
input_count.name = 'count';
let input_line_in = document.createElement('input');
input_line_in.type = 'string';
input_line_in.name = 'line_in';
let button = document.createElement('button')
button.innerText = 'submit'
button.onclick = function(){
    let rows = input_line.value;
    let cells = input_count.value;
    let text = input_line_in.value;
    let table = document.createElement('table');
    for(let row = 0; row<rows; row++){
        let r = document.createElement('tr');
        table.appendChild(r);
        for(let cell = 0; cell<cells; cell++){
            let c = document.createElement('td');
            c.innerText = text
            table.appendChild(c);
        }
    }
    document.body.appendChild(table);
}
document.body.append(input_line, input_count, input_line_in, button);
