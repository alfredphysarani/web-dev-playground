window.addEventListener("DOMContentLoaded", productList);
let filterEl = document.getElementById('filter');

filterEl.addEventListener("input", productList);

/* Assume the data is retrieved from BE */
let productArray = [
    {
        "id": "0",
        "name": "Cat Food",
        "price": "40",
        "img": "cat-food.png",
        "desc": "Best for 0-2 years old cat. Tuna flavour",
        "url": "prod/prod_cat_food.html"
    }, 
    {
        "id": "1",
        "name": "Dog Food",
        "price": "35",
        "img": "dog-food.webp",
        "desc": "Description Placeholder"
    },
    {
        "id": "2",
        "name": "Candy",
        "price": "20",
        "img": "candy.png",
        "desc": "Description Placeholder"
    },
    {
        "id": "3",
        "name": "Children Book",
        "price": "10",
        "img": "children-book.png",
        "desc": "Description Placeholder"
    },
    {
        "id": "4",
        "name": "Potato Chips",
        "price": "5",
        "img": "potato-chips.svg",
        "desc": "Description Placeholder"
    },
    {
        "id": "5",
        "name": "Football",
        "price": "55.2",
        "img": "football.png",
        "desc": "Description Placeholder"
    },
    {
        "id": "6",
        "name": "Basketball",
        "price": "45.2",
        "img": "basketball.png",
        "desc": "Description Placeholder"
    },
    {
        "id": "7",
        "name": "Phone Case",
        "price": "500",
        "img": "phone-case.webp",
        "desc": "Description Placeholder"
    },
    {
        "id": "8",
        "name": "Apple",
        "price": "10",
        "img": "apple.svg",
        "desc": "Description Placeholder"
    },
    {
        "id": "9",
        "name": "Math Book",
        "price": "8",
        "img": "math-book.svg",
        "desc": "Description Placeholder"
    },
    {
        "id": "10",
        "name": "Eggs",
        "price": "20",
        "img": "egg.png",
        "desc": "Description Placeholder"
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
            prodContainer.innerHTML += "<div class='product-container' id='"+ 
            productArray[i].id +"'><a href='"+ productArray[i].url +"'><img src='img/" + 
            productArray[i].img + "'><p>"+ 
            productArray[i].name + "</p>" + 
            "<p>Price: $ "+ productArray[i].price + "</p><div class='product-desc'>" + 
            productArray[i].desc + "</div></a></div>";
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
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}

function autoRotate() {
    rotateSlides(1);
    setTimeout(autoRotate, rotatePeriod);
}

setTimeout(autoRotate, rotatePeriod);