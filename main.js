const testimonialsSlider = document.querySelector('.testimonials-slider');
let scrollAmount = 0;

function scrollSlider() {
    scrollAmount += 300;
    testimonialsSlider.scrollTo({
        left: scrollAmount,
        behavior: 'smooth'
    });
}

setInterval(scrollSlider, 3000);