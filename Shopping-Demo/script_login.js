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
/*
      EVENTS
  */

// Hide LightBox on Screens Smaller Than < 640px
window.addEventListener("resize", () => {
    if (window.innerWidth < 640) {
        closeLightBox();
    }
});

// Hide MobileMenu on Screens Greater Than < 1024px
window.addEventListener("resize", () => {
    if (window.innerWidth > 1024) {
        closeMobileMenu();
    }
});

toggleMenu.addEventListener("click", () => {
    openMobileMenu();
});

closeMobileNavgation.addEventListener("click", () => {
    closeMobileMenu();
});

/*
  CART FUNCTIONS
*/

// VARIABLES

let cart = document.querySelector(".cart");
let cartcontent = document.querySelector(".cart-content");
let cartList = document.querySelector(".cart-content .cart-list");
let inCart = document.querySelector(".cart .in-cart");
let checkOutBtn = document.querySelector(".cart-list-wrapper .checkout-btn");

// FUNCTIONS


checkOutBtn.addEventListener("click", (e) => {
    let toastEl = document.getElementById("toaster")
    console.log(cartList.children.length === 0)
    if (cartList.children.length === 0) {
        toastEl.textContent = "Cart is Empty";
        toastEl.className = "show";
        setTimeout(function () {
            toastEl.textContent = "";
            toastEl.className = toastEl.className.replace("show", "")
        }, 3000);
    } else {
        let totalPrice = document.getElementsByClassName("total-price")[0];
        toastEl.textContent = `Checkout Successful! ${totalPrice.textContent} is deducted from your account`;
        toastEl.className = "show";
        setTimeout(function () {
            toastEl.textContent = "";
            toastEl.className = toastEl.className.replace("show", "")
        }, 3000);
    }
})


// Event Listener to Delete Cart Product
cartList.addEventListener("click", (e) => {
    if (e.target.parentElement.classList.contains("item-delete")) {
        e.target.parentElement.parentElement.remove();
    }
});

// EVENTS

cart.addEventListener("click", (e) => {
    let cartIcon = e.target.closest(".cart-icon");
    cartIcon ? cart.classList.toggle("open") : "";
});

