import homeCounter from './home-counter.js';
import modal from './modal.js';

class Update {
  updateLikes(info) {
    const cards = document.getElementById('container').children;
    for (let i = 0; i < info.length; i += 1) {
      for (let j = 0; j < cards.length; j += 1) {
        const element = cards[j].children[2].children[1].dataset.id;
        if (info[i].item_id === element) {
          cards[j].children[2].children[1].innerText = `${info[i].likes} likes`;
          this.found = true;
        }
      }
    }
  }

  getLikes = async () => {
    const response = await fetch(
      'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/mSaRFqdkMnkop7U1e7L5/likes/',
    );
    this.likes = await response.json();
    this.updateLikes(this.likes);
  };

  season(info) {
    const container = document.getElementById('container');
    container.innerHTML = '';
    for (let i = 0; i < info.length; i += 1) {
      container.innerHTML += `
      <div class="card">
        <img
          src="${info[i].image.original}"
          class="image"
          alt="card image"
        />
        <div class="card-title">
          <h2>${info[i].name}</h2>
          </div>
        <div class='likes-container'>
        <i class="fa-solid fa-heart" data-id='${info[i].id}'></i>
        <p class="likes-counter" data-id='${info[i].id}'>0 likes</p>
        </div>
        <button class="comments-button" id="${info[i].id}">Comments</button>
      </div>
    `;
    }
    this.inUse = true;

    homeCounter(info[0].season);
    /* getNodeList for comments buttons */
    const com = document.querySelectorAll('.comments-button');
    modal.displayModal(com, info);

    const cards = document.getElementById('container').children;
    for (let i = 0; i < cards.length; i += 1) {
      cards[i].children[2].children[0].addEventListener('click', async () => {
        await fetch(
          'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/mSaRFqdkMnkop7U1e7L5/likes/',
          {
            method: 'POST',
            body: JSON.stringify({
              item_id: cards[i].children[2].children[0].dataset.id,
            }),
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
            },
          },
        );
        this.getLikes();
      });
    }
  }
}

export default new Update();
