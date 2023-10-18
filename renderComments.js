
const textUserElement = document.getElementById('textUser');
import {initEventListeners} from './main.js'
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
const commentContainerElement = document.getElementById('commentContainer');
export const  renderComments= ({comments, resultGET}) => {
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
}  

