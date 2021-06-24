const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", function (e) {
  const sY = this.scrollY;
  if (sY >= 200) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl);
});

const swiper = new Swiper(".swiper-container", {
  // Optional parameters
  direction: "horizontal",
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },
  mousewheel: {
    invert: true,
  },
  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },

  // effect: "cube",
  // cubeEffect: {
  //   slideShadows: false,
  // },
  effect: "coverflow",
  coverflowEffect: {
    rotate: 30,
    slideShadows: false,
  },
});
