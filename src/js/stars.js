let currentSlide = 0;
const slides = document.querySelectorAll('.user-slide');
const slider = document.querySelector('.slider');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

function updateSlider() {
  if (!slider) return;

  const slideWidth = slides[0].offsetWidth;
  const totalSlides = slides.length;

  const isMobile = window.innerWidth <= 1199;

  let offset;
  if (isMobile) {
    offset = -currentSlide * 100;
  } else {
    offset = -currentSlide * (100 / 3);
  }

  slider.style.transform = `translateX(${offset}%)`;
}

function changeSlide(direction) {
  const totalSlides = slides.length;

  currentSlide = (currentSlide + direction + totalSlides) % totalSlides;
  updateSlider();
}

prevButton.addEventListener('click', () => changeSlide(-1));
nextButton.addEventListener('click', () => changeSlide(1));

window.addEventListener('resize', updateSlider);
