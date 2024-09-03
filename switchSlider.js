const brendsBtn = document.querySelector('.expander');
const brendsShow = brendsBtn.querySelector('.expander__text');
const brendsArrow = brendsBtn.querySelector('.expander__arrow');
const slideHidden = document.querySelectorAll('.swiper_slide__hidden');

let show = brendsBtn.addEventListener('click', function () {
  slideHidden.forEach(element =>
    element.classList.toggle('swiper_slide__hidden')
  );

  if (brendsShow.textContent === `Скрыть`) {
    brendsShow.textContent = `Показать все`;
    brendsArrow.style["transform"] = "rotate(0deg)";
  } else {
    brendsShow.textContent = `Скрыть`;
    brendsArrow.style["transform"] = "rotate(180deg)";
  }
});

window.addEventListener('DOMContenLoader', switchSlider());

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
      width: 280,
      height: 72,
      loop: false,
      slidesPerView: 1.3,
      freeMode: false,
      pagination: {
        el: ".swiper-pagination",
        type: "bullets",
        clickable: true
      }
    }
  );
}