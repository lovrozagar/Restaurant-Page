import loadSharedHeader from './modules/header';
import loadHome from './modules/home';
import loadMenu from './modules/menu';

import './styles/reset.css';
import './styles/main.css';
import './assets/tail.png';
import './assets/vegetaEating.gif';
import './assets/gokuEating.gif';
import './assets/riceBalls.png';
import './assets/seafood.png';
import './assets/chicken.png';
import './assets/waffles.png';
import './assets/dragonTail.png';

function addNavEvents() {
  const content = document.getElementById('content');

  const homeButton = document.getElementById('home');
  const menuButton = document.getElementById('menu');
  const contactButton = document.getElementById('contact');

  homeButton.addEventListener('click', () => {
    const main = document.getElementById('main');
    content.removeChild(main);
    loadHome();
    console.log('a');
  });

  menuButton.addEventListener('click', () => {
    const main = document.getElementById('main');
    content.removeChild(main);
    loadMenu();
    console.log('a');
  });

  contactButton.addEventListener('click', () => {
    const main = document.getElementById('main');
    content.removeChild(main);
    loadHome();
    console.log('a');
  });
}

loadSharedHeader();
loadHome();
addNavEvents();
