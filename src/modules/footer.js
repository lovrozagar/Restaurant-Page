function createFooter() {
  const footer = document.createElement('footer');
  footer.classList.add('footer');
  footer.setAttribute('id', 'footer');

  const githubText = document.createElement('p');
  githubText.textContent = 'lovrozagar';

  const githubLogo = document.createElement('img');
  githubLogo.src = './assets/git.png';

  footer.appendChild(githubText);
  footer.appendChild(githubLogo);

  return footer;
}

function loadSharedFooter() {
  const content = document.getElementById('content');

  const footer = createFooter();

  content.appendChild(footer);
}

export default loadSharedFooter;
