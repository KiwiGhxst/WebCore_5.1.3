const slideHidden = document.querySelectorAll('.swiper_slide__hidden');
const btnShow = document.getElementById('showMore');

window.addEventListener('DOMContenLoader', switchSlider());

btnShow.addEventListener('click', (event) => {
    slideHidden.forEach(element => 
      element.classList.toggle('swiper_slide__hidden')
    );
    
    if ( event.target.classList.contains('expander_more') ) {
      event.target.textContent = 'Показать всё';
      event.target.classList.toggle('expander_more');
    } else {
      event.target.textContent = 'Скрыть';
      event.target.classList.toggle('expander_more');
    } 
  });

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