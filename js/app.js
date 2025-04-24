const scrollContainer = document.querySelector(".scroll_type");
const images = document.querySelectorAll(".inner_img");

let index = 0;
const totalVisible = 6;
const delay = 2000; // 2 seconds

function autoScroll() {
  index++;
  if (index > images.length - totalVisible) {
    index = 0;
  }

  const scrollAmount = images[0].offsetWidth * index;
  scrollContainer.scrollTo({
    left: scrollAmount,
    behavior: "smooth",
  });
}

setInterval(autoScroll, delay);
