const container = document.querySelector('#container');
const newUserPost = document.querySelector('#newUserPost');

newUserPost.addEventListener('click', function () {

    const newPost = document.createElement('div');
        newPost.classList.add('newPost');
        container.appendChild(newPost);

    const frame = document.createElement('iframe');
    frame.classList.add('frame');
        newPost.appendChild(frame).width =  '546';
        newPost.appendChild(frame).height = '330';
        newPost.appendChild(frame).src = '';
        newPost.appendChild(frame).frameborder = '1';
        newPost.appendChild(frame).allowfullscreen;

    const form = document.createElement('form');
        newPost.appendChild(form).enctype = 'multipart/form-data';
        newPost.appendChild(form).action = '';
        newPost.appendChild(form).method = 'POST';
    

    const fileSize = document.createElement('input');
        newPost.appendChild(fileSize).type = 'hidden';
        newPost.appendChild(fileSize).name = 'MAX_FILE_SIZE';
        newPost.appendChild(fileSize).value = '100000';

    const fileUpload = document.createElement('input');
        newPost.appendChild(fileUpload).name = 'uploadedfile';
        newPost.appendChild(fileUpload).type = 'file'
        fileUpload.classList.add('fileUpload');

    const submitPost = document.createElement('input');
        newPost.appendChild(submitPost).id = 'submitPost';
        newPost.appendChild(submitPost).type = 'submit'
        newPost.appendChild(submitPost).value = 'upload file'
    

}
)
