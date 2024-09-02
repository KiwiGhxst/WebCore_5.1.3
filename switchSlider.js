const brendsBtn = document.querySelector('.expander');
const brendsShow = brendsBtn.querySelector('.expander__text');
const brendsArrow = brendsBtn.querySelector('.expander__arrow');
const slidsHidden = document.querySelectorAll('.swiper_slide__hidden');


let show = brendsBtn.addEventListener('click', function () {
  slidsHidden.forEach(element =>
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

let mobileSlider = new Swiper('.swiper', {
  width: 280,
  height: 72,
  loop: false,
  slidesPerView: 1.3,
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    clickable: true,
    dynamicBullets: true,
    dynamicMainBullets: 5,
  },
  breakpoints: {
    768: {
      enabled: false
    }
  }
});