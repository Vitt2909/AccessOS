import { pages } from './pages.js';

const frame = document.getElementById('prototype-frame');
const counter = document.getElementById('counter');
const prev = document.getElementById('prev');
const next = document.getElementById('next');

let currentIndex = 0;

function renderPage(index) {
  const page = pages[index];

  frame.innerHTML = `
    <article class="screen">
      <small class="screen-id">node ${page.id}</small>
      <h2>${page.title}</h2>
      <p>${page.description}</p>
      <button class="cta" type="button">${page.cta}</button>
    </article>
  `;

  counter.textContent = `${index + 1} / ${pages.length}`;
  prev.disabled = index === 0;
  next.disabled = index === pages.length - 1;
}

prev.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex -= 1;
    renderPage(currentIndex);
  }
});

next.addEventListener('click', () => {
  if (currentIndex < pages.length - 1) {
    currentIndex += 1;
    renderPage(currentIndex);
  }
});

renderPage(currentIndex);
