function createPara(text) {
  const p = document.createElement('p');
  p.textContent = text;

  return p;
}

function createH1(text) {
  const h = document.createElement('h1');
  h.textContent = text;

  return h;
}

function createContact() {
  const contactCard = document.createElement('div');
  contactCard.classList.add('contact-card');

  const time = createH1('TIME');
  const timePara = createPara('MON - SUN: 8AM - 11PM');
  timePara.classList.add('time');

  const address = createH1('ADDRESS');
  const addressPara = createPara('58N 018, 439 East District');
  addressPara.classList.add('address');

  const phone = createH1('PHONE');
  const phonePara = createPara('+385 99 771 7614');
  phonePara.classList.add('phone');

  contactCard.appendChild(time);
  contactCard.appendChild(timePara);

  contactCard.appendChild(address);
  contactCard.appendChild(addressPara);

  contactCard.appendChild(phone);
  contactCard.appendChild(phonePara);

  return contactCard;
}

function createMain() {
  const main = document.createElement('main');
  main.setAttribute('id', 'main');
  main.classList.add('main', 'container');

  const contact = createContact();

  main.appendChild(contact);

  return main;
}

function loadContact() {
  const content = document.getElementById('content');

  const contact = createMain();

  content.appendChild(contact);
}

export default loadContact;
