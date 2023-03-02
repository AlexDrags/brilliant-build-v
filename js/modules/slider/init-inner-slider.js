
import Swiper, {Pagination} from 'swiper';

const innerSlider = new Swiper('.card__swiper', {
  modules: [Pagination],
  loop: true,
  slidesPerView: 1,
  autoHeight: true,
  pagination: {
    el: '.card__swiper-pagination',
    type: 'bullets',
    clickable: true,
  },
});

export default innerSlider;
