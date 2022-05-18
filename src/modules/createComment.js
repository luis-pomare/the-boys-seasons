import { postComment, getCommnets } from "./involvement.js";
import commentCount from "./commentCount.js";

const createComment = async (e, btn) => {
  e.preventDefault();
   
  const comment = document.querySelector('#comment');
  const name = document.querySelector('#name');
  const comDetail = document.querySelector('#comDetail');
  const comCount = document.querySelector('#comCount');
  const form = document.querySelector('#comForm');

   const body = {
      item_id: btn.id,
      username: name.value,
      comment: comment.value
   }
   console.log(body)
   const postResponse = await postComment(body);
   console.log(postResponse);
    form.reset();
  console.log('createComment')

  const commentData = await getCommnets(btn.id); 

  comCount.textContent = commentCount(commentData);
  
  commentData.forEach((item) => {
     const p = document.createElement('p')
     p.className = 'comment-item';
     p.textContent = `${item.creation_date} ${item.username}: ${item.comment}`;
     comDetail.appendChild(p);
  });
  console.log(commentData);
}

export default createComment;