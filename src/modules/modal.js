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

  getEpisodes = (episodes) => episodes
}

const modal = new Modal();
export default modal;