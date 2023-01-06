function makeCard(srcString, quoteString, signatureString) {
  const card = document.createElement('div');
  card.classList.add('card');

  // card gif
  const profilePhoto = document.createElement('div');
  profilePhoto.classList.add('profile-photo');

  const image = document.createElement('img');
  image.src = srcString;

  profilePhoto.appendChild(image);

  // card text
  const text = document.createElement('div');
  text.classList.add('text');

  const para = document.createElement('p');
  para.textContent = quoteString;
  para.classList.add('quote');

  const signature = document.createElement('p');
  signature.textContent = signatureString;
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

  const dragonTail = makeCard(
    './assets/dragonTail.png',
    "Dragon's Tail (House Specialty) (Very Hot)",
    '199.99 Z$'
  );

  const riceBalls = makeCard(
    './assets/riceBalls.png',
    'Japanese Rice Balls',
    '29.99 Z$'
  );

  const seafood = makeCard(
    './assets/seafood.png',
    'Seafood (salmon roe, salmon, shrimp ...)',
    '69.99 Z$'
  );

  const chicken = makeCard(
    './assets/chicken.png',
    'Whole Chicken with Rice, Mushrooms and Vegetables',
    '89.99 Z$'
  );

  const waffles = makeCard(
    './assets/waffles.png',
    'Blueberry and Strawberry Waffles',
    '34.99 Z$'
  );

  main.appendChild(dragonTail);
  main.appendChild(riceBalls);
  main.appendChild(seafood);
  main.appendChild(chicken);
  main.appendChild(waffles);

  return main;
}

function loadMenu() {
  const content = document.getElementById('content');

  const menu = createMain();

  content.appendChild(menu);
}

export default loadMenu;
