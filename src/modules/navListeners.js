import storage from './storage.js';

function navListeners() {
  document.getElementById('seasonOne').addEventListener('click', () => {
    storage.getSeasonOne();
    storage.getLikes();
  });

  document.getElementById('seasonTwo').addEventListener('click', () => {
    storage.getSeasonTwo();
    storage.getLikes();
  });
}

export default navListeners;
