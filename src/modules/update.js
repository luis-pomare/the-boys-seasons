class Update {
  season(info) {
    let container = document.getElementById('container');
    container.innerHTML = '';
    for (let i = 0; i < info.length; i += 1) {
      container.innerHTML += `<div class="cards">
      <div class="card">
        <img
          id="card-image"
          src="./image/logo.jpg"
          class="image"
          alt="card image"
        />
        <div class="card-title">
          <h2>${info[i]['name']}</h2>
          <i class="fa-solid fa-heart"></i>
        </div>
        <p class="likes-counter">5 likes</p>
        <button class="comments-button">Comments</button>
      </div>
    </div>`;
    }
  }
}

export default new Update();
