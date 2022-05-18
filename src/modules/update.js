import modal from './modal.js';

class Update {
  season(info) {
    const container = document.getElementById('container');
    container.innerHTML = '';
    for (let i = 0; i < info.length; i += 1) {
      container.innerHTML += `<div class="cards">
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
    </div>`;
    }
    this.inUse = true;

    /* getNodeList for comments buttons */
    const com = document.querySelectorAll('.comments-button');
    modal.displayModal(com, info);
  }

  likes(info) {
    const cards = document.body.children;
    console.log(info);
  }
}

export default new Update();
