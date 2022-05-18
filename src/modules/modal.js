import createComment from './createComment.js';
import commentCount from './commentCount.js';
import { getCommnets } from './involvement.js';

class Modal {
  constructor() {
    this.comBtn = document.querySelectorAll('.comments-button');
    this.commentModal = document.querySelector('#commentModal');
    this.closeBtn = document.querySelector('.close');
    this.modalContent = document.querySelector('#modalContent');
  }

  displayModal = (comBtn, episodes) => {
    comBtn.forEach((btn) => {
      btn.addEventListener('click', async () => {
        /* display modal */
        const commentData = await getCommnets(btn.id);
        const APIdata = episodes.filter((ep) => ep.id === parseInt(btn.id, 10));
        this.commentModal.style.display = 'block';
        this.modalContent.innerHTML = `
       <img src="${APIdata[0].image.medium}" alt="poster">
      <h1 style="color: red;">Episode ${APIdata[0].number}</h1>
       <div class="metaData">
          <p class="meta-data"> Airdate : ${APIdata[0].airdate} </p>
          <p class="meta-data"> Name : ${APIdata[0].name} </p>
          <p class="meta-data"> Episode : ${APIdata[0].number} </p>
          <p class="meta-data"> Rating: ${APIdata[0].rating.average} </p>
          <p class="meta-data"> Summary: ${APIdata[0].summary} </p>
          <br>
          <h3 class="comSection">Comments <span id="comCount"></span></h3>
          <div id="comDetail"></div>
          <form action="#" id="comForm">
           <h3 id="addCom">Add a Comment</h3>
         <div class="comInputs">
           <input type="text" id="name" name="name" class="comInput" placeholder="Your Name..">
           <textarea name="comment" id="comment" class="comInput" cols="30" rows="8"></textarea>
         </div>
          <input type="button" value="Submit" class="commentBtn" id= "${btn.id}">
        </form>
       </div>`;

        const comCount = document.querySelector('#comCount');
        comCount.textContent = commentCount(commentData);

        const comDetail = document.querySelector('#comDetail');
        commentData.forEach((item) => {
          const p = document.createElement('p');
          p.className = 'comment-item';
          p.textContent = `${item.creation_date} ${item.username}: ${item.comment}`;
          comDetail.appendChild(p);
        });

        const commentBtn = document.querySelector('.commentBtn');
        console.log(commentBtn);
        commentBtn.addEventListener('click', (e) => createComment(e, btn));
        /* close modal */
        this.closeBtn.addEventListener('click', () => {
          this.commentModal.style.display = 'none';
        });

        window.addEventListener('click', (e) => {
          if (e.target === this.commentModal) {
            this.commentModal.style.display = 'none';
          }
        });
      });
    });
  }

  getEpisodes = (episodes) => episodes
}

const modal = new Modal();
export default modal;