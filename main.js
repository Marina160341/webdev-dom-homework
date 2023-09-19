"use strict";

import { getTodos, postTodos, } from "./api.js";
import {LikeL } from "./Like.js";
import {StateTrue, StateFalse } from "./state.js";

    const buttonElement = document.getElementById('buttonAdd');
    const commentContainerElement = document.getElementById('commentContainer');
    const commentlistElement = document.getElementById('commentList');
    const nameUserElement = document.getElementById('nameUser');
    const textUserElement = document.getElementById('textUser');
    const likesLink = document.querySelectorAll('.likes-counter');
    const commentText = document.getElementById('comment');
    // const buttonDisabledTrue = () => {
    //     buttonElement.disabled = true;
    //     buttonElement.textContent = 'Идёт загрузка...';
    // }
    // const buttonDisabledFalse = () => {
    //     buttonElement.disabled = false;
    //     buttonElement.textContent = 'Написать';
    // }
    let comments = []
    const resultGET = () => {
        StateTrue ();
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
            StateFalse ();
            renderComments();
        }).catch((error) => {
            alert("Кажеться что то пошло не так,попробуй позже");
            StateFalse();
            console.warn(error);
        })
    };
    resultGET();
    const anotherComments = () => {
        const commentsForm = document.querySelectorAll(".comment-body");
        for (const commentForm of commentsForm) {
            commentForm.addEventListener("click", () => {
                const oldComment = commentForm.dataset.text;
                const oldName = commentForm.dataset.name;
                textUserElement.value += `<${oldComment} \n ${oldName}.,`;
            })
        };
    };
    const initEventListeners = () => {
        const likesButton = document.querySelectorAll(".like-button");
        for (const likeButton of likesButton) {
            likeButton.addEventListener("click", () => {
                LikeL ();
                renderComments();
            });
        };
    };
    const renderComments = () => {
        const commentHTML = comments.map((comment, index) => {
            return `<li class="comment" style="white-space: pre-line">
          <div class="comment-header">
            <div>${comment.name}</div>
            <div>${comment.data}</div>
          </div>
          <div class="comment-body" id="comment-body" data-text = "${comment.text}" data-name = "${comment.name}">
            <div class="comments">
              ${comment.text}
          </div>
          </div>
          <div class="comment-footer">
            <div class="likes";
              <span class="likes-counter">${comment.likes}</span>
              <button  id="like-button" class="like-button ${comment.isliked ? '-active-like': ''}" data-index="${index}"></button>
            </div>
          </div>
        </li>`;
        }).join('');
        commentContainerElement.innerHTML = commentHTML;
        initEventListeners();
        anotherComments();
    };
    renderComments();
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
        StateTrue ();
        postTodos({text: textUserElement.value,
                    name: nameUserElement.value}).then((responseData) => {
            return fetch('https://wedev-api.sky.pro/api/v1/kemova-marina/comments', {
                method: "GET",
            });
        }).then((response) => {
            return response.json();
        }).then((responseData) => {
            resultGET();
            renderComments();
            buttonDisabledFalse()
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
           
          StateFalse();
           
        })
        renderComments();
    
    renderComments();
