/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modules/contact.js":
/*!********************************!*\
  !*** ./src/modules/contact.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function createPara(text) {
  var p = document.createElement('p');
  p.textContent = text;
  return p;
}
function createH1(text) {
  var h = document.createElement('h1');
  h.textContent = text;
  return h;
}
function createContact() {
  var contactCard = document.createElement('div');
  contactCard.classList.add('contact-card');
  var time = createH1('TIME');
  var timePara = createPara('MON - SUN: 8AM - 11PM');
  timePara.classList.add('time');
  var address = createH1('ADDRESS');
  var addressPara = createPara('58N 018, 439 East District');
  addressPara.classList.add('address');
  var phone = createH1('PHONE');
  var phonePara = createPara('+385 99 771 7614');
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
  var main = document.createElement('main');
  main.setAttribute('id', 'main');
  main.classList.add('main', 'container');
  var contact = createContact();
  main.appendChild(contact);
  return main;
}
function loadContact() {
  var content = document.getElementById('content');
  var contact = createMain();
  content.appendChild(contact);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadContact);

/***/ }),

/***/ "./src/modules/footer.js":
/*!*******************************!*\
  !*** ./src/modules/footer.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function createFooter() {
  var footer = document.createElement('footer');
  footer.classList.add('footer');
  footer.setAttribute('id', 'footer');
  var githubText = document.createElement('p');
  githubText.textContent = 'lovrozagar';
  var githubLogo = document.createElement('img');
  githubLogo.src = './assets/git.png';
  footer.appendChild(githubText);
  footer.appendChild(githubLogo);
  return footer;
}
function loadSharedFooter() {
  var content = document.getElementById('content');
  var footer = createFooter();
  content.appendChild(footer);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadSharedFooter);

/***/ }),

/***/ "./src/modules/header.js":
/*!*******************************!*\
  !*** ./src/modules/header.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function createHeader() {
  var header = document.createElement('header');
  header.classList.add('header');
  var container = document.createElement('div');
  container.classList.add('container');
  header.appendChild(container);
  var titleContainer = document.createElement('div');
  titleContainer.classList.add('title-container');
  container.appendChild(titleContainer);
  var title = document.createElement('h1');
  title.textContent = 'Dragon Tail';
  title.classList.add('title');
  titleContainer.appendChild(title);

  // NAV
  var nav = createNav();
  header.appendChild(nav);
  return header;
}
function createNav() {
  var nav = document.createElement('nav');
  nav.classList.add('nav');
  var container = document.createElement('div');
  container.classList.add('container');
  nav.appendChild(container);
  var buttonHome = document.createElement('button');
  buttonHome.textContent = 'Home';
  buttonHome.setAttribute('id', 'home');
  buttonHome.classList.add('home');
  var buttonMenu = document.createElement('button');
  buttonMenu.textContent = 'Menu';
  buttonMenu.setAttribute('id', 'menu');
  buttonMenu.classList.add('menu');
  var buttonContact = document.createElement('button');
  buttonContact.textContent = 'Contact';
  buttonContact.setAttribute('id', 'contact');
  buttonContact.classList.add('contact');
  container.appendChild(buttonHome);
  container.appendChild(buttonMenu);
  container.appendChild(buttonContact);
  return nav;
}
function loadSharedHeader() {
  var content = document.getElementById('content');
  var header = createHeader();
  content.appendChild(header);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadSharedHeader);

/***/ }),

