import { postTodos } from "./api.js";
import { format } from "date-fns";

export const  renderComments= (({comments, resultGET}) => {
  const appElement=document.getElementById("app");
  const commentHTML = comments.map((comment, index) => {
    const createDate = format(new Date(comment.created_at), 'yyyy-MM-dd hh.mm.ss');
      return `<li class="comment" style="white-space: pre-line">
    <div class="comment-header">
      <div>${comment.name}</div>
    <p><i>Задача создана: ${createDate}</i></p>
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

  const appHtml = 
   ` <div class="container">
    <ul class="comments" id="commentContainer">${commentHTML}</ul>
    <div class="add-form">
        <input type="text" id="nameUser" class="add-form-name" placeholder="Введите ваше имя" />
        <textarea type="textarea" class="add-form-text" id="textUser" placeholder="Введите ваш коментарий" rows="4" style="white-space:pre-line"></textarea>
        <div class="add-form-row">
            <button class="add-form-button" id="buttonAdd">Написать</button>  
        </div>
    </div>
</div>`
  
  appElement.innerHTML = appHtml;
  const buttonElement = document.getElementById('buttonAdd');
  const nameUserElement = document.getElementById('nameUser');
  const textUserElement = document.getElementById('textUser');
initEventListeners({comments});
anotherComments({textUserElement});
btnElementInit(buttonElement, nameUserElement, textUserElement, resultGET);
})
function btnElementInit(buttonElement, nameUserElement, textUserElement,resultGET) {

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
  postTodos ({  
      text: textUserElement.value,
      name: nameUserElement.value})
      .then((responseData) => {
      resultGET();
      nameUserElement.value = "";
      textUserElement.value = '';
  }).catch((error) => {
    //console.log(error);
    if (error.message ==='Сервер упал')
    {
      alert("Сервер сломался, попробуй позже")
      return;
    }
    else 
    {
      
      alert("Ты сделал ошибку в запросе, исправь данные и попробуй снова")
      return;
    }

})
  })
}

export const initEventListeners = ({comments, resultGET}) => {
  const likesButton = document.querySelectorAll(".like-button");
  for (const likeButton of likesButton) {
      likeButton.addEventListener("click", () => {
          const index = likeButton.dataset.index;
          if (comments[index].isliked) {
              comments[index].isliked = false;
              comments[index].likes--;
          } else {
              comments[index].isliked = true;
              comments[index].likes++;
              };
              
          renderComments({comments, resultGET});
      });
  };
};
const anotherComments = ({textUserElement}) => {
  const commentsForm = document.querySelectorAll(".comment-body");
  for (const commentForm of commentsForm) {
      commentForm.addEventListener("click", () => {
          const oldComment = commentForm.dataset.text;
          const oldName = commentForm.dataset.name;
          textUserElement.value += `<${oldComment} \n ${oldName}.,`;
      })
  };
};