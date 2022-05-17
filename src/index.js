import './style.css';
import Icon from './image/logo.jpg';
import modal from './modules/modal.js';

const imge = document.querySelector('#logoimg');
imge.src = Icon;
const image2 = document.querySelector('.image');
image2.src = Icon;

// export default fetchSingleItem;

window.onload = () => {
  modal.displayModal();
};
