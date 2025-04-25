let inputPrice = document.querySelector(".inputPrice");
let maxPrice = document.querySelector(".maxValuePrice");
inputPrice.addEventListener("change", (event) => {
  let changePrice = event.target.value;
  maxPrice.innerText = changePrice;
});