/***/ "./src/modules/home.js":
/*!*****************************!*\
  !*** ./src/modules/home.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function description() {
  var descriptionEl = document.createElement('div');
  descriptionEl.classList.add('description');

  // Description para
  var para = document.createElement('p');
  var span = document.createElement('span');
  span.textContent = "Does a low class warrior like yourself experience fear when gazing\n              eyes upon the mighty Dragon Tail? Or are you ready to ascend to\n              the next level and become a Super spicy eater?";
  span.classList.add('orange-text');
  para.appendChild(span);

  // Try it button
  var dragonTail = document.createElement('div');
  dragonTail.classList.add('dragon-tail');
  var tryItButton = document.createElement('button');
  tryItButton.textContent = 'Try the Dragon Tail';
  tryItButton.classList.add('try');
  dragonTail.appendChild(tryItButton);
  descriptionEl.appendChild(para);
  descriptionEl.appendChild(dragonTail);
  return descriptionEl;
}
function createCardVegeta() {
  var card = document.createElement('div');
  card.classList.add('card', 'vegeta');

  // card gif
  var profilePhoto = document.createElement('div');
  profilePhoto.classList.add('profile-photo');
  var image = document.createElement('img');
  image.src = './assets/vegetaEating.gif';
  profilePhoto.appendChild(image);

  // card text
  var text = document.createElement('div');
  text.classList.add('text');
  var para = document.createElement('p');
  para.textContent = "This is the best restaurant on the planet, MY restaurant and you\n              think you can just waltz in here and become the Dragon Tail\n              slayer? Yeah right clown, hmph.";
  para.classList.add('quote');
  var signature = document.createElement('p');
  signature.textContent = "-Vegeta, Saiyan prince";
  signature.classList.add('signature');
  text.appendChild(para);
  text.appendChild(signature);
  card.appendChild(profilePhoto);
  card.appendChild(text);
  return card;
}
function createCardGoku() {
  var card = document.createElement('div');
  card.classList.add('card', 'goku');

  // card gif
  var profilePhoto = document.createElement('div');
  profilePhoto.classList.add('profile-photo');
  var image = document.createElement('img');
  image.src = './assets/gokuEating.gif';
  profilePhoto.appendChild(image);

  // card text
  var text = document.createElement('div');
  text.classList.add('text');
  var para = document.createElement('p');
  para.textContent = "Hey come down Vegeta, its not like our new Guest has a chance\n              against me, heheheh, I've been training.";
  para.classList.add('quote');
  var signature = document.createElement('p');
  signature.textContent = "-Goku, our hero";
  signature.classList.add('signature');
  text.appendChild(para);
  text.appendChild(signature);
  card.appendChild(profilePhoto);
  card.appendChild(text);
  return card;
}
function createMain() {
  var main = document.createElement('main');
  main.setAttribute('id', 'main');
  main.classList.add('main', 'container');
  var descriptionEl = description();
  var card = createCardVegeta();
  var card2 = createCardGoku();
  main.appendChild(descriptionEl);
  main.appendChild(card);
  main.appendChild(card2);
  return main;
}
function loadHome() {
  var content = document.getElementById('content');
  var home = createMain();
  content.appendChild(home);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadHome);

/***/ }),

