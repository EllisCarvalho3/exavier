/* Typing effect */
const titleText = 'Beleza com delicadeza';
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

/* Slideshow manual */
let slideIndex = 0;
const track = document.getElementById('track');
const slides = track.children;

document.getElementById('prev').onclick = () => moveSlide(-1);
document.getElementById('next').onclick = () => moveSlide(1);

function moveSlide(direction) {
  const slideWidth = slides[0].offsetWidth + 24;
  slideIndex += direction;
  slideIndex = Math.max(0, Math.min(slideIndex, slides.length - 1));
  track.style.transform = `translateX(${-slideIndex * slideWidth}px)`;
}

/* Modal */
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modalImg');

[...slides].forEach(img => {
  img.addEventListener('click', () => {
    modalImg.src = img.src;
    modal.classList.add('active');
  });
});

document.getElementById('closeModal').onclick = () => {
  modal.classList.remove('active');
};
