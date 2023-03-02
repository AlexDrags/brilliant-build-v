/* eslint-disable no-undef */
import {iosVhFix} from './utils/ios-vh-fix';
// import {initFormValidate} from './modules/form/init-form-validate';
import './modules/dropdownBtn/dropdown-btn';
import './modules/slider/init-top-slider';
import initTabs from './modules/tabs/init-tabs';
import './modules/slider/init-middle-slider';
import './modules/slider/init-inner-slider';

const form = document.getElementById('form');

const formImage = document.getElementById('formImage');

const formPreview = document.getElementById('formPreview');


async function formSend(e) {
  e.preventDefault();

  // let error = formValidate(form)
  let formData = new FormData(form);
  formData.append('image', formImage.files[0]);

  let response = await fetch('sendmail.php', {
    method: 'POST',
    body: formData
  });

  if(response.ok) {
    let result = await response.json();
    alert(result.message);
    formPreview.innerHTML = '';
    form.reset();
  }else {
    alert('fail');
  }
}

function uploadFile(file) {
  const reader = new FileReader();
  reader.onload = function (e) {
    formPreview.innerHTML = `<img src="${e.target.result}" alt="foto">`

  }
  reader.readAsDataURL(file);
}

// function formValidate(form) {
//   let error = 0;
//   let formReq = document.querySelectorAll('._req');

//   for (let index = 0; index < formReq.length; index++) {
//     const input = formReq[index];

//     if (input.classList.contains('_email')) {

//     }
//   }
// }

// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {

  // Utils
  // ---------------------------------
  iosVhFix();
  form.addEventListener('submit', formSend);

  formImage.addEventListener('change', () => {
    uploadFile(formImage.files[0]);
  })
  // Modules
  // ---------------------------------

  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  window.addEventListener('load', () => {
    initTabs();

  });
});

// ---------------------------------

// ❗❗❗ обязательно установите плагины eslint, stylelint, editorconfig в редактор кода.

// привязывайте js не на классы, а на дата атрибуты (data-validate)

// вместо модификаторов .block--active используем утилитарные классы
// .is-active || .is-open || .is-invalid и прочие (обязателен нейминг в два слова)
// .select.select--opened ❌ ---> [data-select].is-open ✅

// выносим все в дата атрибуты
// url до иконок пинов карты, настройки автопрокрутки слайдера, url к json и т.д.

// для адаптивного JS используется matchMedia и addListener
// const breakpoint = window.matchMedia(`(min-width:1024px)`);
// const breakpointChecker = () => {
//   if (breakpoint.matches) {
//   } else {
//   }
// };
// breakpoint.addListener(breakpointChecker);
// breakpointChecker();

// используйте .closest(el)