/***/ "./src/modules/menu.js":
/*!*****************************!*\
  !*** ./src/modules/menu.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function makeCard(srcString, quoteString, signatureString) {
  var card = document.createElement('div');
  card.classList.add('card');

  // card gif
  var profilePhoto = document.createElement('div');
  profilePhoto.classList.add('profile-photo');
  var image = document.createElement('img');
  image.src = srcString;
  profilePhoto.appendChild(image);

  // card text
  var text = document.createElement('div');
  text.classList.add('text');
  var para = document.createElement('p');
  para.textContent = quoteString;
  para.classList.add('quote');
  var signature = document.createElement('p');
  signature.textContent = signatureString;
  signature.classList.add('signature');
  text.appendChild(para);
  text.appendChild(signature);
  card.appendChild(profilePhoto);
  card.appendChild(text);
  return card;
}
function createMain() {
  var main = document.createElement('main');
  main.setAttribute('id', 'main');
  main.classList.add('main', 'container');
  var dragonTail = makeCard('./assets/dragonTail.png', "Dragon's Tail (House Specialty) (Very Hot)", '199.99 Z$');
  var riceBalls = makeCard('./assets/riceBalls.png', 'Japanese Rice Balls', '29.99 Z$');
  var seafood = makeCard('./assets/seafood.png', 'Seafood (salmon roe, salmon, shrimp ...)', '69.99 Z$');
  var chicken = makeCard('./assets/chicken.png', 'Whole Chicken with Rice, Mushrooms and Vegetables', '89.99 Z$');
  var waffles = makeCard('./assets/waffles.png', 'Blueberry and Strawberry Waffles', '34.99 Z$');
  main.appendChild(dragonTail);
  main.appendChild(riceBalls);
  main.appendChild(seafood);
  main.appendChild(chicken);
  main.appendChild(waffles);
  return main;
}
function loadMenu() {
  var content = document.getElementById('content');
  var menu = createMain();
  content.appendChild(menu);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadMenu);

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.css":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.css ***!
  \**********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/fonts/SaiyanSans.woff2 */ "./src/assets/fonts/SaiyanSans.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/fonts/SaiyanSans.woff */ "./src/assets/fonts/SaiyanSans.woff"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/mangaBackground.jpg */ "./src/assets/mangaBackground.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/tails.jpg */ "./src/assets/tails.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Oswald:wght@200;300;400;500;600;700&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Indie+Flower&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n  font-family: \"Saiyan Sans\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format(\"woff2\"), url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format(\"woff\");\n  font-weight: normal;\n  font-style: normal;\n  font-display: swap;\n}\n:root {\n  --container-width: 1000px;\n  --gradient: linear-gradient(\n    45deg,\n    hsl(16deg 100% 50%) 0%,\n    hsl(21deg 100% 50%) 8%,\n    hsl(25deg 100% 50%) 17%,\n    hsl(29deg 100% 50%) 25%,\n    hsl(32deg 100% 50%) 33%,\n    hsl(36deg 100% 50%) 42%,\n    hsl(39deg 100% 50%) 50%,\n    hsl(41deg 100% 50%) 58%,\n    hsl(42deg 100% 50%) 67%,\n    hsl(44deg 100% 50%) 75%,\n    hsl(46deg 100% 50%) 83%,\n    hsl(47deg 100% 50%) 92%,\n    hsl(49deg 100% 50%) 100%\n  );\n  --header-background-color: #fbfcfc;\n  --black: #000000;\n  --white: #ffffff;\n  --orange: #ffa500;\n  --font-md: 1rem;\n  --font-md-lg: 2rem;\n  --font-lg: 3.5rem;\n  --font-xl: 5rem;\n  --font-xxl: 7.5rem;\n}\n\n* {\n  box-sizing: border-box;\n}\n\nhtml,\nbutton {\n  font-family: \"Oswald\", sans-serif;\n}\n\nbutton {\n  border: none;\n}\n\n#content {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n  background-position-x: center;\n  min-height: calc(100vh + 40px);\n  position: relative;\n}\n\n.header {\n  text-align: center;\n  background-color: var(--header-background-color);\n}\n\n.container {\n  max-width: var(--container-width);\n  margin: 0 auto;\n}\n\n.title {\n  font-family: \"Saiyan Sans\", sans-serif;\n  font-size: var(--font-xxl);\n  /* word-spacing: -2vmin; */\n  color: var(--white);\n  background: -webkit-linear-gradient(yellow, red);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  -webkit-text-stroke: 0.3vmin var(--black);\n  position: relative;\n  margin: 1rem 0 0 0;\n}\n\n.title::after {\n  position: absolute;\n  content: \"\";\n  height: 6.5rem;\n  width: 6.5rem;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ");\n  background-repeat: no-repeat;\n  background-size: 6.5rem;\n  rotate: 270deg;\n}\n\n.nav,\n.nav .container > button,\n.try,\n.card {\n  color: var(--white);\n  background-color: var(--black);\n}\n\n.nav .container {\n  display: grid;\n  align-items: center;\n  align-content: center;\n  grid-template-columns: 1fr 1fr 1fr;\n  border-collapse: separate;\n}\n\n.nav .container > button {\n  font-size: var(--font-md-lg);\n  font-weight: bold;\n  padding: 0.25rem 0;\n}\n\n.main {\n  display: flex;\n  align-items: flex-start;\n  flex-direction: column;\n  padding: 1rem 1rem 0 1rem;\n}\n\n.description {\n  margin: 3rem 5rem 3rem 1.5rem;\n}\n\n.orange-text {\n  -webkit-box-decoration-break: clone;\n  box-decoration-break: clone;\n  background-color: orange;\n  color: var(--black);\n}\n\n.orange-text,\n.try {\n  line-height: 2.25;\n  font-size: var(--font-md-lg);\n  font-weight: bold;\n  padding: 0.2rem 1.5rem;\n}\n\n.orange-text,\n.contact-card > h1 {\n  box-shadow: 7px 7px 0px 0px rgb(0, 0, 0);\n  -webkit-box-shadow: 7px 7px 0px 0px rgb(0, 0, 0);\n  -moz-box-shadow: 7px 7px 0px 0px rgb(0, 0, 0);\n}\n\n.dragon-tail {\n  margin-top: 2.5rem;\n  text-align: end;\n}\n\n.try {\n  -webkit-box-decoration-break: clone;\n  box-decoration-break: clone;\n  background-color: var(--black);\n  color: var(--orange);\n}\n\n.try,\n.contact-card > p {\n  box-shadow: 7px 7px 0px 0px rgb(255, 165, 0);\n  -webkit-box-shadow: 7px 7px 0px 0px rgb(255, 165, 0);\n  -moz-box-shadow: 7px 7px 0px 0px rgb(255, 165, 0);\n}\n\n.card {\n  align-self: center;\n  max-width: 35rem;\n  border-radius: 1.5rem;\n  padding: 2rem;\n  display: grid;\n  grid-template-columns: 1fr;\n  gap: 1.5rem;\n  margin: 2rem 0;\n}\n\n.goku {\n  margin-bottom: calc(3rem + 40px);\n}\n\n.profile-photo {\n  display: flex;\n  justify-content: center;\n  overflow: hidden;\n  /* object-fit: fill; */\n  border-radius: 1rem;\n}\n\nimg {\n  max-width: 35rem;\n}\n\n.text {\n  font-size: var(--font-md-lg);\n  margin: 0;\n}\n\n.signature {\n  text-align: end;\n  font-style: italic;\n  color: rgb(0, 255, 17);\n  margin-top: 1.5rem;\n}\n\n.contact-card {\n  text-align: center;\n  display: inline-flex;\n  flex-direction: column;\n  justify-content: center;\n  gap: 1rem;\n  margin: 2rem auto;\n}\n\n.contact-card > * {\n  padding: 1rem 3rem;\n}\n\n.contact-card > h1 {\n  line-height: normal;\n  font-size: 2rem;\n  font-weight: bold;\n  padding: 0.35vmin 2vmin;\n  -webkit-box-decoration-break: clone;\n  box-decoration-break: clone;\n  background-color: orange;\n  color: var(--black);\n}\n\n.contact-card > p {\n  font-size: 1.75rem;\n  font-weight: bold;\n  -webkit-box-decoration-break: clone;\n  box-decoration-break: clone;\n  background-color: var(--black);\n  color: var(--orange);\n  margin-bottom: 2rem;\n}\n\n.footer {\n  width: max-content;\n  margin: 0 auto;\n  display: flex;\n  align-items: center;\n  position: absolute;\n  left: 50%;\n  bottom: 0;\n  transform: translate(-50%, 0);\n}\n\n.footer > img {\n  height: 40px;\n}", "",{"version":3,"sources":["webpack://./src/styles/main.css"],"names":[],"mappings":"AAGA;EACE,0BAAA;EACA,oHAAA;EAEA,mBAAA;EACA,kBAAA;EACA,kBAAA;AADF;AAIA;EACE,yBAAA;EACA;;;;;;;;;;;;;;;GAAA;EAgBA,kCAAA;EACA,gBAAA;EACA,gBAAA;EACA,iBAAA;EACA,eAAA;EACA,kBAAA;EACA,iBAAA;EACA,eAAA;EACA,kBAAA;AAFF;;AAKA;EACE,sBAAA;AAFF;;AAKA;;EAEE,iCAAA;AAFF;;AAKA;EACE,YAAA;AAFF;;AAKA;EACE,yDAAA;EACA,6BAAA;EACA,8BAAA;EACA,kBAAA;AAFF;;AAKA;EACE,kBAAA;EACA,gDAAA;AAFF;;AAKA;EACE,iCAAA;EACA,cAAA;AAFF;;AAKA;EACE,sCAAA;EACA,0BAAA;EACA,0BAAA;EACA,mBAAA;EACA,gDAAA;EACA,6BAAA;EACA,oCAAA;EACA,yCAAA;EACA,kBAAA;EACA,kBAAA;AAFF;;AAKA;EACE,kBAAA;EACA,WAAA;EACA,cAAA;EACA,aAAA;EACA,yDAAA;EACA,4BAAA;EACA,uBAAA;EACA,cAAA;AAFF;;AAKA;;;;EAIE,mBAAA;EACA,8BAAA;AAFF;;AAKA;EACE,aAAA;EACA,mBAAA;EACA,qBAAA;EACA,kCAAA;EACA,yBAAA;AAFF;;AAKA;EACE,4BAAA;EACA,iBAAA;EACA,kBAAA;AAFF;;AAKA;EACE,aAAA;EACA,uBAAA;EACA,sBAAA;EACA,yBAAA;AAFF;;AAKA;EACE,6BAAA;AAFF;;AAKA;EACE,mCAAA;EACA,2BAAA;EACA,wBAAA;EACA,mBAAA;AAFF;;AAKA;;EAEE,iBAAA;EACA,4BAAA;EACA,iBAAA;EACA,sBAAA;AAFF;;AAKA;;EAEE,wCAAA;EACA,gDAAA;EACA,6CAAA;AAFF;;AAKA;EACE,kBAAA;EACA,eAAA;AAFF;;AAKA;EACE,mCAAA;EACA,2BAAA;EACA,8BAAA;EACA,oBAAA;AAFF;;AAKA;;EAEE,4CAAA;EACA,oDAAA;EACA,iDAAA;AAFF;;AAKA;EACE,kBAAA;EACA,gBAAA;EACA,qBAAA;EACA,aAAA;EACA,aAAA;EACA,0BAAA;EACA,WAAA;EACA,cAAA;AAFF;;AAKA;EACE,gCAAA;AAFF;;AAKA;EACE,aAAA;EACA,uBAAA;EACA,gBAAA;EACA,sBAAA;EACA,mBAAA;AAFF;;AAKA;EACE,gBAAA;AAFF;;AAKA;EACE,4BAAA;EACA,SAAA;AAFF;;AAKA;EACE,eAAA;EACA,kBAAA;EACA,sBAAA;EACA,kBAAA;AAFF;;AAKA;EACE,kBAAA;EACA,oBAAA;EACA,sBAAA;EACA,uBAAA;EACA,SAAA;EACA,iBAAA;AAFF;;AAKA;EACE,kBAAA;AAFF;;AAKA;EACE,mBAAA;EACA,eAAA;EACA,iBAAA;EACA,uBAAA;EACA,mCAAA;EACA,2BAAA;EACA,wBAAA;EACA,mBAAA;AAFF;;AAKA;EACE,kBAAA;EACA,iBAAA;EACA,mCAAA;EACA,2BAAA;EACA,8BAAA;EACA,oBAAA;EACA,mBAAA;AAFF;;AAKA;EACE,kBAAA;EACA,cAAA;EACA,aAAA;EACA,mBAAA;EACA,kBAAA;EACA,SAAA;EACA,SAAA;EACA,6BAAA;AAFF;;AAKA;EACE,YAAA;AAFF","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Oswald:wght@200;300;400;500;600;700&display=swap');\n@import url('https://fonts.googleapis.com/css2?family=Indie+Flower&display=swap');\n\n@font-face {\n  font-family: 'Saiyan Sans';\n  src: url('../assets/fonts/SaiyanSans.woff2') format('woff2'),\n    url('../assets/fonts/SaiyanSans.woff') format('woff');\n  font-weight: normal;\n  font-style: normal;\n  font-display: swap;\n}\n\n:root {\n  --container-width: 1000px;\n  --gradient: linear-gradient(\n    45deg,\n    hsl(16deg 100% 50%) 0%,\n    hsl(21deg 100% 50%) 8%,\n    hsl(25deg 100% 50%) 17%,\n    hsl(29deg 100% 50%) 25%,\n    hsl(32deg 100% 50%) 33%,\n    hsl(36deg 100% 50%) 42%,\n    hsl(39deg 100% 50%) 50%,\n    hsl(41deg 100% 50%) 58%,\n    hsl(42deg 100% 50%) 67%,\n    hsl(44deg 100% 50%) 75%,\n    hsl(46deg 100% 50%) 83%,\n    hsl(47deg 100% 50%) 92%,\n    hsl(49deg 100% 50%) 100%\n  );\n  --header-background-color: #fbfcfc;\n  --black: #000000;\n  --white: #ffffff;\n  --orange: #ffa500;\n  --font-md: 1rem;\n  --font-md-lg: 2rem;\n  --font-lg: 3.5rem;\n  --font-xl: 5rem;\n  --font-xxl: 7.5rem;\n}\n\n* {\n  box-sizing: border-box;\n}\n\nhtml,\nbutton {\n  font-family: 'Oswald', sans-serif;\n}\n\nbutton {\n  border: none;\n}\n\n#content {\n  background-image: url('../assets/mangaBackground.jpg');\n  background-position-x: center;\n  min-height: calc(100vh + 40px);\n  position: relative;\n}\n\n.header {\n  text-align: center;\n  background-color: var(--header-background-color);\n}\n\n.container {\n  max-width: var(--container-width);\n  margin: 0 auto;\n}\n\n.title {\n  font-family: 'Saiyan Sans', sans-serif;\n  font-size: var(--font-xxl);\n  /* word-spacing: -2vmin; */\n  color: var(--white);\n  background: -webkit-linear-gradient(yellow, red);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  -webkit-text-stroke: 0.3vmin var(--black);\n  position: relative;\n  margin: 1rem 0 0 0;\n}\n\n.title::after {\n  position: absolute;\n  content: '';\n  height: 6.5rem;\n  width: 6.5rem;\n  background-image: url('../assets/tails.jpg');\n  background-repeat: no-repeat;\n  background-size: 6.5rem;\n  rotate: 270deg;\n}\n\n.nav,\n.nav .container > button,\n.try,\n.card {\n  color: var(--white);\n  background-color: var(--black);\n}\n\n.nav .container {\n  display: grid;\n  align-items: center;\n  align-content: center;\n  grid-template-columns: 1fr 1fr 1fr;\n  border-collapse: separate;\n}\n\n.nav .container > button {\n  font-size: var(--font-md-lg);\n  font-weight: bold;\n  padding: 0.25rem 0;\n}\n\n.main {\n  display: flex;\n  align-items: flex-start;\n  flex-direction: column;\n  padding: 1rem 1rem 0 1rem;\n}\n\n.description {\n  margin: 3rem 5rem 3rem 1.5rem;\n}\n\n.orange-text {\n  -webkit-box-decoration-break: clone;\n  box-decoration-break: clone;\n  background-color: orange;\n  color: var(--black);\n}\n\n.orange-text,\n.try {\n  line-height: 2.25;\n  font-size: var(--font-md-lg);\n  font-weight: bold;\n  padding: 0.2rem 1.5rem;\n}\n\n.orange-text,\n.contact-card > h1 {\n  box-shadow: 7px 7px 0px 0px rgba(0, 0, 0, 1);\n  -webkit-box-shadow: 7px 7px 0px 0px rgba(0, 0, 0, 1);\n  -moz-box-shadow: 7px 7px 0px 0px rgba(0, 0, 0, 1);\n}\n\n.dragon-tail {\n  margin-top: 2.5rem;\n  text-align: end;\n}\n\n.try {\n  -webkit-box-decoration-break: clone;\n  box-decoration-break: clone;\n  background-color: var(--black);\n  color: var(--orange);\n}\n\n.try,\n.contact-card > p {\n  box-shadow: 7px 7px 0px 0px rgba(255, 165, 0, 1);\n  -webkit-box-shadow: 7px 7px 0px 0px rgba(255, 165, 0, 1);\n  -moz-box-shadow: 7px 7px 0px 0px rgba(255, 165, 0, 1);\n}\n\n.card {\n  align-self: center;\n  max-width: 35rem;\n  border-radius: 1.5rem;\n  padding: 2rem;\n  display: grid;\n  grid-template-columns: 1fr;\n  gap: 1.5rem;\n  margin: 2rem 0;\n}\n\n.goku {\n  margin-bottom: calc(3rem + 40px);\n}\n\n.profile-photo {\n  display: flex;\n  justify-content: center;\n  overflow: hidden;\n  /* object-fit: fill; */\n  border-radius: 1rem;\n}\n\nimg {\n  max-width: 35rem;\n}\n\n.text {\n  font-size: var(--font-md-lg);\n  margin: 0;\n}\n\n.signature {\n  text-align: end;\n  font-style: italic;\n  color: rgb(0, 255, 17);\n  margin-top: 1.5rem;\n}\n\n.contact-card {\n  text-align: center;\n  display: inline-flex;\n  flex-direction: column;\n  justify-content: center;\n  gap: 1rem;\n  margin: 2rem auto;\n}\n\n.contact-card > * {\n  padding: 1rem 3rem;\n}\n\n.contact-card > h1 {\n  line-height: normal;\n  font-size: 2rem;\n  font-weight: bold;\n  padding: 0.35vmin 2vmin;\n  -webkit-box-decoration-break: clone;\n  box-decoration-break: clone;\n  background-color: orange;\n  color: var(--black);\n}\n\n.contact-card > p {\n  font-size: 1.75rem;\n  font-weight: bold;\n  -webkit-box-decoration-break: clone;\n  box-decoration-break: clone;\n  background-color: var(--black);\n  color: var(--orange);\n  margin-bottom: 2rem;\n}\n\n.footer {\n  width: max-content;\n  margin: 0 auto;\n  display: flex;\n  align-items: center;\n  position: absolute;\n  left: 50%;\n  bottom: 0;\n  transform: translate(-50%, 0);\n}\n\n.footer > img {\n  height: 40px;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/reset.css":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/reset.css ***!
  \***********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "html, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, menu, nav, section {\n  display: block;\n}\n\nbody {\n  line-height: 1;\n}\n\nol, ul {\n  list-style: none;\n}\n\nblockquote, q {\n  quotes: none;\n}\n\nblockquote:before, blockquote:after,\nq:before, q:after {\n  content: \"\";\n  content: none;\n}\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}", "",{"version":3,"sources":["webpack://./src/styles/reset.css"],"names":[],"mappings":"AAAA;;;;;;;;;;;;;EAaC,SAAA;EACA,UAAA;EACA,SAAA;EACA,eAAA;EACA,aAAA;EACA,wBAAA;AACD;;AACA,gDAAA;AACA;;EAEC,cAAA;AAED;;AAAA;EACC,cAAA;AAGD;;AADA;EACC,gBAAA;AAID;;AAFA;EACC,YAAA;AAKD;;AAHA;;EAEC,WAAA;EACA,aAAA;AAMD;;AAJA;EACC,yBAAA;EACA,iBAAA;AAOD","sourcesContent":["html, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/assets/chicken.png":
/*!********************************!*\
  !*** ./src/assets/chicken.png ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/chicken.png");

/***/ }),

