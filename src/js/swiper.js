import Swiper from 'swiper';
import { Navigation, Pagination, Scrollbar,EffectCards } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-cards';
var swiper = new Swiper(".swiper", {
    effect: "cards",
    grabCursor: true,
    modules: [EffectCards],
    spaceBetween: 0,
    cardsEffect: {
        perSlideOffset: 6, 
        perSlideRotate: 1, 
      },
  });
