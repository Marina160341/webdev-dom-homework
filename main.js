import {getTodos, postTodos} from './api.js' 
import {renderComments } from './renderComments.js'
const buttonElement = document.getElementById('buttonAdd');
const nameUserElement = document.getElementById('nameUser');
const textUserElement = document.getElementById('textUser');
const buttonDisabledTrue = () => {
        buttonElement.disabled = true;
        buttonElement.textContent = 'Идёт загрузка...';
    }
    const buttonDisabledFalse = () => {
        buttonElement.disabled = false;
        buttonElement.textContent = 'Написать';
    }
    let comments = []
    const resultGET = () => {
        buttonDisabledTrue();
        getTodos ().then((responseData) => {
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
            buttonDisabledFalse();
            renderComments({comments});
        }).catch((error) => {
            alert("Проверьте соединение с интернетом");
            buttonDisabledFalse();
            console.warn(error);
            })
    };
    resultGET();
     export const initEventListeners = () => {
        const likesButton = document.querySelectorAll(".like-button");
        for (const likeButton of likesButton) {
            likeButton.addEventListener("click", () => {
                console.log(likeButton);
                console.log(likeButton.dataset.index);
                const index = likeButton.dataset.index;
                if (comments[index].isliked) {
                    comments[index].isliked = false;
                    comments[index].likes--;
                } else {
                    comments[index].isliked = true;
                    comments[index].likes++;
                    };
                renderComments({comments});
            });
        };
    };
    buttonElement.addEventListener("click", () => {
        nameUserElement.classList.remove('error');
        buttonElement.classList.remove('no-click')
        if (nameUserElement.value === '') {
            nameUserElement.classList.add('error')
            return;
        }
        if (textUserElement.value === "") {
            textUserElement.classList.add('error');
            return
        }
        postTodos ({  text: textUserElement.value,
            name: nameUserElement.value})
            .then((responseData) => {
            resultGET();
            nameUserElement.value = "";
            textUserElement.value = '';
        }).catch((error) => {
          if (error.message ==='Сервер упал'){
            alert("Сервер сломался, попробуй позже")
            return;
          }
          else if(error.message ==='плохой запрос'){
            alert("Ты сделал ошибку в запросе, исправь данные и попробуй снова")
            return;
          }
          else{
          alert('Кажеться что то пошло не так,попробуй позже')
          }
           console.log(error);
          });
        })
            buttonDisabledFalse();
            renderComments({comments});


        
        