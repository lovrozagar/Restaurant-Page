function createHeader() {
  const header = document.createElement('header');
  header.classList.add('header');

  const container = document.createElement('div');
  container.classList.add('container');

  header.appendChild(container);

  const titleContainer = document.createElement('div');
  titleContainer.classList.add('title-container');

  container.appendChild(titleContainer);

  const title = document.createElement('h1');
  title.textContent = 'Dragon Tail';
  title.classList.add('title');

  titleContainer.appendChild(title);

  // NAV
  const nav = createNav();
  header.appendChild(nav);

  return header;
}

function createNav() {
  const nav = document.createElement('nav');
  nav.classList.add('nav');

  const container = document.createElement('div');
  container.classList.add('container');

  nav.appendChild(container);

  const buttonHome = document.createElement('button');
  buttonHome.textContent = 'Home';
  buttonHome.setAttribute('id', 'home');
  buttonHome.classList.add('home');
  const buttonMenu = document.createElement('button');
  buttonMenu.textContent = 'Menu';
  buttonMenu.setAttribute('id', 'menu');
  buttonMenu.classList.add('menu');
  const buttonContact = document.createElement('button');
  buttonContact.textContent = 'Contact';
  buttonContact.setAttribute('id', 'contact');
  buttonContact.classList.add('contact');

  container.appendChild(buttonHome);
  container.appendChild(buttonMenu);
  container.appendChild(buttonContact);

  return nav;
}

function loadSharedHeader() {
  const content = document.getElementById('content');

  const header = createHeader();

  content.appendChild(header);
}

export default loadSharedHeader;
