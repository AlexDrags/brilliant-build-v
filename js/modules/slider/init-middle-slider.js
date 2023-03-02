
import Swiper, {Navigation} from 'swiper';
// import '../../vendor/swiper';
const productPrev = document.querySelector('.products__slide-prev');
const productNext = document.querySelector('.products__slide-next');
const swiperNextEl = document.querySelector('.products__swiper-button-next');
const swiperPrevEl = document.querySelector('.products__swiper-button-prev');
const middleSwiper = document.querySelector('.products__swiper');

const middleSlider = new Swiper('.products__swiper', {
  modules: [Navigation],
  loop: false,
  // slidesPerView: 4,
  // spaceBetween: 20,
  autoHeight: true,
  navigation: {
    nextEl: '.products__swiper-button-next',
    prevEl: '.products__swiper-button-prev',
  },
  breakpoints: {
    768: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
  },
});

middleSwiper.addEventListener('click', function (e) {
  const target = e.target;
  if (target === swiperPrevEl && swiperPrevEl.classList.contains('swiper-button-disabled')) {
    productPrev.style.opacity = 0.35;
  } else {
    productPrev.style.opacity = 1;
  }

  if (target === swiperNextEl && swiperNextEl.classList.contains('swiper-button-disabled')) {
    productNext.style.opacity = 0.35;
  } else {
    productNext.style.opacity = 1;
  }
});


productPrev.addEventListener('click', ()=>{

  if (!swiperPrevEl.classList.contains('swiper-button-disabled')) {
    swiperPrevEl.click();
  }

});

productNext.addEventListener('click', ()=>{

  if (!swiperNextEl.classList.contains('swiper-button-disabled')) {
    swiperNextEl.click();
  }

});

export default middleSlider;
