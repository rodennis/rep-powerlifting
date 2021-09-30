const container = document.querySelector('#container');
const newUserPost = document.querySelector('#newUserPost');
const post = document.querySelector('#post');

newUserPost.addEventListener('click', function () {

    const newPost = document.createElement('div');
    newPost.classList.add('newPost');
    container.appendChild(newPost);


}
)