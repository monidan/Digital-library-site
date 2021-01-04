(function () {
  'use strict';

  const headerButtons = document.querySelector('.r2__header__buttons');
  const menuButtonHTML = `<span class="material-icons r2__header__menu__button">menu</span>`;

  const showNavBar = () => {
    const navigationBarEl = document.querySelector('.r2__header__navigation_bar');
    navigationBarEl.classList.toggle('open');

    if(headerButtons.lastChild.innerHTML === 'menu'){
      headerButtons.lastChild.innerHTML = 'close'
    } else {
      headerButtons.lastChild.innerHTML = 'menu'
    }
  }

  window.addEventListener('resize', () => {
    let width = document.documentElement.clientWidth;

    if(width <= 1020 && headerButtons.lastChild.outerHTML !== menuButtonHTML){
      headerButtons.innerHTML += menuButtonHTML;
      const menuButtonNode = document.querySelector('.r2__header__menu__button');

      menuButtonNode.addEventListener('click', showNavBar)
    }

    if(width > 1020 && headerButtons.lastChild.outerHTML === menuButtonHTML){
      const menuButtonNode = document.querySelector('.r2__header__menu__button');
      menuButtonNode.remove();
    }
  })

  window.addEventListener('load', () => {
    const width = document.documentElement.clientWidth;
    if(width <= 1020) {
      headerButtons.innerHTML += menuButtonHTML;
      headerButtons.lastChild.addEventListener('click', showNavBar)
    }
  })
})();