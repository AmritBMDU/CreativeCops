// products
const products = [
  {
    image: "AssetImage/product1.png",
    title: "Cordless Drill",
    rating: 5,
    reviews: 3,
    price: 130,
    originalPrice: 250,
    inStock: true,
  },
  {
    image: "AssetImage/product2.png",
    title: "Compact Drill Pro",
    rating: 4,
    reviews: 10,
    price: 99,
    originalPrice: 150,
    inStock: true,
  },
  {
    image: "AssetImage/product3.png",
    title: "Cordless Drill",
    rating: 5,
    reviews: 3,
    price: 130,
    originalPrice: 250,
    inStock: true,
  },
  {
    image: "AssetImage/product4.jpg",
    title: "Compact Drill Pro",
    rating: 4,
    reviews: 10,
    price: 99,
    originalPrice: 150,
    inStock: true,
  },
  {
    image: "AssetImage/product5.jpg",
    title: "Cordless Drill",
    rating: 5,
    reviews: 3,
    price: 130,
    originalPrice: 250,
    inStock: true,
  },
  {
    image: "AssetImage/product6.png",
    title: "Compact Drill Pro",
    rating: 4,
    reviews: 10,
    price: 99,
    originalPrice: 150,
    inStock: true,
  },
  // Add more products...
];

const productList = document.getElementById("product-list");

products.forEach((product) => {
  const stars = "★".repeat(product.rating) + "☆".repeat(5 - product.rating);
  const stockText = product.inStock ? "In Stock" : "Out of Stock";

  const cardHTML = `
<div class="product-card custom-card">
    <img src="${product.image}" alt="${product.title}" class="w-100" style="height: 250px; object-fit: cover;"/>
    <div class="product-title border-top pt-3">${product.title}</div>
    <div class="d-flex align-items-center mb-2">
        <div class="text-warning">${stars}</div>
        <small class="text-muted ms-2">(${product.reviews} Reviews)</small>
    </div>
    <div class="mb-2">
        <span class="price">$${product.price}</span>
        <span class="price-original">$${product.originalPrice}</span>
        <span class="in-stock">${stockText}</span>
    </div>
    <div class="card-footer-btns mt-3">
        <button class="btn d-flex gap-2 px-4 btn-outline-secondary">
            <i class="bi bi-cart2 me-1"></i> Add_To_Cart
        </button>
        <button class="icon-btn"><i class="bi bi-heart"></i></button>
        <button class="icon-btn"><i class="bi bi-eye"></i></button>
    </div>
</div>
`;
  productList.insertAdjacentHTML("beforeend", cardHTML);
});

// common
function changeQty(val) {
  const qtyInput = document.getElementById("qty");
  let qty = parseInt(qtyInput.value);
  qty += val;
  if (qty < 1) qty = 1;
  qtyInput.value = qty;
}

function selectColor(elem) {
  document
    .querySelectorAll(".color-dot")
    .forEach((dot) => dot.classList.remove("active"));
  elem.classList.add("active");
}

function changeMainImage(imgElem) {
  document.getElementById("mainProductImg").src = imgElem.src;
  document
    .querySelectorAll(".thumbnail-img")
    .forEach((img) => img.classList.remove("active-thumb"));
  imgElem.classList.add("active-thumb");
}

// Auto switch carousel every 3 seconds
let currentIndex = 0;
const thumbnails = document.querySelectorAll("#thumbnails img");
setInterval(() => {
  currentIndex = (currentIndex + 1) % thumbnails.length;
  changeMainImage(thumbnails[currentIndex]);
}, 3000);

function showTab(event, tabId) {
  event.preventDefault();
  document
    .querySelectorAll(".tab-pane")
    .forEach((pane) => pane.classList.remove("show", "active"));
  document.getElementById(tabId).classList.add("show", "active");

  document
    .querySelectorAll("#tabMenu .nav-link")
    .forEach((link) => link.classList.remove("active"));
  event.currentTarget.classList.add("active");
}

// review
const reviews = [
  {
    rating: 5,
    title: "Good",
    author: "Admin",
    date: "July 18, 2024",
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    rating: 5,
    title: "Excellent Product",
    author: "User123",
    date: "July 20, 2024",
    comment:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    rating: 4,
    title: "Pretty Good",
    author: "TechFan",
    date: "August 5, 2024",
    comment: "Product is solid but could use some improvements in packaging.",
  },
];

const reviewsContainer = document.getElementById("reviews-container");
const summary = document.getElementById("review-summary");

summary.innerHTML = `<span class="text-warning">★★★★★</span> Based on ${reviews.length} reviews`;

reviews.forEach((review) => {
  const reviewHTML = `
                <div class="mb-4">
                    <div class="d-flex justify-content-between">
                        <span class="text-warning">★★★★★</span>
                        <a href="#" class="text-decoration-none">Report as Inappropriate</a>
                    </div>
                    <p class="fw-semibold mb-1">${review.title}</p>
                    <small class="text-muted">${review.author} on ${review.date}</small>
                    <p class="text-muted mt-2 mb-0">${review.comment}</p>
                </div>
                <hr>
            `;
  reviewsContainer.innerHTML += reviewHTML;
});