/***/ "./src/assets/dragonTail.png":
/*!***********************************!*\
  !*** ./src/assets/dragonTail.png ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/dragonTail.png");

/***/ }),

/***/ "./src/assets/git.png":
/*!****************************!*\
  !*** ./src/assets/git.png ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/git.png");

/***/ }),

/***/ "./src/assets/gokuEating.gif":
/*!***********************************!*\
  !*** ./src/assets/gokuEating.gif ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/gokuEating.gif");

/***/ }),

/***/ "./src/assets/riceBalls.png":
/*!**********************************!*\
  !*** ./src/assets/riceBalls.png ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/riceBalls.png");

/***/ }),

/***/ "./src/assets/seafood.png":
/*!********************************!*\
  !*** ./src/assets/seafood.png ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/seafood.png");

/***/ }),

/***/ "./src/assets/tail.png":
/*!*****************************!*\
  !*** ./src/assets/tail.png ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/tail.png");

/***/ }),

/***/ "./src/assets/vegetaEating.gif":
/*!*************************************!*\
  !*** ./src/assets/vegetaEating.gif ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/vegetaEating.gif");

/***/ }),

/***/ "./src/assets/waffles.png":
/*!********************************!*\
  !*** ./src/assets/waffles.png ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/waffles.png");

/***/ }),

