import fetchSingleItem from './fetchSingleItem.js';

class Modal {
  constructor() {
    this.comBtn = document.querySelectorAll('.comments-button');
    this.commentModal = document.querySelector('#commentModal');
    this.closeBtn = document.querySelector('.close');
    this.modalContent = document.querySelector('#modalContent');
  }

  displayModal = () => {
    this.comBtn.forEach((btn) => {
      btn.addEventListener('click', async () => {
        /* display modal */
        const APIdata = await fetchSingleItem(1641576);
        console.log(APIdata);
        this.commentModal.style.display = 'block';
        this.modalContent.innerHTML = `
       <img src="${APIdata.image.medium}" alt="poster">
      <h1 style="color: red;">Episode ${APIdata.number}</h1>
       <div class="metaData">
          <p class="meta-data"> Airdate : ${APIdata.airdate} </p>
          <p class="meta-data"> Name : ${APIdata.name} </p>
          <p class="meta-data"> Episode : ${APIdata.number} </p>
          <p class="meta-data"> Rating: ${APIdata.rating.average} </p>
          <p class="meta-data"> Summary: ${APIdata.summary} </p>
       </div>`;

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
}
const modal = new Modal();
export default modal;