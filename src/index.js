import './style.css';
import storage from './modules/storage.js';
import Icon from './image/logo.jpg';
import navListeners from './modules/navListeners.js';
import update from './modules/update.js';

document.getElementById('logoimg').src = Icon; // Main logo displaying

window.onload = () => {
  storage.getSeasonOne();
  update.getLikes();
  navListeners();
};
