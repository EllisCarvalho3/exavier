// efeito digitação
const titleText = 'Beleza com delicadeza'; 'Amor';
const descText =
  'Um espaço criado para realçar sua essência com cuidado, arte e sofisticação.';

let ti = 0;
let di = 0;
let deleting = false;

function typingEffect() {
  const title = document.getElementById('type-title');
  const desc = document.getElementById('type-text');

  if (!deleting) {
    title.textContent = titleText.slice(0, ti++);
    desc.textContent = descText.slice(0, di++);
    if (ti > titleText.length && di > descText.length) {
      setTimeout(() => (deleting = true), 2000);
    }
  } else {
    title.textContent = titleText.slice(0, --ti);
    desc.textContent = descText.slice(0, --di);
    if (ti === 0 && di === 0) deleting = false;
  }
}

setInterval(typingEffect, 80);

/* slideshow manual corrigido */
let slideIndex = 0;

const track = document.getElementById('track');
const slides = Array.from(track.children);
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

function getSlideWidth() {
  const slide = slides[0];
  const gap = parseFloat(getComputedStyle(track).gap) || 0;
  return slide.offsetWidth + gap;
}

function getVisibleSlides() {
  const slideshow = document.querySelector('.slideshow');
  return Math.floor(slideshow.offsetWidth / getSlideWidth());
}

function updateButtons(maxIndex) {
  prevBtn.disabled = slideIndex === 0;
  nextBtn.disabled = slideIndex === maxIndex;
}

function moveSlide(direction) {
  const visibleSlides = getVisibleSlides();
  const maxIndex = Math.max(0, slides.length - visibleSlides);

  slideIndex += direction;
  slideIndex = Math.max(0, Math.min(slideIndex, maxIndex));

  track.style.transform = `translateX(${-slideIndex * getSlideWidth()}px)`;

  updateButtons(maxIndex);
}

prevBtn.addEventListener('click', () => moveSlide(-1));
nextBtn.addEventListener('click', () => moveSlide(1));

window.addEventListener('resize', () => moveSlide(0));

updateButtons(Math.max(0, slides.length - getVisibleSlides()));

/* modal */
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modalImg');
const closeModal = document.getElementById('closeModal');

[...slides].forEach(img => {
  img.addEventListener('click', () => {
    modalImg.src = img.src;
    modal.classList.add('active');
  });
});

closeModal.addEventListener('click', () => {
  modal.classList.remove('active');
});

/* fecha ao clicar fora da imagem */
modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.classList.remove('active');
  }
});
