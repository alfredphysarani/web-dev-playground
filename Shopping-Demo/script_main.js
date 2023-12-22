window.addEventListener("DOMContentLoaded", productList);
let filterEl = document.getElementById('filter');

filterEl.addEventListener("input", productList);

/* Assume the data is retrieved from BE */
let productArray = [
    {
        "id": "0",
        "name": "Cat Food",
        "previousPrice": "80.00",
        "currentPrice": "40.00",
        "img": "cat-food.png",
        "url": "prod/product_cat-food.html"
    },
    {
        "id": "1",
        "name": "Dog Food",
        "previousPrice": "70.00",
        "currentPrice": "35.00",
        "img": "dog-food.webp",
		"url": "./prod/product_dog-food.html"
    },
    {
        "id": "2",
        "name": "Candy",
        "previousPrice": "25.00",
        "currentPrice": "20.00",
        "img": "candy.png",
		"url": "./prod/product_candy.html"
    },
    {
        "id": "3",
        "name": "Children Book",
        "previousPrice": "11.00",
        "currentPrice": "10.00",
        "img": "children-book.png",
		"url": "./prod/product_children-book.html"
    },
    {
        "id": "4",
        "name": "Potato Chips",
        "previousPrice": "10.00",
        "currentPrice": "5.00",
        "img": "potato-chips.svg",
		"url": "./prod/product_potato-chips.html"
    },
    {
        "id": "5",
        "name": "Football",
        "previousPrice": "58.10",
        "currentPrice": "55.20",
        "img": "football.png",
		"url": "./prod/product_football.html"
    },
    {
        "id": "6",
        "name": "Basketball",
        "previousPrice": "47.60",
        "currentPrice": "45.20",
        "img": "basketball.png",
		"url": "./prod/product_basketball.html"
    },
    {
        "id": "7",
        "name": "Phone Case",
        "previousPrice": "550.00",
        "currentPrice": "500.00",
        "img": "phone-case.webp",
		"url": "./prod/product_phone-case.html"
    },
    {
        "id": "8",
        "name": "Apple",
        "previousPrice": "11.00",
        "currentPrice": "10.00",
        "img": "apple.svg",
		"desc": "A fresh and juicy apple for a healthy snack.",
		"url": "./prod/product_apple.html"
    },
    {
        "id": "9",
        "name": "Math Book",
        "previousPrice": "8.90",
        "currentPrice": "8.00",
        "img": "math-book.svg",
		"desc": "A comprehensive and easy-to-follow math book for students and teachers.",
		"url": "./prod/product_math-book.html"
    },
    {
        "id": "10",
        "name": "Egg",
        "previousPrice": "21.00",
        "currentPrice": "20.00",
        "img": "egg.png",
		"desc": "Fresh and nutritious eggs for cooking and baking.",
		"url": "./prod/product_egg.html"
    }
]

/* 
    Product List Related Function
*/
function productList(event) {
    let prodContainer = document.getElementsByClassName("products-container")[0];

    /* Event will first Clear the product-container in the HTML*/
    while (prodContainer.firstChild) {
        prodContainer.removeChild(prodContainer.firstChild);
    }

    /* Retrieved the value in the text */
    var filterWord = event.target.value ? event.target.value.toLowerCase() : "";

    /* Looping Through Product List */
    for (let i = 0; i < productArray.length; i++) {

        /* if the product name contains the filter word -> append product-container to HTML */
        if (productArray[i].name.toLowerCase().includes(filterWord) || filterWord === "") {
            prodContainer.innerHTML += "<div class='product-container' id='" +
                productArray[i].id + "'><a href='" + productArray[i].url + "'><img src='img/" +
                productArray[i].img + "'><p class='prod-list-name'>" +
                productArray[i].name + "</p>" +
                "<p>Price: <span class='previous-price'>$" + productArray[i].previousPrice + "</span> <span class='current-price'>$" +
                productArray[i].currentPrice + "</span></p></a></div>";
        }
    }

    if (!prodContainer.firstChild) {
        prodContainer.innerHTML += "<div class='no-filter-result'>No Matched Filter Product</div>"
    }
}

function sortProductList(event) {
    let prodContainer = document.getElementsByClassName("products-container")[0];

    /* Event will first Clear the product-container in the HTML*/
    while (prodContainer.firstChild) {
        prodContainer.removeChild(prodContainer.firstChild);
    }

    var sortBy = event.target.value ? event.target.value.toLowerCase() : "";


}


/* 
    Slide show function 
*/
let slideIndex = 1;
let rotatePeriod = 5000;
showSlides(slideIndex);

function rotateSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slides");
    let dots = document.getElementsByClassName("dot");
    // Reset if index > number of slides
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

function autoRotate() {
    rotateSlides(1);
    setTimeout(autoRotate, rotatePeriod);
}

setTimeout(autoRotate, rotatePeriod);

/*
  CART FUNCTIONS
*/

// VARIABLES

let cart = document.querySelector(".cart");
let cartcontent = document.querySelector(".cart-content");
let cartList = document.querySelector(".cart-content .cart-list");
let inCart = document.querySelector(".cart .in-cart");

let addToCartForm = document.querySelector(".add-to-cart-form");
let formValidation = document.querySelector(".add-to-cart-form .form-alert");
let checkOutBtn = document.querySelector(".cart-list-wrapper .checkout-btn");
let productQuantity = document.querySelector(
    ".add-to-cart-form .product-quantity-num"
);
let plusBtn = document.querySelector(".add-to-cart-form .plus");
let minusBtn = document.querySelector(".add-to-cart-form .minus");

// FUNCTIONS

// Event Listener to Delete Cart Product
cartList.addEventListener("click", (e) => {
    if (e.target.parentElement.classList.contains("item-delete")) {
        e.target.parentElement.parentElement.remove();
    }
});

cart.addEventListener("click", (e) => {
    let cartIcon = e.target.closest(".cart-icon");
    cartIcon ? cart.classList.toggle("open") : "";
});

/*
    VARIABLES
*/
let thumbImagesDivs = Array.from(
    document.querySelectorAll(".product-images-wrapper .thumb-image")
);
let activeImage = document.querySelector(
    ".product-images-wrapper .preview-image"
);
let toggleMenu = document.querySelector(".header .toggle-menu");
let mobileNavgation = document.querySelector(".header .mobile-navgation");
let closeMobileNavgation = document.querySelector(
    ".header .mobile-navgation .close-menu"
);

// Open Mobile Meun
function openMobileMenu() {
    mobileNavgation.classList.add("open");
}

// Close Mobile Meun
function closeMobileMenu() {
    mobileNavgation.classList.remove("open");
}

// Open Overlay
function openOverlay() {
    overlay.classList.add("open");
}

// Close Overlay
function closeOverlay() {
    overlay.classList.remove("open");
}

toggleMenu.addEventListener("click", () => {
    openMobileMenu();
    openOverlay();
});

closeMobileNavgation.addEventListener("click", () => {
    closeMobileMenu();
    closeOverlay();
});