/***/ "./src/styles/main.css":
/*!*****************************!*\
  !*** ./src/styles/main.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./main.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/reset.css":
/*!******************************!*\
  !*** ./src/styles/reset.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./reset.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/reset.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/assets/fonts/SaiyanSans.woff":
/*!******************************************!*\
  !*** ./src/assets/fonts/SaiyanSans.woff ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "SaiyanSans.woff";

/***/ }),

/***/ "./src/assets/fonts/SaiyanSans.woff2":
/*!*******************************************!*\
  !*** ./src/assets/fonts/SaiyanSans.woff2 ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "SaiyanSans.woff2";

/***/ }),

/***/ "./src/assets/mangaBackground.jpg":
/*!****************************************!*\
  !*** ./src/assets/mangaBackground.jpg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "mangaBackground.jpg";

/***/ }),

/***/ "./src/assets/tails.jpg":
/*!******************************!*\
  !*** ./src/assets/tails.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "tails.jpg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"bundle": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/header */ "./src/modules/header.js");
/* harmony import */ var _modules_home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/home */ "./src/modules/home.js");
/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/menu */ "./src/modules/menu.js");
/* harmony import */ var _modules_contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/contact */ "./src/modules/contact.js");
/* harmony import */ var _modules_footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/footer */ "./src/modules/footer.js");
/* harmony import */ var _styles_reset_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles/reset.css */ "./src/styles/reset.css");
/* harmony import */ var _styles_main_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles/main.css */ "./src/styles/main.css");
/* harmony import */ var _assets_tail_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./assets/tail.png */ "./src/assets/tail.png");
/* harmony import */ var _assets_vegetaEating_gif__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./assets/vegetaEating.gif */ "./src/assets/vegetaEating.gif");
/* harmony import */ var _assets_gokuEating_gif__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./assets/gokuEating.gif */ "./src/assets/gokuEating.gif");
/* harmony import */ var _assets_riceBalls_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./assets/riceBalls.png */ "./src/assets/riceBalls.png");
/* harmony import */ var _assets_seafood_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./assets/seafood.png */ "./src/assets/seafood.png");
/* harmony import */ var _assets_chicken_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./assets/chicken.png */ "./src/assets/chicken.png");
/* harmony import */ var _assets_waffles_png__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./assets/waffles.png */ "./src/assets/waffles.png");
/* harmony import */ var _assets_dragonTail_png__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./assets/dragonTail.png */ "./src/assets/dragonTail.png");
/* harmony import */ var _assets_git_png__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./assets/git.png */ "./src/assets/git.png");
















