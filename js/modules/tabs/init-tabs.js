const initTabs = ()=> {

  let tabcontent = document.querySelectorAll('.tabcontent');
  let tab = document.querySelector('.tab');
  let tablinks = document.querySelectorAll('.tablinks');


  function hideTabContent(a) {
    for (let i = a; i < tabcontent.length; i++) {
      tabcontent[i].style.display = 'none';
      tablinks[i].className = tablinks[i].className.replace(' active', '');
    }
  }
  hideTabContent(1);

  function showTabContent(b) {
    if (tabcontent[b].style.display === 'none') {
      tabcontent[b].style.display = 'block';
    }
  }

  tab.addEventListener('click', function (event) {
    let target = event.target;
    if (target && target.classList.contains('tablinks')) {
      for (let i = 0; i < tablinks.length; i++) {
        if (target === tablinks[i]) {
          hideTabContent(0);
          tablinks[i].className += ' active';
          showTabContent(i);
          break;
        }
      }
    }
  });
};

export default initTabs;
