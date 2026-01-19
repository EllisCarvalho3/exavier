const titleText = 'Beleza com delicadeza';
const descText = 'Um espaço criado para realçar sua essência com cuidado, arte e sofisticação.';
let ti = 0, di = 0, deleting = false;


function typingEffect() {
const title = document.getElementById('type-title');
const desc = document.getElementById('type-text');


if (!deleting) {
title.textContent = titleText.slice(0, ti++);
desc.textContent = descText.slice(0, di++);
if (ti > titleText.length && di > descText.length) setTimeout(() => deleting = true, 2000);
} else {
title.textContent = titleText.slice(0, --ti);
desc.textContent = descText.slice(0, --di);
if (ti === 0 && di === 0) deleting = false;
}
}


setInterval(typingEffect, 80);


/* Slideshow */
let slideIndex = 0;


function moveSlide(direction) {
const track = document.getElementById('track');
const slides = track.children;
if (!slides.length) return;


const slideWidth = slides[0].offsetWidth + 24;
slideIndex += direction;
slideIndex = Math.max(0, Math.min(slideIndex, slides.length - 1));
track.style.transform = `translateX(${-slideIndex * slideWidth}px)`;
}


/* Modal */
function openModal(src) {
const modal = document.getElementById('modal');
const img = document.getElementById('modalImg');
img.src = src;
modal.classList.add('active');
}


function closeModal() {
document.getElementById('modal').classList.remove('active');
}


document.querySelectorAll('.slide-track img').forEach(img => {
img.addEventListener('click', () => openModal(img.src));
});