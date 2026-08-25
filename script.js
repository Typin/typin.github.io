const tabs = [...document.querySelectorAll('.project-tab')];
const panels = [...document.querySelectorAll('.project-panel')];

function selectProject(project) {
  tabs.forEach((tab) => {
    const selected = tab.dataset.project === project;
    tab.classList.toggle('active', selected);
    tab.setAttribute('aria-selected', selected ? 'true' : 'false');
  });

  panels.forEach((panel) => {
    const selected = panel.id === `project-${project}`;
    panel.classList.toggle('active', selected);
    panel.hidden = !selected;
  });
}

tabs.forEach((tab) => tab.addEventListener('click', () => selectProject(tab.dataset.project)));

document.getElementById('year').textContent = new Date().getFullYear();

const lightbox = document.getElementById('lightbox');
const lightboxImage = lightbox.querySelector('.lightbox-stage img');
const lightboxCounter = lightbox.querySelector('.lightbox-counter');
const prevButton = lightbox.querySelector('.lightbox-prev');
const nextButton = lightbox.querySelector('.lightbox-next');

let currentGallery = [];
let currentIndex = 0;

function showLightboxImage(index) {
  if (!currentGallery.length) return;

  currentIndex = (index + currentGallery.length) % currentGallery.length;
  const button = currentGallery[currentIndex];
  const thumbnail = button.querySelector('img');

  lightboxImage.src = button.dataset.full || thumbnail?.src || '';
  lightboxImage.alt = thumbnail?.alt || 'Expanded game screenshot';
  lightboxCounter.textContent = `${currentIndex + 1} / ${currentGallery.length}`;

  const multiple = currentGallery.length > 1;
  prevButton.hidden = !multiple;
  nextButton.hidden = !multiple;
}

document.querySelectorAll('.screenshots').forEach((gallery) => {
  const buttons = [...gallery.querySelectorAll('.screenshot')];

  buttons.forEach((button, index) => {
    button.addEventListener('click', () => {
      currentGallery = buttons;
      showLightboxImage(index);
      lightbox.showModal();
    });
  });
});

prevButton.addEventListener('click', () => showLightboxImage(currentIndex - 1));
nextButton.addEventListener('click', () => showLightboxImage(currentIndex + 1));

lightbox.querySelector('.lightbox-close').addEventListener('click', () => lightbox.close());

lightbox.addEventListener('click', (event) => {
  if (event.target === lightbox) lightbox.close();
});

document.addEventListener('keydown', (event) => {
  if (!lightbox.open) return;

  if (event.key === 'ArrowLeft') showLightboxImage(currentIndex - 1);
  if (event.key === 'ArrowRight') showLightboxImage(currentIndex + 1);
});
