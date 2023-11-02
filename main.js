import { getTodos } from './api.js'
import { renderComments, initEventListeners } from './renderComments.js'
import { renderLogin } from './loginUser.js'

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
// const initEventListeners = () => {
//     const likesButton = document.querySelectorAll(".like-button");
//     for (const likeButton of likesButton) {
//         likeButton.addEventListener("click", () => {
//             const index = likeButton.dataset.index;
//             console.log(index);
//             if (comments[index].isliked) {
//                 comments[index].isliked = false;
//                 comments[index].likes--;
//             } else {
//                 comments[index].isliked = true;
//                 comments[index].likes++;
//                 };
//             renderComments({comments, resultGET});
//         });
//     };
 // };


