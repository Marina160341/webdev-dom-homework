import { getTodos } from './api.js'
import { renderComments } from './renderComments.js'
import { renderLogin } from './loginUser.js'
import {renderRegistr} from './registration.js'

const buttonDisabledTrue = () => {
    const buttonElementAdd= document.getElementById("buttonAdd")
    buttonElementAdd.disabled = true;
    buttonElementAdd.textContent = 'Идёт загрузка...';
}
const buttonDisabledFalse = () => {
    const buttonElementAdd= document.getElementById("buttonAdd");
    buttonElementAdd.disabled = false;
    buttonElementAdd.textContent = 'Написать';
}
let comments = []
    const resultGET = () => {
    // buttonDisabledTrue();
    getTodos().then((responseData) => {
        const appComments = responseData.comments.map((comment) => {
            return {
                name: comment.author.name,
                data: new Date(comment.date).toLocaleString(),
                text: comment.text,
                likes: comment.likes,
                isliked: false,
                forceError: true,
            }
        })
        comments = appComments;
        // buttonDisabledFalse();
        renderComments({comments, resultGET});
    }).catch((error) => {
        alert("Проверьте соединение с интернетом");
        buttonDisabledFalse();
        console.warn(error);
    })
};
renderLogin({ resultGET });

//renderRegistr({resultGET})

<<<<<<< HEAD
=======

>>>>>>> 39b5fa86111b9ab553970a4f591a01d4bb1ef1d7
