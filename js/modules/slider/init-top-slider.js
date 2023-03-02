
import Swiper, {Navigation, Pagination} from 'swiper';
// import '../../vendor/swiper';

const topSlider = new Swiper('.promo__swiper', {
  modules: [Navigation, Pagination],
  loop: true,
  slidesPerView: 1,
  autoHeight: true,
  navigation: {
    nextEl: '.promo__swiper-button-next',
    prevEl: '.promo__swiper-button-prev',
  },
  pagination: {
    el: '.promo__swiper-pagination',
    type: 'bullets',
    clickable: true,
  },
});

export default topSlider;
