import Swiper from 'swiper';
import { Navigation, Pagination, Scrollbar,EffectCards } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-cards';
var swiper = new Swiper(".howSwiper", {
    effect: "cards",
    grabCursor: true,
    modules: [EffectCards],
    spaceBetween: 0,
    cardsEffect: {
        perSlideOffset: 6, 
        perSlideRotate: 1, 
      },
  });

  var swiperReviews = new Swiper(".reviewsSwiper", {
    modules: [Navigation],
    slidesPerView: 1,  
    spaceBetween: 20,
    navigation: {
      nextEl: ".reviews-swiper-button-next",
      prevEl: ".reviews-swiper-button-prev",
    },
    allowTouchMove: true, 
    breakpoints: {
      1200: {
        slidesPerView: 3,  
        spaceBetween: 30,
        allowTouchMove: true, 
      }
    }
  });