function addNavEvents() {
  var content = document.getElementById('content');
  var homeButton = document.getElementById('home');
  var menuButton = document.getElementById('menu');
  var contactButton = document.getElementById('contact');
  homeButton.addEventListener('click', function () {
    var main = document.getElementById('main');
    content.removeChild(main);
    content.removeChild(footer);
    (0,_modules_home__WEBPACK_IMPORTED_MODULE_1__["default"])();
    (0,_modules_footer__WEBPACK_IMPORTED_MODULE_4__["default"])();
  });
  menuButton.addEventListener('click', function () {
    var main = document.getElementById('main');
    content.removeChild(main);
    content.removeChild(footer);
    (0,_modules_menu__WEBPACK_IMPORTED_MODULE_2__["default"])();
    (0,_modules_footer__WEBPACK_IMPORTED_MODULE_4__["default"])();
  });
  contactButton.addEventListener('click', function () {
    var main = document.getElementById('main');
    var footer = document.getElementById('footer');
    content.removeChild(main);
    content.removeChild(footer);
    (0,_modules_contact__WEBPACK_IMPORTED_MODULE_3__["default"])();
    (0,_modules_footer__WEBPACK_IMPORTED_MODULE_4__["default"])();
  });
}
(0,_modules_header__WEBPACK_IMPORTED_MODULE_0__["default"])();
(0,_modules_home__WEBPACK_IMPORTED_MODULE_1__["default"])();
(0,_modules_footer__WEBPACK_IMPORTED_MODULE_4__["default"])();
addNavEvents();
})();

/******/ })()
;
//# sourceMappingURL=bundlec311c692c2f6648ec462.js.map