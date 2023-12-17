window.addEventListener("scroll", setScrollVar);
window.addEventListener("resize", setScrollVar);


function setScrollVar() {
    const htmlEl = document.documentElement;
    const pctHeightScrolled = htmlEl.scrollTop / htmlEl.clientHeight;
    htmlEl.style.setProperty("--scroll", Math.min(pctHeightScrolled * 100, 100));
    htmlEl.style.setProperty("--scrollTop", htmlEl.scrollTop);
    console.log(htmlEl.scrollTop)
}

setScrollVar();

let slideIndex = 1;
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
    let slides = document.getElementsByClassName("mySlides");
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

