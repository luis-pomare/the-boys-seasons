import storage from './storage.js';

function navListeners() {
  document.getElementById('seasonOne').addEventListener('click', () => {
    storage.getSeasonOne();
  });

  document.getElementById('seasonTwo').addEventListener('click', () => {
    storage.getSeasonTwo();
  });
}

export default navListeners;
