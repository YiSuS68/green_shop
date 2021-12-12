// button click
let btn = document.querySelector("#btn");
let sidebar = document.querySelector(".header-setup");

btn.onclick = function() {
    sidebar.classList.toggle("active");
}


// click slider
var sliderIndex = 1;
showSlides(sliderIndex);

function plusSlides(n) {
    showSlides(sliderIndex += n);
}

function currentSlider(n) {
    showSlides(sliderIndex = n);    
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("slider-item");
    var dots = document.getElementsByClassName("sliders");
    if (n > slides.length) { sliderIndex = 1 }
    if (n < 1 ) { sliderIndex = slides.length }
    for ( i = 0; i < slides.length; i++ ) {
        slides[i].style.display = "none";
        }
    for ( i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[sliderIndex -1].style.display = "block";
        dots[sliderIndex - 1].className += " active";
}


// auto slider
var sliderIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("hi");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    sliderIndex++;
    if (sliderIndex > slides.length) {
        sliderIndex = 1;
    }
    slides[sliderIndex - 1].style.display = "block";
    setTimeout(showSlides, 4000);
}


// click minisize
