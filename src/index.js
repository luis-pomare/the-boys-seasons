import './style.css';
import storage from './modules/storage.js';
import Icon from './image/logo.jpg';
import navListeners from './modules/navListeners.js';

document.getElementById('logoimg').src = Icon; // Main logo displaying

window.onload = () => {
  storage.getSeasonOne();
  navListeners();
};
