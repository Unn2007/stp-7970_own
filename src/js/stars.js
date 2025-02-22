let currentSlide = 0;
const slides = document.querySelectorAll('.user-slide');
const slider = document.querySelector('.slider');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

function updateSlider() {
  if (!slider) return;

  const offset = -currentSlide * 100;
  slider.style.transform = `translateX(${offset}%)`;
}

// листаємо
function changeSlide(direction) {
  currentSlide = (currentSlide + direction + slides.length) % slides.length;
  updateSlider();
}

prevButton.addEventListener('click', () => changeSlide(-1));
nextButton.addEventListener('click', () => changeSlide(1));
