// LIBRARY Carousel '#r2__library'

(function(){
  'use strict';

  let leftCounter = 3,
      rightCounter = 0;

  let translateXProps = {
    percentage: 0,
    rem: 0
  }

  const LEFT_MAX = 3;
  const RIGHT_MAX = 3; 

  const PERCANTAGE_STEP = 100;
  const REM_STEP = 1;

  const mainEl = document.querySelector('#r2__library');
  const carouselItemsEls = mainEl.querySelectorAll('.r2__library__carousel__item');

  const leftArrowEl = mainEl.querySelector('.r2__carousel__arrow_left');
  const rightArrowEl = mainEl.querySelector('.r2__carousel__arrow_right');

  const slideCarousel = e => {
    if(isArrowButtonInActive(e.target)) return;

    const direction = getDirection(e.target.classList);
    if(!direction) return;

    if(direction === 'left') {
      rightArrowEl.classList.remove('r2__arrow__button__inactive')

      if(checkLimit(direction)) return;
      leftCounter++;
      rightCounter--;

      translateXProps.percentage -= PERCANTAGE_STEP;
      translateXProps.rem -= REM_STEP;

      carouselItemsEls.forEach(carouselItem => {
        carouselItem.style.transform = `translateX(calc(-${translateXProps.percentage}% - ${translateXProps.rem}rem))`;
      })

      if(checkLimit(direction)){
        leftArrowEl.classList.add('r2__arrow__button__inactive')
      }
    } else {
      leftArrowEl.classList.remove('r2__arrow__button__inactive')

      if(checkLimit(direction)) return;
      rightCounter++;
      leftCounter--;

      translateXProps.percentage += PERCANTAGE_STEP;
      translateXProps.rem += REM_STEP;

      carouselItemsEls.forEach(carouselItem => {
        carouselItem.style.transform = `translateX(calc(-${translateXProps.percentage}% - ${translateXProps.rem}rem))`;
      })

      if(checkLimit(direction)){
        rightArrowEl.classList.add('r2__arrow__button__inactive');
      }
    }
  }

  const getDirection = className => {
    if (!className) return;

    return className.contains('r2__carousel__arrow_left') ? 
      'left'
      : 'right';
  }

  const checkLimit = direction => {
    if(direction === 'left') {
      return leftCounter === LEFT_MAX;
    }else {
      return rightCounter === RIGHT_MAX;
    }
  }

  const isArrowButtonInActive = button => {
    return button.classList.contains('r2__arrow__button__inactive');
  }

  leftArrowEl.addEventListener('click', slideCarousel);
  rightArrowEl.addEventListener('click', slideCarousel);
})();

// ARTICLES Carousel '#r2__popular__articles'

(function(){
  'use strict';

  let leftCounter = 3,
      rightCounter = 0;

  let translateXProps = {
    percentage: 0,
    rem: 0
  }

  const LEFT_MAX = 3;
  const RIGHT_MAX = 3; 

  const PERCANTAGE_STEP = 100;
  const REM_STEP = 1;

  const mainEl = document.querySelector('#r2__popular__articles');
  const carouselItemsEls = mainEl.querySelectorAll('.r2__popular__carousel__item');

  const leftArrowEl = mainEl.querySelector('.r2__carousel__arrow_left');
  const rightArrowEl = mainEl.querySelector('.r2__carousel__arrow_right');

  const slideCarousel = e => {
    if(isArrowButtonInActive(e.target)) return;

    const direction = getDirection(e.target.classList);
    if(!direction) return;

    if(direction === 'left') {
      rightArrowEl.classList.remove('r2__arrow__button__inactive')

      if(checkLimit(direction)) return;
      leftCounter++;
      rightCounter--;

      translateXProps.percentage -= PERCANTAGE_STEP;
      translateXProps.rem -= REM_STEP;

      carouselItemsEls.forEach(carouselItem => {
        carouselItem.style.transform = `translateX(calc(-${translateXProps.percentage}% - ${translateXProps.rem}rem))`;
      })

      if(checkLimit(direction)){
        leftArrowEl.classList.add('r2__arrow__button__inactive')
      }
    } else {
      leftArrowEl.classList.remove('r2__arrow__button__inactive')

      if(checkLimit(direction)) return;
      rightCounter++;
      leftCounter--;

      translateXProps.percentage += PERCANTAGE_STEP;
      translateXProps.rem += REM_STEP;

      carouselItemsEls.forEach(carouselItem => {
        carouselItem.style.transform = `translateX(calc(-${translateXProps.percentage}% - ${translateXProps.rem}rem))`;
      })

      if(checkLimit(direction)){
        rightArrowEl.classList.add('r2__arrow__button__inactive');
      }
    }
  }

  const getDirection = className => {
    if (!className) return;

    return className.contains('r2__carousel__arrow_left') ? 
      'left'
      : 'right';
  }

  const checkLimit = direction => {
    if(direction === 'left') {
      return leftCounter === LEFT_MAX;
    }else {
      return rightCounter === RIGHT_MAX;
    }
  }

  const isArrowButtonInActive = button => {
    return button.classList.contains('r2__arrow__button__inactive');
  }

  leftArrowEl.addEventListener('click', slideCarousel);
  rightArrowEl.addEventListener('click', slideCarousel);
})();

// HEADER Search button

(function(){
  'use strict';

  const mainEl = document.querySelector('#r2__header');

  const searchButtonEl = mainEl.querySelector('.r2__header__search_button');

  const searchInputEl = mainEl.querySelector('#header__search');

  const showInput = e => {
    searchInputEl.style.opacity = '1';
    searchButtonEl.style.cssText = 'opacity: 0; z-index: -1;';
  }

  const closeInput = e => {
    searchInputEl.style.opacity = '0';
    searchButtonEl.style.cssText = 'opacity: 1; z-index: 2;';
  }

  searchButtonEl.addEventListener('click', showInput);
})();