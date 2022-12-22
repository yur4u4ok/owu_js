// На странице user-details.html:
// 4 Вивести всю, без виключення, інформацію про об'єкт user на який клікнули
// 5 Додати кнопку "post of current user", при кліку на яку, з'являються title всіх постів поточного юзера
// (для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)
// 6 Каждому посту додати кнопку/посилання, при кліку на яку відбувається перехід на сторінку post-details.html,
// котра має детальну інфу про поточний пост.

let url = new URL(location.href);
let searchParams = url.searchParams;
let id = searchParams.get("id");

fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then(response => response.json())
    .then(user => {
        let userDiv = document.createElement('div');
        userDiv.className = "userDiv";
        function userInspection(user) {
            for (let item in user) {
                if(typeof(user[item]) !== 'object') {
                    let div = document.createElement('div');
                    div.innerText = item + ' : ' + user[item];

                    userDiv.appendChild(div)
                }

                if (typeof (user[item]) === "object") {
                    let li = document.createElement('li');
                    li.innerText = item.toUpperCase();

                    userDiv.appendChild(li)
                    userInspection(user[item]);
                }
            }
        }
        document.body.appendChild(userDiv);
        userInspection(user);

        let buttonForTitles = document.createElement('button');
        buttonForTitles.innerText = 'POST OF CURRENT USER';
        buttonForTitles.className = 'buttonForTitles';
        buttonForTitles.onclick = () => {
            fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
                .then(response => response.json())
                .then(posts => {
                    let postDiv = document.createElement('div');
                    postDiv.className = 'postDiv';

                    for(let post of posts){
                        let titleDiv = document.createElement('div');
                        titleDiv.className = 'titleDiv';

                        let li = document.createElement('li');
                        li.innerText = post.title

                        let postButton = document.createElement('button');
                        postButton.innerText = `Detailed info about this post`;
                        postButton.className = 'postButton';

                        let link = document.createElement('a');
                        link.href = `../post-details/post-details.html?post_id=${post.id}`;
                        link.appendChild(postButton);

                        titleDiv.append(li, link);
                        postDiv.appendChild(titleDiv);
                    }
                    document.body.appendChild(postDiv);
                })
        }
        document.body.appendChild(buttonForTitles);
    })





