document
  .querySelector(".nav-bar-toggle")
  .addEventListener("click", function () {
    document.querySelector(".navbar-nav").classList.toggle("show");
  });
// const navDropdown = document.querySelectorAll('.nav-dropdown');
// navDropdown.forEach((nav) => {
//   nav.addEventListener('click', () => {
//     if (nav.style.overflow == "visible") {
//       nav.style.overflow = "hidden";
//     } else {
//       nav.style.overflow = "visible";
//     }
//   })
// })
// Partner Slider JS
$(document).ready(function () {
  $(".partner-slider").owlCarousel({
    loop: true,
    margin: 24,
    nav: false,
    dots: false,
    autoplay: true,
    smartSpeed: 1000,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 2,
      },
      414: {
        items: 2,
      },
      576: {
        items: 3,
      },
      768: {
        items: 4,
      },
      992: {
        items: 5,
      },
      1200: {
        items: 6,
      },
    },
  })
})