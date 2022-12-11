// написати рекурсивну функцію, яка збирає всі назви класів з файлу rules.html в окремий масив. масив вивести в консоль

let arr = [];
function findClasses (element){
    if(element.className){
        arr.push(element.className);
    }
    let children = element.children;
    if(children.length !== 0){
        for(let child of children){
            findClasses(child);
        }
    }
}

let name = document.body
findClasses(name);
console.log(arr);