const slideHidden = document.querySelectorAll('.swiper_slide__hidden');
let result = true;

window.addEventListener('DOMContenLoader', switchSlider());

document.addEventListener('click', event => {
  if (event.target.matches(".expander")) {
    btnShow(event);
    slideHidden.forEach(element => 
          element.classList.toggle('swiper_slide__hidden')
        );
  }
});

function btnShow (event) {
  if ( result ) {
    event.target.textContent = 'Скрыть';
    event.target.classList.toggle('expander_more');
    result = false;
  } else {
    event.target.textContent = 'Показать всё';
    event.target.classList.toggle('expander_more');
    result = true;
  } 
}

function switchSlider () {
  const resizableSwiper = (breakpoint, swiperClass, swiperSettings) => {
    let swiper;

    breakpoint = window.matchMedia(breakpoint);

    const enableSwiper = function(className, settings) {
      swiper = new Swiper(className, settings);
    }

    const checker = function() {
      if (breakpoint.matches) {
        return enableSwiper(swiperClass, swiperSettings);
      } else {
        if (swiper !== undefined) swiper.destroy(true, true);
        return;
      }
    };

    breakpoint.addEventListener('change', checker);
    checker();
  }

  resizableSwiper(
    '(max-width: 767px)', 
    '.swiper',
    {
      width: 240,
      height: 72,
      loop: false,
      // slidesPerView: 1.3,
      freeMode: false,
      pagination: {
        el: ".swiper-pagination",
        type: "bullets",
        clickable: true
      }
    }
  );
}