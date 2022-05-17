import './style.css';
import storage from './modules/storage.js';
import Icon from './image/logo.jpg';
import modal from './modules/modal.js';
import navListeners from './modules/navListeners.js';

document.getElementById('logoimg').src = Icon; // Main logo displaying

storage.getSeasonOne();
navListeners();

window.onload = () => {
  modal.displayModal();
};
