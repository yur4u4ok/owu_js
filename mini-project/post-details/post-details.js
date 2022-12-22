// На странице post-details.html:
// 7 Вивести всю, без виключення, інформацію про об'єкт post на який клікнули .
// 8 Нижчє інформаці про пост, вивести всі коментарі поточного поста (ендпоінт  -
// https://jsonplaceholder.typicode.com/posts/POST_ID/comments)

let url = new URL(location.href);
let searchParams = url.searchParams;
let postID = searchParams.get("post_id");


fetch(`https://jsonplaceholder.typicode.com/posts/${postID}`)
    .then(response => response.json())
    .then(post => {
        let postDiv = document.createElement('div');
        postDiv.className = 'postDiv';

        for(let postItem in post){
            let li = document.createElement('li');
            li.innerText = `${postItem} : ${post[postItem]}`;
            postDiv.appendChild(li)
        }
        document.body.appendChild(postDiv);
    })


setTimeout(() => {
fetch(`https://jsonplaceholder.typicode.com/posts/${postID}/comments`)
    .then(response => response.json())
    .then(comments => {
        let commentTitle = document.createElement('h3');
        commentTitle.innerText = 'COMMENTS';

        let mainDivForComments = document.createElement('div');
        mainDivForComments.className = 'mainDivForComments';

        for(let comment of comments){
            let commentDiv = document.createElement('div');
            commentDiv.className = 'commentDiv';
            let name = document.createElement('li');
            let email = document.createElement('li');
            let text = document.createElement('li');
            email.className = 'email';
            name.className = 'email';
            text.className = 'email';

            name.innerText = `Name - ${comment["name"]}`;
            email.innerText = `Email - ${comment["email"]}`;
            text.innerText = `Body - ${comment["body"]}`;

            commentDiv.append(name, email, text);
            mainDivForComments.appendChild(commentDiv);
        }
        document.body.append(commentTitle, mainDivForComments);
    })
},100 )






