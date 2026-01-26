// efeito digitação (ciclo)
const typingData = [
  {
    title: "Beleza com delicadeza",
    desc: "Um espaço criado para realçar sua essência com cuidado, arte e sofisticação."
  },
  {
    title: "Autocuidado é poder",
    desc: "Cada detalhe pensado para elevar sua autoestima e revelar sua melhor versão."
  },
  {
    title: "Arte que valoriza você",
    desc: "Maquiagem e design de sobrancelhas feitos para destacar sua beleza natural."
  }
];

let itemIndex = 0;
let charIndex = 0;
let deleting = false;

const titleEl = document.getElementById("type-title");
const descEl = document.getElementById("type-text");

function typingEffect() {
  const current = typingData[itemIndex];

  if (!deleting) {
    titleEl.textContent = current.title.slice(0, charIndex);
    descEl.textContent = current.desc.slice(0, charIndex);
    charIndex++;

    if (
      charIndex > current.title.length &&
      charIndex > current.desc.length
    ) {
      setTimeout(() => (deleting = true), 2000);
    }
  } else {
    titleEl.textContent = current.title.slice(0, charIndex);
    descEl.textContent = current.desc.slice(0, charIndex);
    charIndex--;

    if (charIndex === 0) {
      deleting = false;
      itemIndex = (itemIndex + 1) % typingData.length;
    }
  }
}

setInterval(typingEffect, 80);


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

// hamburger menu
const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('header nav');

toggle.addEventListener('click', () => {
  nav.classList.toggle('active');
});
