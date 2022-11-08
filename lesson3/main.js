
//- Є змінна х, якій ви надаєте довільне числове значення.
//    Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3

 let x = +prompt();
 if(x===0){
     console.log("OK");
 }else{
     console.log("not ok");
 }
//
// //- Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// //(в першу, другу, третю или четверту частину години).
//
 let time = +prompt("minutes?");
 if(time >= 0 && time < 15){
     console.log("First quarter");
 }else if(time >= 45 && time < 60){
     console.log("Second quarter");
 }else if(time >= 30 && time < 45){
     console.log("Third quarter");
 }else{
     console.log("Fourth quarter");
 }
//
// //- У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
//
 let day = +prompt("Decade?");
 if(day >=1 && day < 11){
     console.log("First decade");
 }else if(day >=11 && day < 21){
     console.log("Second decade");
 }else if(day >=21 && day <= 31){
     console.log("Third decade");
 }
//
// //- Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа
// // що заплановано на цей день (можна замість плану на день, назву дня англійською).
//
 let choice = +prompt("Number of the weekday");
 switch(choice){
     case 1:
         console.log("English")
         break;
     case 2:
         console.log("Math");
         break;
     case 3:
         console.log("Biology");
         break;
     case 4:
         console.log("Germany");
         break;
     case 5:
         console.log("Chemistry");
         break;
     case 6:
         console.log("English");
         break;
     case 7:
         console.log("Literature")
         break;
 }
//
// //    - Користувач вводить або має два числа.
// //        Потрібно знайти та вивести максимальне число з тих двох .
// //        Також потрібно врахувати коли введені рівні числа.
//
 let x = +prompt("first number");
 let y = +prompt("second number");
 if(x>y){
     console.log('x is greater than y');
 }else if(y>x){
     console.log('y is greater than x');
 }else{
     console.log('x is the same as y');
 }

//    - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//        за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподыбне,
//        тобто кастується до false)

let x = prompt();
console.log(!x || "default")



