function description() {
  const descriptionEl = document.createElement('div');
  descriptionEl.classList.add('description');

  // Description para
  const para = document.createElement('p');

  const span = document.createElement('span');
  span.textContent = `Does a low class warrior like yourself experience fear when gazing
              eyes upon the mighty Dragon Tail? Or are you ready to ascend to
              the next level and become a Super spicy eater?`;
  span.classList.add('orange-text');

  para.appendChild(span);

  // Try it button
  const dragonTail = document.createElement('div');
  dragonTail.classList.add('dragon-tail');

  const tryItButton = document.createElement('button');
  tryItButton.textContent = 'Try the Dragon Tail';
  tryItButton.classList.add('orange-text', 'try');

  dragonTail.appendChild(tryItButton);

  descriptionEl.appendChild(para);
  descriptionEl.appendChild(dragonTail);

  return descriptionEl;
}

function createCardVegeta() {
  const card = document.createElement('div');
  card.classList.add('card', 'vegeta');

  // card gif
  const profilePhoto = document.createElement('div');
  profilePhoto.classList.add('profile-photo');

  const image = document.createElement('img');
  image.src = './assets/vegetaEating.gif';

  profilePhoto.appendChild(image);

  // card text
  const text = document.createElement('div');
  text.classList.add('text');

  const para = document.createElement('p');
  para.textContent = `This is the best restaurant on the planet, MY restaurant and you
              think you can just waltz in here and become the Dragon Tail
              slayer? Yeah right clown, hmph.`;
  para.classList.add('quote');

  const signature = document.createElement('p');
  signature.textContent = `-Vegeta, Saiyan prince`;
  signature.classList.add('signature');

  text.appendChild(para);
  text.appendChild(signature);

  card.appendChild(profilePhoto);
  card.appendChild(text);

  return card;
}

function createCardGoku() {
  const card = document.createElement('div');
  card.classList.add('card', 'goku');

  // card gif
  const profilePhoto = document.createElement('div');
  profilePhoto.classList.add('profile-photo');

  const image = document.createElement('img');
  image.src = './assets/gokuEating.gif';

  profilePhoto.appendChild(image);

  // card text
  const text = document.createElement('div');
  text.classList.add('text');

  const para = document.createElement('p');
  para.textContent = `Hey come down Vegeta, its not like our new Guest has a chance
              against me, heheheh, I've been training.`;
  para.classList.add('quote');

  const signature = document.createElement('p');
  signature.textContent = `-Goku, our hero`;
  signature.classList.add('signature');

  text.appendChild(para);
  text.appendChild(signature);

  card.appendChild(profilePhoto);
  card.appendChild(text);

  return card;
}

function createMain() {
  const main = document.createElement('main');
  main.setAttribute('id', 'main');
  main.classList.add('main', 'container');

  const descriptionEl = description();
  const card = createCardVegeta();
  const card2 = createCardGoku();

  main.appendChild(descriptionEl);
  main.appendChild(card);
  main.appendChild(card2);

  return main;
}

function loadHome() {
  const content = document.getElementById('content');

  const home = createMain();

  content.appendChild(home);
}

export default loadHome;
